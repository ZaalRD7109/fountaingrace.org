#!/usr/bin/env node
// Pre-build gate: refuse to build/deploy if the /sermons library index is broken.
//
// Why this exists: on 2026-06-19 a backfill wrote an empty sermon onto the index
// page, blanking the whole /sermons page in production. A church asking "where are
// my sermons" must NEVER see a blank page. This gate runs before `next build`
// (npm "prebuild"); if it fails, the build fails and the host keeps the last good
// deploy live. A broken index can no longer reach a visitor.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const indexPath = path.join(root, 'app', 'sermons', 'page.tsx');
const sermonsDir = path.join(root, 'app', 'sermons');

const index = fs.readFileSync(indexPath, 'utf8');

// 1. it must be the real library, not a single-sermon stub
if (!index.includes('SermonsFilter') || !index.includes('const sermonPosts = [')) {
  console.error('\n[sermons-index gate] FAIL: app/sermons/page.tsx is not the library ' +
    'listing (missing SermonsFilter / sermonPosts). It looks like a single sermon page ' +
    'was written over the index. Build blocked so the blank page is NOT deployed.\n');
  process.exit(1);
}

// 2. it must list (nearly) all the sermon pages that exist on disk
const dirs = fs.readdirSync(sermonsDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('_'))
  .map(d => d.name);
const listed = (index.match(/slug:\s*['"]/g) || []).length;

const floor = Math.max(1, Math.floor(dirs.length * 0.9));
if (listed < floor) {
  console.error(`\n[sermons-index gate] FAIL: index lists ${listed} sermons but ${dirs.length} ` +
    `sermon pages exist on disk (need at least ${floor}). The library is missing entries. ` +
    `Build blocked.\n`);
  process.exit(1);
}

console.log(`[sermons-index gate] OK: ${listed} sermons listed, ${dirs.length} on disk.`);

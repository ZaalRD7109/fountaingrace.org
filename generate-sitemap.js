// generate-sitemap.js
import fs from "fs";
import path from "path";

const domain = "https://www.fountaingrace.org";
const blogDir = path.resolve("./blog");
const publicDir = path.resolve("./public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

// --- Static pages you want included ---
const staticPages = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about.html", changefreq: "monthly", priority: "0.9" },
  { loc: "/programs.html", changefreq: "monthly", priority: "0.9" },
  { loc: "/get-involved.html", changefreq: "monthly", priority: "0.9" },
  { loc: "/contact.html", changefreq: "monthly", priority: "0.8" },
  { loc: "/donate.html", changefreq: "weekly", priority: "1.0" },
  { loc: "/blog/", changefreq: "weekly", priority: "0.9" },
];

// --- Auto-detect all blog posts ---
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith(".html"));
const blogPages = blogFiles.map(filename => {
  const fullPath = path.join(blogDir, filename);
  const stats = fs.statSync(fullPath);
  return {
    loc: `/blog/${filename}`,
    lastmod: formatDate(stats.mtime),
    changefreq: "monthly",
    priority: "0.8",
  };
});

// --- Merge all pages ---
const urls = [...staticPages, ...blogPages];

// --- Build XML ---
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls
  .map(
    u => `  <url>
    <loc>${domain}${u.loc}</loc>
    <lastmod>${u.lastmod || formatDate(new Date())}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n\n")}

</urlset>
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(sitemapPath, xml, "utf8");
console.log("✅ Sitemap generated:", sitemapPath);

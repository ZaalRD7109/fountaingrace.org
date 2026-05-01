// Supabase Edge Functions base URL
// Public URL - not a secret. Set NEXT_PUBLIC_SUPABASE_EDGE_BASE in .env.local or
// Cloudflare Pages environment variables to override.
export const EDGE_BASE =
  process.env.NEXT_PUBLIC_SUPABASE_EDGE_BASE ??
  'https://rmurdihrhcxevtzkrbmx.supabase.co/functions/v1'

const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_ANON_KEY = "SUA_PUBLIC_ANON_KEY";

window.supabase = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

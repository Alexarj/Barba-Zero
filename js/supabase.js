const SUPABASE_URL = "https://ujarxofdtmcjulqutpfd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ZhOEQgwUX5A6kQDvm0kB1g_houcldK8";

window.supabase = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

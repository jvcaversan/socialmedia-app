import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://btlroejpvmgkiaxzgyin.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0bHJvZWpwdm1na2lheHpneWluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1MTM2NzUsImV4cCI6MjA0MTA4OTY3NX0.LYebbBDxAuB2cyl6IMIgQQguzjc1sA7maW8C_Y3hQpI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_URL as string;

const key = process.env.NEXT_PUBLIC_KEY as string;

const supabase = createClient(url, key);

export default supabase;

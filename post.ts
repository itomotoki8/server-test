"use server";

export async function submit(formData: FormData) {
  const user = formData.get("user");
  try {
    await fetch("https://cspocagbpbrgambdnhet.supabase.co/rest/v1/users", {
      method: "POST",
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: user }),
    });
    return true;
  } catch (error) {
    return false;
  }
}

'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");

    if (token && email && name) {
      // Simpan di localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ name, email }));

      // Redirect ke halaman home/dashboard
      router.push("/home");
    }
  }, [router]);

  return <p>Logging in via SSO...</p>;
}

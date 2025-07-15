"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { handleAuthCallback } from "@/features/auth/api";
import { setToken } from "@/lib/api/token";
import { toast } from "sonner";

export default function OAuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const token = searchParams.get("token");
        const name = searchParams.get("name");
        const email = searchParams.get("email");

        if (!token || !name || !email) {
          toast.error("Invalid OAuth callback data");
          router.push("/login");
          return;
        }

        // Store the auth data
        const authData = await handleAuthCallback(token, name, email);
        setToken(authData.token);
        
        toast.success("Successfully logged in!");
        router.push("/");
      } catch {
        toast.error("Failed to complete authentication");
        router.push("/login");
      }
    };

    handleCallback();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Completing authentication...</h1>
        <p className="text-gray-600">Please wait while we set up your account.</p>
      </div>
    </div>
  );
}

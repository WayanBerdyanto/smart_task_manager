// import Link from "next/link";
// import { API_URL } from "@/lib/constant/constants";
import LoginForm from "@/components/form/login-form";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <div className="flex flex-1 items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

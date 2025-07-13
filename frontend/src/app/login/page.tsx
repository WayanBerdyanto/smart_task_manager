import Link from "next/link";
import { API_URL } from "@/lib/constant/constants";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>

      <Link className="bg-blue-500 text-white p-2 rounded-md" href={`${API_URL}/auth/google`}>Login With Google</Link>
      <Link className="bg-gray-500 text-white p-2 rounded-md" href={`${API_URL}/auth/github`}>Login With Github</Link>
    </div>
  );
}

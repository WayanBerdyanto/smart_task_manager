"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Mail, Sparkles, Lock, User } from "lucide-react"
import { useAuth } from "@/features/auth/hooks"
import { toast } from "sonner"
import { getOAuthUrl, Provider } from "@/features/auth/api"

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { login, loading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await login(email, password)
      toast.success("Login successful!")
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("An error occurred during login")
      }
    }
  }

  const handleSSOLogin = (provider: Provider) => {
    const url = getOAuthUrl(provider)
    window.location.href = url
  }

  return (
    <Card className="bg-white/80 backdrop-blur-lg border border-gray-200/50 shadow-2xl rounded-2xl p-2">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {isLogin ? "Welcome Back" : "Join TaskFlow"}
        </CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          {isLogin ? "Sign in to your decentralized workspace" : "Create your Web3-ready account"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                <User className="inline-block w-4 h-4 mr-2 text-[var(--color-primary)]" />
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
                className="bg-white/60 border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] rounded-lg"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              <Mail className="inline-block w-4 h-4 mr-2 text-[var(--color-primary)]" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/60 border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              <Lock className="inline-block w-4 h-4 mr-2 text-[var(--color-primary)]" />
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/60 border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] rounded-lg"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] hover:from-[var(--color-primary-hover)] hover:to-[var(--color-primary)] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 py-3 text-base"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Sign In Securely" : "Create Account"}
            <Sparkles className="w-4 h-4 ml-2" />
          </Button>
        </form>

        <Separator className="bg-gray-300/50 my-6" />

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full bg-white/60 backdrop-blur-sm border-2 border-gray-200 hover:border-[var(--color-primary)] rounded-full shadow-md hover:shadow-lg transition-all duration-300 py-3 text-base"
            onClick={() => handleSSOLogin("google")}
            disabled={loading}
          >
            <Mail className="w-5 h-5 mr-3 text-red-500" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white/60 backdrop-blur-sm border-2 border-gray-200 hover:border-[var(--color-primary)] rounded-full shadow-md hover:shadow-lg transition-all duration-300 py-3 text-base"
            onClick={() => handleSSOLogin("github")}
            disabled={loading}
          >
            <Github className="w-5 h-5 mr-3 text-gray-800" />
            Continue with GitHub
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600 pt-2">
          {isLogin ? "New to TaskFlow?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="font-semibold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create an account" : "Sign in here"}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

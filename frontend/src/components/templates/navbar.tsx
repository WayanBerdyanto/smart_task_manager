"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, CheckSquare, Wallet, Globe, Sparkles } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
      <div
        className={`container mx-auto transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl"
            : "bg-white/90 backdrop-blur-lg border border-gray-100/30 shadow-xl"
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo with Web3 styling */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Smart Task
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Web3 styling */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-50/50 rounded-full p-1">
            <Link
              href="#features"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons with Web3 styling */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" className="rounded-full hover:bg-gray-100/80 transition-all duration-200">
                <Globe className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-200 border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button with Web3 styling */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full hover:bg-gray-100/80 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Web3 styling */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 mt-2 pt-4 pb-4 px-6">
            <div className="flex flex-col space-y-2">
              <Link
                href="#features"
                className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 rounded-xl transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Globe className="w-4 h-4 mr-3 inline" />
                Features
              </Link>
              <Link
                href="#pricing"
                className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 rounded-xl transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wallet className="w-4 h-4 mr-3 inline" />
                Pricing
              </Link>
              <Link
                href="#about"
                className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 rounded-xl transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="w-4 h-4 mr-3 inline" />
                About
              </Link>
              <Link
                href="#contact"
                className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 rounded-xl transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <CheckSquare className="w-4 h-4 mr-3 inline" />
                Contact
              </Link>

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200/50">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="w-full justify-start rounded-xl hover:bg-gray-50/80 transition-all duration-200"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-0">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

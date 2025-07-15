"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckSquare,
  Clock,
  Filter,
  Shield,
  ArrowRight,
  Play,
  Bell,
  BarChart3,
  Sparkles,
  Globe,
  Zap,
  Star,
  Users,
  Rocket,
} from "lucide-react"
import ButtomBanner from "@/components/templates/buttom-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <Badge className="mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white border-0 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />✨ New: Web3 Pomodoro Timer Integration
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Organize Your Tasks,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Boost Your Productivity
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            TaskFlow helps you manage tasks efficiently with powerful filtering, Web3-ready Pomodoro timers, and smart
            AI reminders.
            <span className="block mt-2 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get more done with less stress.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href="/login">
              <Button
                size="lg"
                className="text-lg px-10 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] hover:from-[var(--color-primary-hover)] hover:to-[var(--color-primary)] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group"
              >
                <Rocket className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Started Free
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Free forever plan
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-blue-500" />
              Web3 Ready
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white border-0 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Everything You Need to Stay
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Productive
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful Web3-ready features designed to help you organize, prioritize, and complete your tasks
              efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckSquare,
                title: "Smart Task Management",
                description: "Create, organize, and track tasks with AI-powered priorities, categories, and due dates.",
                color: `from-[var(--color-primary)] to-[var(--color-primary-hover)]`,
                bgColor: "bg-blue-50",
              },
              {
                icon: Clock,
                title: "Web3 Pomodoro Timer",
                description: "Built-in focus timer with blockchain-verified work sessions and customizable intervals.",
                color: `from-[var(--color-success)] to-[var(--color-success-hover)]`,
                bgColor: "bg-green-50",
              },
              {
                icon: Filter,
                title: "Advanced AI Filtering",
                description: "Smart filtering with machine learning to surface the most important tasks automatically.",
                color: `from-[var(--color-secondary)] to-[var(--color-secondary-hover)]`,
                bgColor: "bg-gray-50",
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Never miss a deadline with intelligent push notifications and overdue task alerts.",
                color: `from-[var(--color-warning)] to-[var(--color-warning-hover)]`,
                bgColor: "bg-orange-50",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Visual dashboard with completion stats, productivity insights, and performance metrics.",
                color: `from-[var(--color-primary)] to-[var(--color-primary-hover)]`,
                bgColor: "bg-blue-50",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "End-to-end encryption with Web3 authentication and decentralized data storage options.",
                color: `from-[var(--color-danger)] to-[var(--color-danger-hover)]`,
                bgColor: "bg-red-50",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl group hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}
                    >
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white border-0 px-4 py-2 rounded-full">
              <Users className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              How TaskFlow Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our intuitive Web3-powered task management system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Create Tasks",
                description:
                  "Add tasks with AI-powered descriptions, smart due dates, priorities, and categories to stay organized.",
                color: `from-[var(--color-primary)] to-[var(--color-primary-hover)]`,
                bgColor: "bg-blue-50",
              },
              {
                step: "2",
                title: "Focus & Work",
                description:
                  "Use the Web3 Pomodoro timer to maintain focus and work efficiently with blockchain-verified sessions.",
                color: `from-[var(--color-success)] to-[var(--color-success-hover)]`,
                bgColor: "bg-green-50",
              },
              {
                step: "3",
                title: "Track Progress",
                description:
                  "Monitor your productivity with AI insights, visual stats, and celebrate your achievements with NFT rewards.",
                color: `from-[var(--color-secondary)] to-[var(--color-secondary-hover)]`,
                bgColor: "bg-gray-50",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Simple, Transparent
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for you. Upgrade or downgrade at any time with Web3 flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                description: "Perfect for personal use",
                features: ["Up to 50 tasks", "Basic filtering", "Pomodoro timer", "Mobile app"],
                buttonText: "Get Started",
                buttonVariant: "outline" as const,
                popular: false,
              },
              {
                name: "Pro",
                price: "$9",
                description: "For power users",
                features: [
                  "Unlimited tasks",
                  "Advanced AI filtering",
                  "Custom categories",
                  "Priority support",
                  "Web3 features",
                ],
                buttonText: "Start Free Trial",
                buttonVariant: "default" as const,
                popular: true,
              },
              {
                name: "Team",
                price: "$19",
                description: "For teams and collaboration",
                features: [
                  "Everything in Pro",
                  "Team collaboration",
                  "Shared workspaces",
                  "Admin controls",
                  "NFT rewards",
                ],
                buttonText: "Contact Sales",
                buttonVariant: "outline" as const,
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl ${plan.popular ? "border-blue-500 scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white border-0 px-4 py-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold text-gray-900 mt-4 mb-2">{plan.price}</div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                          <CheckSquare className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/login" className="block">
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full rounded-full py-3 transition-all duration-300 ${
                        plan.buttonVariant === "default"
                          ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] hover:from-[var(--color-primary-hover)] hover:to-[var(--color-primary)] text-white border-0 shadow-lg hover:shadow-xl"
                          : "bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[var(--color-primary)] shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ButtomBanner />
    </div>
  )
}

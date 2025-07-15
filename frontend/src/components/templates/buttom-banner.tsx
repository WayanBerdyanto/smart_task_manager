import { ArrowRight, Play, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ButtomBanner() {
  return (
    <section className="container mx-auto py-14 mb-12 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-primary)] relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Boost Your Productivity?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Join thousands of users who have transformed their task management
          with TaskFlow`s Web3-powered productivity suite.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/login">
            <Button
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-gray-100 text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Rocket className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Start Free Today
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-4 bg-transparent rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Play className="mr-3 h-5 w-5" />
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

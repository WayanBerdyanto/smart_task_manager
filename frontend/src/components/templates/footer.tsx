import Link from "next/link";
import { CheckSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] rounded-lg blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] p-2 rounded-lg">
                  <CheckSquare className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold">TaskFlow</span>
                <span className="block text-xs text-gray-400">Web3 Ready</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The ultimate Web3-powered task management solution for individuals
              and teams in the decentralized future.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: [
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "Web3 Integrations", href: "#" },
                { name: "API", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About", href: "#about" },
                { name: "Blog", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Support",
              links: [
                { name: "Help Center", href: "#" },
                { name: "Documentation", href: "#" },
                { name: "Status", href: "#" },
                { name: "Privacy", href: "#" },
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 TaskFlow. All rights reserved. Built for the Web3
            future.
          </p>
        </div>
      </div>
    </footer>
  );
}

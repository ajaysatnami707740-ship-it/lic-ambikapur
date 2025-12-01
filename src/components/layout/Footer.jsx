import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, PhoneCall } from "lucide-react";

// LIC-specific tags & categories
const categoriesSeed = [
  { name: "LIC Policy Guides", slug: "lic-policy-guides" },
  { name: "LIC Term Insurance", slug: "lic-term-insurance" },
  { name: "Savings & Investment Plans", slug: "savings-investment-plans" },
  { name: "Child Education Plans", slug: "child-education-plans" },
  { name: "Retirement & Pension Plans", slug: "retirement-pension-plans" },
  { name: "LIC Health Insurance", slug: "lic-health-insurance" },
  { name: "LIC Agent & Career", slug: "lic-agent-career" },
  { name: "Insurance & Finance Knowledge", slug: "insurance-finance-knowledge" },
];

const tagsSeed = [
  { name: "LIC Plans", slug: "lic-plans" },
  { name: "Premium Calculator", slug: "premium-calculator" },
  { name: "LIC Agent", slug: "lic-agent" },
  { name: "Tax Benefits", slug: "tax-benefits" },
  { name: "Maturity Benefits", slug: "maturity-benefits" },
  { name: "Term Plan", slug: "term-plan" },
  { name: "Child Policy", slug: "child-policy" },
  { name: "Pension Plan", slug: "pension-plan" },
  { name: "Health Plan", slug: "health-plan" },
  { name: "Insurance Tips", slug: "insurance-tips" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-blue-50 via-white to-yellow-50 text-blue-900 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">LIC Ambikapur</h3>
            <p className="text-base text-blue-900 leading-relaxed">
              Ajay Satnami – Development Officer in LIC, Ambikapur. 
              Helping you secure your future and achieve your dreams with LIC policies.
            </p>
          </div>

          {/* Categories & Tags */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {categoriesSeed.slice(0, 4).map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-blue-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              {tagsSeed.slice(0, 4).map((tag, idx) => (
                <li key={idx}>
                  <Link
                    href={`/tag/${tag.slug}`}
                    className="text-blue-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">Contact</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <Link href="https://facebook.com" target="_blank" className="text-blue-900 hover:text-blue-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-blue-900 hover:text-blue-600 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-blue-900 hover:text-blue-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-blue-900 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex flex-col md:items-end items-center text-blue-900 space-y-1">
              <Link href="tel:7000841676" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                <PhoneCall className="w-5 h-5" /> 7000 841 676
              </Link>
              <Link href="https://wa.me/917000841676" target="_blank" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 pt-6 border-t border-blue-200 text-center text-sm text-blue-900">
          © 2025 <span className="font-medium text-blue-700">LIC Ambikapur</span>. Ajay Satnami – Development Officer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

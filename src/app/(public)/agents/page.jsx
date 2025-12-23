// LIC Agents Listing Page (Responsive + SEO Optimized)

import Image from "next/image";

export const metadata = {
  title: "LIC Agents List – Find Trusted LIC Agents & Bima Sakhi Near You",
  description:
    "Browse verified LIC agents and Bima Sakhi across Chhattisgarh & MP. Get trusted LIC policy guidance, claim support and insurance advice.",
};

import { agentsList } from "../../../utils/seedData";

export default function AgentsPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            LIC Agents & Bima Sakhi Directory
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Find trusted and verified LIC Agents and Bima Sakhi near you. Get help
            with LIC policies, premium calculation, tax benefits and claim support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsList.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Image (1:1 Aspect Ratio) */}
              <div className="relative w-full aspect-square">
                <Image
                  src={agent.image}
                  alt={`${agent.name} – ${agent.role} in ${agent.location}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {agent.name}
                </h2>

                <p className="text-sm text-indigo-600 font-medium mt-1">
                  {agent.role} • {agent.location}
                </p>

                {agent.workingArea && (
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>कार्य क्षेत्र:</strong> {agent.workingArea}
                  </p>
                )}

                {/* Full Description (NO clamp) */}
                <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                  {agent.description}
                </p>

                {/* Call CTA */}
                <div className="mt-6">
                  {agent.phone ? (
                    <a
                      href={`tel:${agent.phone}`}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition"
                    >
                      📞 Call {agent.name}
                    </a>
                  ) : (
                    <div className="text-center text-sm text-gray-400">
                      Contact unavailable
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto mt-16 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Our LIC Agent Directory?
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Verified LIC Agents & Government-appointed Bima Sakhi</li>
            <li>Complete policy guidance at one place</li>
            <li>Direct calling – no middleman</li>
            <li>Support from policy purchase to claim settlement</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

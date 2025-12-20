import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#003399]/10 via-[#FED700]/20 to-white overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#FED70033,_#00339922)] opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col md:flex-row items-center md:justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Trusted LIC Advisor in{" "}
            <span className="bg-gradient-to-r from-[#003399] to-[#FED700] bg-clip-text text-transparent">
              Ambikapur
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
            I am <strong>Ajay Satnami</strong>, Development Officer (LIC), Ambikapur.  
            Get expert assistance for{" "}
            <strong>LIC policy guidance</strong>,{" "}
            <strong>financial planning</strong>,{" "}
            <strong>tax-saving solutions</strong>, and{" "}
            <strong>secure investment options</strong> for your future.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* Call Button */}
            <a
              href="tel:7000841676"
              className="px-7 py-3 bg-[#003399] text-white rounded-lg shadow-lg font-semibold hover:bg-[#002080] transition-all duration-200 text-center"
            >
               Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/7000841676"
              target="_blank"
              className="px-7 py-3 border border-[#003399] text-[#003399] rounded-lg font-semibold hover:bg-[#003399]/10 transition-all duration-200 text-center"
            >
              WhatsApp
            </a>

          </div>

          {/* Trust Indicator */}
          <div className="mt-8 text-gray-600 text-sm sm:text-base">
            ⭐ Trusted LIC Development Officer in <strong>Ambikapur</strong> with 4–5 years of experience
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-center">
          <Image
            src="https://res.cloudinary.com/dnq42wt3a/image/upload/v1766249657/posts/wzjjrfopg04bxipjtcut.png"
            alt="LIC Development Officer Ajay Satnami"
            width={580}
            height={580}
            priority
            className="drop-shadow-xl select-none rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}

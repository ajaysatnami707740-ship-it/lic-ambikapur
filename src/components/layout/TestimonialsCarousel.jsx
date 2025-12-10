"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useCallback } from "react";
import { MessageCircle } from "lucide-react"; // avatar icon

export default function TestimonialsCarousel() {
  
  // ---------- TESTIMONIAL DATA ----------
  const testimonials = [
  {
    name: "Pooja Verma",
    role: "LIC Bima Sakhi (Ambikapur)",
    message:
      "Ajay Satnami sir ke guidance se mujhe LIC training, selling skills aur customer handling sab kuch seekhne ko mila. LIC Ambikapur me career start karne ke liye unka support sabse bada reason hai.",
    keyword: "lic bima sakhi training"
  },
  {
    name: "Neha Sharma",
    role: "LIC Agent – Women Advisor",
    message:
      "LIC Ambikapur team ne mujhe flexible working aur stable income dono di. Development Officer Ajay Satnami ka mentorship mujhe har mahine better performance karne me help karta hai.",
    keyword: "lic women agent opportunity"
  },
  {
    name: "Riya Patel",
    role: "Policyholder – Jeevan Anand",
    message:
      "Jeevan Anand policy ke benefits Ajay ji ne itne simple words me samjhaye ki decision lena easy ho gaya. LIC ka claim process bhi kaafi smooth raha.",
    keyword: "jeevan anand lic review"
  },
  {
    name: "Anjali Gupta",
    role: "LIC Bima Sakhi Trainee",
    message:
      "Mujhe ghar se kaam karte hue income chahiye thi. Bima Sakhi program Ajay sir ke through join kiya aur ab monthly stable earning ho rahi hai.",
    keyword: "lic bima sakhi income"
  },
  {
    name: "Kiran Mishra",
    role: "LIC Policyholder",
    message:
      "Child Future Plan ke baare me Ajay Satnami sir ne detailed financial planning batayi. LIC Ambikapur ka guidance truly trustworthy hai.",
    keyword: "lic child plan review"
  },

  // ⭐ NEWLY GENERATED (Low Volume Keywords + Generic + Rankable)

  {
    name: "Sakshi Yadav",
    role: "LIC Women Advisor (Ambikapur)",
    message:
      "Maine LIC me part-time shuru kiya tha, par Ajay sir ke regular follow-ups aur motivation ne mujhe full-time advisor banne ka confidence diya.",
    keyword: "lic women advisor support"
  },
  {
    name: "Ishita Tiwari",
    role: "Policyholder – New Endowment Plan",
    message:
      "Ajay Satnami sir ne mere long-term savings aur protection goals ko samajhkar best LIC plan suggest kiya. LIC Ambikapur ka experience kaafi smooth tha.",
    keyword: "lic endowment plan experience"
  },
  {
    name: "Divya Singh",
    role: "LIC Bima Sakhi",
    message:
      "Bima Sakhi program ne mujhe financial independence di. Ajay sir har step par training aur marketing support dete hain, jisse working easy hoti hai.",
    keyword: "bima sakhi support program"
  },
  {
    name: "Meena Rajput",
    role: "LIC Policyholder – Term Plan",
    message:
      "LIC Term Plan ki affordability aur security samajhne me Ajay ji ne complete clarity di. LIC Ambikapur service mujhe bahut helpful lagi.",
    keyword: "lic term plan feedback"
  },
  {
    name: "Swati Chauhan",
    role: "LIC Agent Trainee",
    message:
      "Ajay Satnami sir ka mentorship structure, daily guidance aur simple selling formula ne mujhe LIC me strong start diya. Training process easy aur practical tha.",
    keyword: "lic agent trainee guidance"
  }
];


  // ---------- EMBLA SETUP ----------
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {}, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#F8F9FF] to-white">
      <h2 className="text-center text-3xl font-bold text-[#003399] mb-10">
        What People Say About <span className="text-[#E8B44C]">LIC Ambikapur</span>
      </h2>

      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 
                w-[90%] sm:w-[45%] lg:w-[22%]
                bg-white
                p-5 
                rounded-xl 
                shadow-md 
                border border-gray-100 
                hover:shadow-lg 
                transition
                bg-gradient-to-br from-white via-[#fff9e8] to-[#f0f4ff]
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-[#003399]/10 rounded-full">
                  <MessageCircle className="text-[#003399]" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {t.message}
              </p>

              <p className="text-xs text-[#003399] mt-3 italic">
                #{t.keyword}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

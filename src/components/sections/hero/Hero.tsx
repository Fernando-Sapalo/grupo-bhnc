"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { hero } from "@/constants/hero";
import { company } from "@/constants/company";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = hero.slides;
  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section className="bg-[#0B1220] pt-28 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-8 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        {/* Left content */}
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="text-sm font-semibold tracking-[0.12em] text-[#D4AF37]">
              {hero.badge}
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
            {hero.title.map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="group flex items-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-[#0B1220] transition-all duration-300 hover:bg-[#C9A431]"
            >
              {hero.primaryButton}

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/servicos"
              className="group flex items-center gap-3 rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-[#D4AF37]/70 hover:text-[#D4AF37]"
            >
              {hero.secondaryButton}

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-3 text-sm text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span>
              Desde {company.founded} · Presente em{" "}
              {company.presence.map((location) => location.country).join(", ")}
            </span>
          </div>
        </div>

        {/* Service slider */}
        <div
          className="group relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0F1729]">
            {/* Images */}
            {slides.map((slide, index) => (
  <Image
    key={slide.id}
    src={slide.image}
    alt={slide.title}
    fill
    loading={index === 0 ? "eager" : "lazy"}
    fetchPriority={index === 0 ? "high" : "auto"}
    sizes="(max-width: 1024px) 100vw, 50vw"
    className={`object-cover transition-all duration-700 ${
      index === activeSlide
        ? "scale-100 opacity-100"
        : "pointer-events-none scale-[1.02] opacity-0"
    }`}
  />
))}

            {/* Image gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-transparent to-transparent" />

            {/* Arrows */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Serviço anterior"
              className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0B1220]/65 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] group-hover:opacity-100"
            >
              <ArrowLeft size={19} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próximo serviço"
              className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0B1220]/65 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] group-hover:opacity-100"
            >
              <ArrowRight size={19} strokeWidth={1.8} />
            </button>

            {/* Slide information */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <div className="flex items-end justify-between gap-8">
                <div className="max-w-md">
                  <div>
  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
    {currentSlide.title}
  </h3>

  <p className="mt-2 text-sm leading-6 text-white/65">
    {currentSlide.description}
  </p>
</div>

                </div>

                <Link
                  href={currentSlide.href}
                  aria-label={`Conhecer ${currentSlide.title}`}
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1220] sm:flex"
                >
                  <ArrowRight size={18} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>

          {/* Slider navigation */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ver ${slide.title}`}
                  className={`h-[2px] transition-all duration-300 ${
                    index === activeSlide
                      ? "w-10 bg-[#D4AF37]"
                      : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.12em]">
              <span className="text-[#D4AF37]">
                {String(activeSlide + 1).padStart(2, "0")}
              </span>

              <span className="text-white/25">/</span>

              <span className="text-white/40">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-8 md:grid-cols-4">
          {hero.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-8 ${
                index > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""
              }`}
            >
              <div className="text-3xl font-bold text-[#D4AF37]">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-white/55">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
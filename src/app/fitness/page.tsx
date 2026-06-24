"use client";

import { useEffect, useRef, useState } from "react";

export default function FitnessPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const programs = [
    { tag: "strength", title: "力量突破", desc: "深蹲 / 硬拉 / 卧推系统训练，目标导向的线性周期化计划", icon: "🏋️", color: "from-orange-500 to-red-500" },
    { tag: "cardio", title: "燃脂塑形", desc: "HIIT + 有氧结合，高效燃脂同时保持肌肉量", icon: "🔥", color: "from-rose-500 to-pink-500" },
    { tag: "yoga", title: "柔韧平衡", desc: "瑜伽与普拉提融合课程，改善体态与核心稳定性", icon: "🧘", color: "from-emerald-500 to-teal-500" },
    { tag: "strength", title: "增肌计划", desc: "8周科学增肌方案，精准营养 + 渐进超负荷训练", icon: "💪", color: "from-amber-500 to-orange-500" },
    { tag: "cardio", title: "有氧耐力", desc: "跑步 + 骑行 + 游泳交叉训练，提升心肺功能", icon: "🏃", color: "from-blue-500 to-cyan-500" },
    { tag: "yoga", title: "冥想放松", desc: "正念冥想与呼吸训练，缓解压力改善睡眠质量", icon: "🌿", color: "from-green-500 to-emerald-500" },
  ];

  const filteredPrograms = activeFilter === "all" ? programs : programs.filter((p) => p.tag === activeFilter);

  return (
    <main className="min-h-screen bg-[#0f0f1a] text-slate-200 font-sans antialiased">
      {/* ===== Navbar ===== */}
      <nav
        className={`fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-[#0f0f1a]/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3" : ""
        }`}
      >
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="text-2xl">⚡</span> DevStudio
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="#programs" className="hover:text-white transition-colors">Programs</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-8 reveal">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            Start Your Transformation Today
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] reveal">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Body & Mind
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal">
            Science-backed training programs designed to push your limits.
            Whether you are a beginner or an athlete, find your perfect plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <a href="#programs" className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 rounded-xl font-bold text-white transition-all shadow-lg shadow-orange-500/25">
              Explore Programs →
            </a>
            <a href="#pricing" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {[
            { value: "500+", label: "Active Members" },
            { value: "50+", label: "Expert Coaches" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "12+", label: "Years Experience" },
          ].map((s, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Programs ===== */}
      <section id="programs" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2 text-center reveal">Training <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Programs</span></h2>
        <p className="text-slate-500 text-center mb-10 reveal">Find the perfect program for your goals</p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap reveal">
          {["all", "strength", "cardio", "yoga"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f === "all" ? "All" : f === "strength" ? "Strength" : f === "cardio" ? "Cardio" : "Yoga"}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 reveal"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl mb-4`}>{p.icon}</div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <span className="text-orange-400 text-sm font-medium group-hover:underline cursor-pointer">Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2 text-center reveal">Simple <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Pricing</span></h2>
        <p className="text-slate-500 text-center mb-10 reveal">No hidden fees. Cancel anytime.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { name: "Basic", price: "$19", desc: "Access to gym floor & basic equipment", features: ["Open gym access", "Locker room", "1 group class/week", "Fitness assessment"], popular: false },
            { name: "Pro", price: "$49", desc: "Full access + group classes", features: ["Everything in Basic", "Unlimited group classes", "Personalized plan", "Nutrition guide", "Priority booking"], popular: true },
            { name: "Elite", price: "$99", desc: "1-on-1 coaching + all perks", features: ["Everything in Pro", "Dedicated coach", "Monthly check-ins", "Meal plan", "Recovery sessions", "24/7 support"], popular: false },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-300 reveal ${
                plan.popular
                  ? "bg-gradient-to-b from-orange-500/10 to-transparent border-orange-500/30 scale-105"
                  : "bg-white/[0.03] border-white/[0.06] hover:border-orange-500/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white">Most Popular</div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="text-4xl font-black mb-2">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
              <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                plan.popular
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 hover:from-orange-400 hover:to-red-400"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="rounded-2xl p-10 bg-gradient-to-br from-orange-500/5 to-pink-500/5 border border-orange-500/10 reveal">
          <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Book a free consultation call and get a personalized training plan.
          </p>
          <a
            href="mailto:xiyue030823@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 rounded-xl font-bold text-white transition-all shadow-lg shadow-orange-500/25 text-lg"
          >
            Book Free Consultation →
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/5">
        © 2026 DevStudio · Built with Next.js + AI
      </footer>
    </main>
  );
}
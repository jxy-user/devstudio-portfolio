"use client";

import { useEffect, useRef, useState } from "react";

// Cat breed data
const catBreeds = [
  { name: "British Shorthair", en: "British Shorthair", tag: "short", traits: ["温顺", "独立", "圆脸"], desc: "体格结实，性格温和安静，蓝灰色是最经典毛色", img: "" },
  { name: "Ragdoll", en: "Ragdoll Cat", tag: "long", traits: ["粘人", "温柔", "蓝眼"], desc: "体型大而优雅，抱起来像布娃娃一样柔软放松", img: "" },
  { name: "Siamese", en: "Siamese Cat", tag: "short", traits: ["活泼", "聪明", "话痨"], desc: "修长优雅，重点色毛色，性格外向爱交流", img: "" },
  { name: "Maine Coon", en: "Maine Coon", tag: "long", traits: ["巨型", "友善", "聪明"], desc: "体型最大的家猫品种之一，性格温柔像狗狗", img: "" },
  { name: "Scottish Fold", en: "Scottish Fold", tag: "short", traits: ["折耳", "安静", "呆萌"], desc: "独特的折叠耳朵，圆脸圆眼，性格温和可爱", img: "" },
  { name: "Persian", en: "Persian Cat", tag: "long", traits: ["优雅", "安静", "扁脸"], desc: "长毛扁脸，气质高贵，需要定期梳理毛发", img: "" },
];

const careGuides = [
  { title: "新手养猫必备清单", desc: "猫砂盆、猫抓板、食盆水盆、猫粮、玩具……一份清单搞定", icon: "📋" },
  { title: "猫咪饮食指南", desc: "干粮vs湿粮vs生骨肉？不同年龄猫咪的营养需求全解析", icon: "🍖" },
  { title: "日常护理技巧", desc: "梳毛、剪指甲、刷牙、洗澡——让猫咪爱上护理的秘诀", icon: "✨" },
  { title: "猫咪行为解读", desc: "蹭你、呼噜、踩奶、炸毛……读懂猫咪的身体语言", icon: "🐱" },
];

export default function MeowPlanetPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal-cat").forEach((el) => observer.observe(el));

    // Carousel auto-play
    const interval = setInterval(() => setCarouselIdx((i) => (i + 1) % 3), 4000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  const filtered = activeFilter === "all" ? catBreeds : catBreeds.filter((c) => c.tag === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <main className="min-h-screen font-sans antialiased" style={{ background: "#FFF8F0", color: "#452C1C" }}>
      {/* ===== Navbar ===== */}
      <nav
        className={`fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-amber-900/5 py-3" : ""
        }`}
      >
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight" style={{ color: "#5C3E24" }}>
          <span className="text-2xl">🐾</span> Meow Planet
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "#73543D" }}>
          <a href="#hero" className="hover:text-amber-600 transition-colors">Home</a>
          <a href="#breeds" className="hover:text-amber-600 transition-colors">Breeds</a>
          <a href="#guide" className="hover:text-amber-600 transition-colors">Care Guide</a>
          <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
        </div>
        <button className="md:hidden p-2 z-50" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-stone-700 rounded transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-stone-700 rounded transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-stone-700 rounded transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-bold z-40" style={{ color: "#5C3E24" }}>
            <a href="#hero" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="#breeds" onClick={() => setMobileOpen(false)}>Breeds</a>
            <a href="#guide" onClick={() => setMobileOpen(false)}>Care Guide</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* ===== Hero Carousel ===== */}
      <section id="hero" className="relative pt-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #FEF3E6 0%, #FFF8F0 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          {[
            { title: "Welcome to Meow Planet", sub: "Your healing cat universe — discover breeds, care guides, and feline friends", emoji: "🐱" },
            { title: "Find Your Perfect Cat", sub: "Explore breeds and find the companion that matches your lifestyle", emoji: "😻" },
            { title: "Expert Care Tips", sub: "Everything you need to know about raising a happy, healthy cat", emoji: "🌟" },
          ].map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${i === carouselIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pt-20"}`}
            >
              {i === carouselIdx && (
                <>
                  <div className="text-6xl mb-6">{slide.emoji}</div>
                  <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight" style={{ color: "#5C3E24", fontFamily: "Georgia, serif" }}>
                    {slide.title}
                  </h1>
                  <p className="text-lg max-w-xl mx-auto" style={{ color: "#A07244" }}>{slide.sub}</p>
                </>
              )}
            </div>
          ))}
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((d) => (
              <button
                key={d}
                onClick={() => setCarouselIdx(d)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${d === carouselIdx ? "w-8" : ""}`}
                style={{ background: d === carouselIdx ? "#D4A574" : "#E8D9CA" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Breeds ===== */}
      <section id="breeds" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2 text-center reveal-cat" style={{ color: "#5C3E24", fontFamily: "Georgia, serif" }}>
          Cat <span style={{ color: "#D4A574" }}>Breeds</span>
        </h2>
        <p className="text-center mb-10 reveal-cat" style={{ color: "#A07244" }}>Find the purr-fect companion for you</p>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap reveal-cat">
          {[
            { key: "all", label: "All 🐾" },
            { key: "short", label: "Shorthair" },
            { key: "long", label: "Longhair" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.key
                  ? "text-white shadow-md"
                  : "bg-white text-stone-600 hover:shadow-sm"
              }`}
              style={activeFilter === f.key ? { background: "#D4A574" } : {}}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer reveal-cat"
              style={{ border: "1px solid #FDE8D5" }}
            >
              <div className="w-full h-40 rounded-xl mb-4 flex items-center justify-center text-5xl" style={{ background: "linear-gradient(135deg, #FEF3E6, #FDE8D5)" }}>
                {cat.tag === "long" ? "🐱" : "😺"}
              </div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#5C3E24" }}>{cat.name}</h3>
              <p className="text-xs mb-3" style={{ color: "#A07244" }}>{cat.en}</p>
              <p className="text-sm mb-3" style={{ color: "#73543D" }}>{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.traits.map((t, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "#FEF3E6", color: "#8C6B50" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16" style={{ color: "#BFA088" }}>
              <span className="text-4xl block mb-4">😿</span>
              No cats in this category yet!
            </div>
          )}
        </div>
      </section>

      {/* ===== Care Guide ===== */}
      <section id="guide" className="py-16" style={{ background: "#FEF3E6" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center reveal-cat" style={{ color: "#5C3E24", fontFamily: "Georgia, serif" }}>
            Care <span style={{ color: "#D4A574" }}>Guide</span>
          </h2>
          <p className="text-center mb-10 reveal-cat" style={{ color: "#A07244" }}>Everything you need to know about cat care</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {careGuides.map((g, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 flex gap-4 items-start hover:-translate-y-1 transition-all duration-300 shadow-sm reveal-cat" style={{ border: "1px solid #FDE8D5" }}>
                <div className="text-3xl">{g.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#5C3E24" }}>{g.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#73543D" }}>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-2 reveal-cat" style={{ color: "#5C3E24", fontFamily: "Georgia, serif" }}>
          Get in <span style={{ color: "#D4A574" }}>Touch</span>
        </h2>
        <p className="mb-10 reveal-cat" style={{ color: "#A07244" }}>Have questions? We would love to hear from you!</p>
        <form onSubmit={handleSubmit} className="text-left space-y-5 reveal-cat">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#5C3E24" }}>Name</label>
            <input required className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none text-sm" style={{ borderColor: "#E8D9CA", background: "white" }} placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#5C3E24" }}>Email</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none text-sm" style={{ borderColor: "#E8D9CA", background: "white" }} placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#5C3E24" }}>Message</label>
            <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none text-sm resize-none" style={{ borderColor: "#E8D9CA", background: "white" }} placeholder="Tell us about your cat..." />
          </div>
          <button type="submit" className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 shadow-lg" style={{ background: "#D4A574" }}>
            Send Message 🐾
          </button>
          {formSent && (
            <div className="text-center py-3 rounded-xl text-sm font-medium" style={{ background: "#E8D9CA", color: "#5C3E24" }}>
              ✉️ Message sent! We will get back to you soon~
            </div>
          )}
        </form>
      </section>

      {/* ===== Footer ===== */}
      <footer className="text-center py-8 text-sm" style={{ background: "#5C3E24", color: "#D4BFA9" }}>
        © 2026 Meow Planet · A warm corner for cat lovers
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-all duration-300 z-50 ${
          showTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ background: "#D4A574", color: "white" }}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Custom reveal style */}
      <style jsx global>{`
        .reveal-cat {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.22, 0.61, 0.36, 1),
                      transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .reveal-cat.visible {
          opacity: 1;
          transform: translateY(0);
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </main>
  );
}
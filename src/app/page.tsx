import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          Available for freelance
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
          AI-Powered{" "}
          <span className="gradient-text">Development</span>
          <br />Faster Delivery, Higher Quality
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full-stack developer leveraging AI to deliver web apps, automation tools, and Figma plugins at 3x speed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#work" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors">
            View My Work →
          </a>
          <a href="#contact" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors">
            Contact
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-10 text-center">
          My <span className="gradient-text">Work</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/fitness" className="card group cursor-pointer">
            <div className="text-3xl mb-4">💪</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">FitZone - Fitness Platform</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              Modern fitness landing page with training programs, pricing tiers, and smooth animations. Next.js + Tailwind.
            </p>
            <span className="text-indigo-400 text-sm font-medium group-hover:underline">View Project →</span>
          </Link>
          <Link href="/meow-planet" className="card group cursor-pointer">
            <div className="text-3xl mb-4">🐾</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">Meow Planet - Cat Community</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              A warm cat-themed site with breed gallery, care guides, contact form, and carousel hero. Next.js + Tailwind.
            </p>
            <span className="text-indigo-400 text-sm font-medium group-hover:underline">View Project →</span>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">
          What I <span className="gradient-text">Offer</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Web Apps", desc: "Next.js / React / Node.js full-stack. From landing pages to SaaS.", icon: "⚡" },
            { title: "AI Automation", desc: "Python workflows, chatbots, data scraping and analysis.", icon: "🤖" },
            { title: "Plugins", desc: "Figma plugins, VS Code & Chrome extensions.", icon: "🔌" },
          ].map((s) => (
            <div key={s.title} className="card">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["Next.js", "React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "Figma API", "AI / LLM", "Git", "Docker", "VS Code Extensions"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/8 rounded-lg text-sm text-slate-300">{tech}</span>
          ))}
        </div>
      </section>

      {/* Contact - Simple */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-10">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <a
          href="mailto:xiyue030823@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors text-lg"
        >
          xiyue030823@gmail.com ✉️
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/5">
        Built with Next.js + AI
      </footer>
    </main>
  );
}
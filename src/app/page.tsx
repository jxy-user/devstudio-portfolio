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
          Available for freelance projects
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Build <span className="gradient-text">Smarter</span>
          <br />Ship Faster
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full-stack developer leveraging AI to deliver production-ready web apps,
          automation tools, and Figma plugins — at 3x the speed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors">
            Start a Project →
          </a>
          <a href="#work" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors">
            View My Work
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">
          What I <span className="gradient-text">Offer</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Web App Development",
              desc: "Next.js, React, Node.js full-stack apps. From landing pages to SaaS dashboards.",
              icon: "⚡",
            },
            {
              title: "AI Automation",
              desc: "Python automation scripts, AI-powered workflows, chatbots, and data pipelines.",
              icon: "🤖",
            },
            {
              title: "Figma Plugins & Extensions",
              desc: "Custom Figma/VS Code/Chrome plugins that solve real design & dev problems.",
              icon: "🔌",
            },
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
          {[
            "Next.js", "React", "TypeScript", "Node.js",
            "Python", "Tailwind CSS", "PostgreSQL", "Figma API",
            "AI / LLM", "Git", "Docker", "VS Code Extensions",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/8 rounded-lg text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="card p-10">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Build Together</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Got a project in mind? Reach out and I&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors text-lg"
          >
            Get in Touch ✉️
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/5">
        Built with Next.js + AI · Ready to deploy in minutes
      </footer>
    </main>
  );
}

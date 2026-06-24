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
            Hire Me
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
            { title: "Web Apps", desc: "Next.js / React / Node.js. From landing pages to SaaS dashboards.", icon: "⚡" },
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

      {/* Contact Form */}
      <section id="contact" className="max-w-lg mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-slate-400 text-sm text-center mb-10">
          Tell me about your project and I will get back to you.
        </p>

        <form
          action="https://formsubmit.co/xiyue030823@gmail.com"
          method="POST"
          className="space-y-5"
        >
          {/* Honeypot anti-spam */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Redirect after submit */}
          <input type="hidden" name="_next" value="https://devstudio-portfolio.vercel.app/?sent=1" />
          {/* Email subject */}
          <input type="hidden" name="_subject" value="New Project Inquiry - DevStudio" />

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Gender</label>
            <div className="flex gap-4">
              {["Male", "Female", "Prefer not to say"].map((g) => (
                <label key={g} className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                  <input type="radio" name="gender" value={g} className="accent-indigo-500" />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Budget (CNY) *</label>
            <input
              type="text"
              name="budget"
              required
              placeholder="e.g. 5000"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@qq.com / you@163.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Project Requirements *</label>
            <textarea
              name="requirements"
              required
              rows={5}
              placeholder="Describe your project, timeline, and any specific needs..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors text-base"
          >
            Send Inquiry →
          </button>

          <p className="text-xs text-slate-500 text-center">
            Your info goes directly to my inbox. I will reply within 24 hours.
          </p>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/5">
        Built with Next.js + AI
      </footer>
    </main>
  );
}
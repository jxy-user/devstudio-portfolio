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
          可接外包项目
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
          用 <span className="gradient-text">AI</span> 驱动开发
          <br />更快交付，更高品质
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          全栈开发者，借助 AI 工具高效交付 Web 应用、自动化工具和 Figma 插件
          —— 开发效率提升 3 倍。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors">
            联系我 →
          </a>
          <a href="#work" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors">
            查看作品
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">
          我能<span className="gradient-text">做什么</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Web 应用开发",
              desc: "Next.js / React / Node.js 全栈开发，从落地页到 SaaS 后台管理系统。",
              icon: "⚡",
            },
            {
              title: "AI 自动化",
              desc: "Python 自动化脚本、AI 工作流搭建、智能客服、数据采集与分析。",
              icon: "🤖",
            },
            {
              title: "插件 & 扩展开发",
              desc: "Figma 插件、VS Code 扩展、Chrome 插件，解决实际工作痛点。",
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
        <h2 className="text-2xl font-bold mb-10 text-center">技术栈</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Next.js", "React", "TypeScript", "Node.js",
            "Python", "Tailwind CSS", "PostgreSQL", "Figma API",
            "AI / LLM", "Git", "Docker", "VS Code 扩展",
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
          <h2 className="text-2xl font-bold mb-4">有项目要聊？</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            告诉我你的需求，24 小时内回复。
          </p>
          <a
            href="mailto:709093772@qq.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors text-lg"
          >
            发送邮件 ✉️
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/5">
        Next.js + AI 构建 · 分钟级部署上线
      </footer>
    </main>
  );
}
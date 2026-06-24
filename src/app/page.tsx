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
          鍙帴澶栧寘椤圭洰
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
          鐢?<span className="gradient-text">AI</span> 椹卞姩寮€鍙?          <br />鏇村揩浜や粯锛屾洿楂樺搧璐?        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          鍏ㄦ爤寮€鍙戣€咃紝鍊熷姪 AI 宸ュ叿楂樻晥浜や粯 Web 搴旂敤銆佽嚜鍔ㄥ寲宸ュ叿鍜?Figma 鎻掍欢
          鈥斺€?寮€鍙戞晥鐜囨彁鍗?3 鍊嶃€?        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors">
            鑱旂郴鎴?鈫?          </a>
          <a href="#work" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors">
            鏌ョ湅浣滃搧
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">
          鎴戣兘<span className="gradient-text">鍋氫粈涔?/span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Web 搴旂敤寮€鍙?,
              desc: "Next.js / React / Node.js 鍏ㄦ爤寮€鍙戯紝浠庤惤鍦伴〉鍒?SaaS 鍚庡彴绠＄悊绯荤粺銆?,
              icon: "鈿?,
            },
            {
              title: "AI 鑷姩鍖?,
              desc: "Python 鑷姩鍖栬剼鏈€丄I 宸ヤ綔娴佹惌寤恒€佹櫤鑳藉鏈嶃€佹暟鎹噰闆嗕笌鍒嗘瀽銆?,
              icon: "馃",
            },
            {
              title: "鎻掍欢 & 鎵╁睍寮€鍙?,
              desc: "Figma 鎻掍欢銆乂S Code 鎵╁睍銆丆hrome 鎻掍欢锛岃В鍐冲疄闄呭伐浣滅棝鐐广€?,
              icon: "馃攲",
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
        <h2 className="text-2xl font-bold mb-10 text-center">鎶€鏈爤</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Next.js", "React", "TypeScript", "Node.js",
            "Python", "Tailwind CSS", "PostgreSQL", "Figma API",
            "AI / LLM", "Git", "Docker", "VS Code 鎵╁睍",
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
          <h2 className="text-2xl font-bold mb-4">鏈夐」鐩鑱婏紵</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            鍛婅瘔鎴戜綘鐨勯渶姹傦紝24 灏忔椂鍐呭洖澶嶃€?          </p>
          <a
            href="mailto:xiyue030823@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors text-lg"
          >
            鍙戦€侀偖浠?鉁夛笍
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/5">
        Next.js + AI 鏋勫缓 路 鍒嗛挓绾ч儴缃蹭笂绾?      </footer>
    </main>
  );
}
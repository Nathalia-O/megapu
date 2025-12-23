import type { CSSProperties } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ProductCarousel } from "../components/ProductCarousel";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Quem Somos" },
  { href: "#solucoes", label: "Portfólio" },
  { href: "#videos", label: "Vídeos" },
  { href: "#contato", label: "Contato" }
];

const contact = {
  phone: "+55 11 99447-5805 ",
  email: "desenvolvimento@megapu.com.br",
  address: "Vargem Grande Paulista - SP"
};

const productImages = [
  { src: "/products/img_v3_027c_9f1ee823-10d7-4212-bb5e-f969742a0eeg.png" },
  { src: "/products/img_v3_027c_a0e1df06-c5fa-4531-8c7a-a28bee82ae5g.jpg" },
  { src: "/products/img_v3_027c_ad8ea581-0fe5-42c0-b4ad-a81a5fbc52dg.png" },
  { src: "/products/img_v3_027c_c47fe728-082e-4115-8590-15da0224592g.png" },
  { src: "/products/img_v3_027c_c70aee96-d415-4d62-bf72-501599d4890g.jpg" },
  { src: "/products/鞋底80x130.jpg" },
  { src: "/products/劳保鞋80x130.jpg" },
  { src: "/products/绿色形象海报130x220.jpg" }
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/551155555555"
  }
];

const videos = [
  {
    title: "Vídeo institucional",
    description: "Processos de fabricação e aplicações de peças técnicas em PU.",
    src: "https://www.youtube.com/embed/fP2_jE3Ubks"
  },
  {
    title: "Portfólio técnico",
    description: "Exemplos de aplicações em componentes técnicos de PU.",
    src: "https://www.youtube.com/embed/fP2_jE3Ubks"
  },
  {
    title: "Tecnologia de alta performance",
    description: "Resistência à abrasão, dureza e desempenho mecânico.",
    src: "https://www.youtube.com/embed/fP2_jE3Ubks"
  }
];

export default function HomePage() {
  return (
    <>
      <NavBar items={navItems} cta={{ href: "#contato", label: "Solicite um orçamento" }} />
      <main>
        <section id="inicio" className="hero glass">
          <div className="hero-content">
            <h1 style={{ fontSize: 44, margin: "10px 0 0" }}>Mega Poliuretano</h1>
            <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.6, margin: "0 0 8px" }}>
              Fabricação de peças técnicas em poliuretano (PU) com controle de dureza e resistência à abrasão.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contato" className="cta">
                Solicite um orçamento
              </a>
              <a href="#solucoes" className="cta secondary">
                Ver portfólio
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="about-section card">
          <div className="section-title">
            <h2>Inovação e Tecnologia Global em Poliuretanos</h2>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <p>
                Com uma trajetória de <span className="about-highlight">23 anos</span>, a MEGA Poliuretanos é referência
                nacional no desenvolvimento de soluções customizadas. Somos representantes oficiais de uma das maiores
                multinacionais do setor, unindo a tradição da nossa marca à tecnologia de ponta <span className="about-highlight">Global</span>.
              </p>
              <div className="about-vision">
                Nosso objetivo é ser a referência imediata em produtos de alta qualidade, fortalecendo a presença digital
                e industrial através de parcerias estratégicas mundiais.
              </div>
            </div>
            <div className="about-cards">
              {[
                {
                  title: "DNA Global",
                  copy: "Intercâmbio constante com centros de P&D na Ásia, garantindo produtos de última geração."
                },
                {
                  title: "Atendimento Especializado",
                  copy: "Corpo técnico atuante para criar soluções sob medida para cada desafio industrial."
                },
                {
                  title: "Compromisso",
                  copy: "Agilidade e foco total na superação das expectativas de nossos parceiros."
                }
              ].map((item) => (
                <div key={item.title} className="about-card">
                  <span className="about-icon" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solucoes" className="glass card">
          <div className="section-title">
            <h2>Portfólio de produtos e serviços</h2>
          </div>
          <div className="product-header">
            <h3>Tecnologia em Poliol Poliéster</h3>
            <p>Soluções globais com alta capacidade produtiva e performance superior.</p>
          </div>
          <div className="product-info-grid">
            {[
              { title: "Poliol Poliéster", text: "Base técnica para peças com alta resistência à abrasão.", icon: "shield" },
              { title: "Campos de Aplicação", text: "Adesivos, elastômeros, selantes e resinas (TPU).", icon: "bolt" },
              { title: "Vantagens", text: "Alta reatividade, estabilidade química e versatilidade.", icon: "gear" }
            ].map((item) => (
              <div key={item.title} className="product-info-card">
                <span className="product-info-icon" aria-hidden="true">
                  {item.icon === "shield" && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3l7 3v6c0 4.4-3 8.4-7 9-4-0.6-7-4.6-7-9V6l7-3z" />
                    </svg>
                  )}
                  {item.icon === "bolt" && (
                    <svg viewBox="0 0 24 24">
                      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
                    </svg>
                  )}
                  {item.icon === "gear" && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8 4a7.9 7.9 0 0 0-.1-1l2-1.2-2-3.5-2.3.7a7.7 7.7 0 0 0-1.7-1l-.3-2.4h-4l-.3 2.4a7.7 7.7 0 0 0-1.7 1l-2.3-.7-2 3.5 2 1.2a7.9 7.9 0 0 0 0 2l-2 1.2 2 3.5 2.3-.7a7.7 7.7 0 0 0 1.7 1l.3 2.4h4l.3-2.4a7.7 7.7 0 0 0 1.7-1l2.3.7 2-3.5-2-1.2c.1-.3.1-.7.1-1z" />
                    </svg>
                  )}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="product-facts-band">
            <div>
              <strong>420.000 toneladas</strong>
              <span>Capacidade de produção anual.</span>
            </div>
            <div>
              <strong>22% de Market Share</strong>
              <span>Participação no mercado asiático/chinês.</span>
            </div>
          </div>

          <div className="product-carousel-wide">
            <ProductCarousel images={productImages} />
          </div>

        </section>

        <section id="videos" className="glass card">
          <div className="section-title">
            <h2>Vídeos técnicos</h2>
          </div>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Conteúdos com foco em processos, aplicações e desempenho do PU.
          </p>
          <div className="grid" style={{ marginTop: 12 }}>
            {videos.map((video) => (
              <div key={video.title} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ padding: "16px 18px 6px" }}>
                  <h3 style={{ margin: 0 }}>{video.title}</h3>
                  <p style={{ color: "var(--muted)", margin: "6px 0 12px", lineHeight: 1.5 }}>{video.description}</p>
                </div>
                <iframe
                  title={video.title}
                  width="100%"
                  height="230"
                  style={{ border: "none", display: "block" }}
                  src={video.src}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
        <section id="contato" className="glass card" style={{ display: "grid", gap: 20 }}>
          <div className="section-title">
            <h2>Contato</h2>
          </div>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Solicite um orçamento sem compromisso.
          </p>
          <div className="grid">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Fale direto</h3>
              <p style={{ color: "var(--muted)" }}>{contact.phone}</p>
              <p style={{ color: "var(--muted)" }}>{contact.email}</p>
              <p style={{ color: "var(--muted)" }}>{contact.address}</p>
              <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="social-icon"
                  >
                    {link.label === "Instagram" && (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm4.9-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    )}
                    {link.label === "LinkedIn" && (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.6h.1a4.2 4.2 0 0 1 3.8-2c4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V21h-4V9z" />
                      </svg>
                    )}
                    {link.label === "YouTube" && (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5V8.5l6 3.5-6 3.5z" />
                      </svg>
                    )}
                    {link.label === "WhatsApp" && (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5-1.3A10 10 0 1 0 12 2zm5.6 14.5c-.2.6-1.1 1.1-1.6 1.1-.5 0-1.1.1-3.7-1-3.2-1.3-5.2-4.5-5.4-4.7-.2-.3-1.3-1.7-1.3-3.2s.8-2.2 1.1-2.5c.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .7.5.3.6 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.2 2.5 1.5 1.2 2.7 1.6 3.1 1.7.4.1.6.1.8-.1.2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.2.6.4.1.2.1.8-.1 1.4z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Envie uma mensagem</h3>
              <form style={{ display: "grid", gap: 12 }}>
                <input name="name" placeholder="Seu nome" style={inputStyle} required />
                <input name="email" placeholder="Email" style={inputStyle} type="email" required />
                <textarea name="message" placeholder="Conte sua necessidade" style={{ ...inputStyle, minHeight: 120 }} required />
            <button type="submit" className="cta">
              Agendar contato
            </button>
          </form>
              <small style={{ color: "var(--muted)" }}>
                Ao enviar, você concorda em ser contatado pela equipe MEGA.
              </small>
            </div>
          </div>
        </section>
      </main>
      <Footer contact={contact} />
    </>
  );
}

const inputStyle: CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.02)",
  color: "var(--text)",
  fontSize: 15
};

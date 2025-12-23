"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NavBarProps = {
  items: { href: string; label: string }[];
  cta: { href: string; label: string };
};

export function NavBar({ items, cta }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={`nav glass ${open ? "active" : ""}`}>
      <a className="nav-brand" href="#inicio" onClick={() => setOpen(false)}>
        <Image src="/imagem_without_background.png" alt="Mega PU" width={130} height={40} className="brand-logo" />
      </a>
      <button className="nav-toggle menu-toggle" onClick={() => setOpen((p) => !p)} aria-label="Abrir menu">
        <span />
        <span />
        <span />
      </button>
      <div className={`nav-links menu-links ${open ? "active" : ""}`}>
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Fechar menu">
          ×
        </button>
        {items.map((item) => (
          <a key={item.href} href={item.href} className={active === item.href ? "active" : ""}>
            {item.label}
          </a>
        ))}
        <a className="cta" href={cta.href} style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>
          Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
}

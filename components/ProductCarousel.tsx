"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProductCarouselProps = {
  images: { src: string }[];
};

export function ProductCarousel({ images }: ProductCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [mounted, setMounted] = useState(false);

  if (!images.length) return null;

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const current = images[index];
  const total = images.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, mounted]);

  return (
    <>
      <div className="product-carousel">
        <button className="carousel-arrow left" onClick={prev} aria-label="Imagem anterior">
          ‹
        </button>
        <div className="carousel-frame" onClick={() => setLightbox(true)} role="button" aria-label="Abrir imagem">
          <Image src={current.src} alt="Imagem do produto" fill className="carousel-image" sizes="(max-width: 768px) 100vw, 900px" />
        </div>
        
        <button className="carousel-arrow right" onClick={next} aria-label="Próxima imagem">
          ›
        </button>
      </div>

      <div className="carousel-dots" aria-label="Paginação do carrossel">
        {images.map((image, dotIndex) => (
          <button
            key={image.src}
            className={`carousel-dot ${dotIndex === index ? "active" : ""}`}
            aria-label={`Imagem ${dotIndex + 1} de ${total}`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>

      {mounted &&
        lightbox &&
        createPortal(
          <div className="lightbox" onClick={() => setLightbox(false)} role="presentation">
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-arrow left" onClick={prev} aria-label="Imagem anterior">
                ‹
              </button>
              <Image src={current.src} alt="Imagem do produto ampliada" fill className="lightbox-image" sizes="100vw" />
              <button className="lightbox-arrow right" onClick={next} aria-label="Próxima imagem">
                ›
              </button>
              <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Fechar">
                ✕
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

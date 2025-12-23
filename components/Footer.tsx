type FooterProps = { contact: { phone: string; email: string; address: string } };

export function Footer({ contact }: FooterProps) {
  return (
    <footer className="footer footer-premium">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/imagem_without_background.png" alt="Mega PU" />
          </div>
          <p>
            Fabricação própria e soluções sob medida em poliuretano de alta performance para setores industriais.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm4.9-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.6h.1a4.2 4.2 0 0 1 3.8-2c4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V21h-4V9z" />
              </svg>
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5V8.5l6 3.5-6 3.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Links Rápidos</h4>
          <a href="#inicio">Home</a>
          <a href="#sobre">Empresa</a>
          <a href="#solucoes">Produtos</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Produtos & Soluções</h4>
          <span>Mineração</span>
          <span>Revestimentos</span>
          <span>Peças Técnicas</span>
          <span>Usinagem</span>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contato & Localização</h4>
          <div className="footer-contact">
            <span>WhatsApp: {contact.phone}</span>
            <span>E-mail: {contact.email}</span>
            <span>{contact.address}</span>
          </div>
          <div className="footer-map">
            <iframe
              title="Mapa Mega PU"
              src="https://www.google.com/maps?q=Vargem%20Grande%20Paulista%20SP&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mega PU. Todos os direitos reservados.
      </div>
    </footer>
  );
}

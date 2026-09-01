import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  HeartHandshake,
  Image as ImageIcon,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import "@/App.css";
import Reveal from "@/components/Reveal";
import DragonflyMotif from "@/components/DragonflyMotif";

const WORD_LOGO =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_eb8704de-45d3-4331-8e20-3e9a4d66472b/artifacts/rv8y401m_WhatsApp%20Image%202026-09-01%20at%2009.24.51%20%282%29.jpeg";
const ROUND_LOGO =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_eb8704de-45d3-4331-8e20-3e9a4d66472b/artifacts/2hwj8dhf_WhatsApp%20Image%202026-09-01%20at%2009.24.51%20%281%29.jpeg";
const HERO_IMAGE =
  "https://static.prod-images.emergentagent.com/jobs/eb8704de-45d3-4331-8e20-3e9a4d66472b/images/fe40552b8fe027b360c99a4a9ae8fd060f9e7feb7a29bcd655d4b71d8338fb71.jpeg";
const TEAM_IMAGE =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_eb8704de-45d3-4331-8e20-3e9a4d66472b/artifacts/7k88rncu_WhatsApp%20Image%202026-09-01%20at%2009.24.51.jpeg";
const WHATSAPP_LINK =
  "https://wa.me/5522997501612?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Instituto%20Lib%C3%A9lula.";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua%20das%20Casuarinas%2C%20244%2C%20Pontinha%2C%20Araruama%2C%20RJ%2C%2028981-750";

const navItems = [
  ["Início", "inicio"],
  ["O instituto", "instituto"],
  ["Especialidades", "especialidades"],
  ["Como funciona", "como-funciona"],
  ["Equipe", "equipe"],
  ["Espaço", "espaco"],
  ["Depoimentos", "depoimentos"],
  ["Contato", "contato"],
];

const principles = [
  ["01", "Atendimento individualizado", "Cuidado pensado para as necessidades de cada paciente."],
  ["02", "Equipe multidisciplinar", "Profissionais de diferentes áreas trabalhando de forma integrada."],
  ["03", "Acolhimento", "Um ambiente preparado para que pacientes e famílias se sintam seguros."],
  ["04", "Desenvolvimento", "Estímulo às habilidades, à autonomia e às potencialidades de cada etapa."],
];

const specialties = [
  ["Psicologia", "Atendimento psicológico individualizado e acompanhamento especializado.", "01"],
  ["Fonoaudiologia", "Acompanhamento voltado à comunicação, linguagem, fala e outras necessidades.", "02"],
  ["Terapia alimentar", "Cuidado atento às dificuldades e particularidades relacionadas à alimentação.", "03"],
  ["Musicoterapia", "Recursos musicais como parte do processo terapêutico de cada pessoa.", "04"],
  ["Análise do comportamento", "Intervenções baseadas em princípios da análise do comportamento.", "05"],
];

const attentionAreas = [
  ["TEA", "Transtorno do Espectro Autista"],
  ["TDAH", "Transtorno do Déficit de Atenção e Hiperatividade"],
  ["TOD", "Transtorno Opositivo Desafiador"],
  ["Autismo", "Acompanhamento respeitoso e centrado em cada pessoa"],
];

const teamNames = [
  "Marla Luna",
  "Stefany Ferreira",
  "Evelyn Ourofino",
  "Matheus Medeiros",
  "Thamara Melo",
  "Alessandra Oliveira",
  "Thayná Benfeitas",
];

const spacePlaces = [
  ["01", "Fachada", "Foto real a inserir"],
  ["02", "Recepção", "Foto real a inserir"],
  ["03", "Salas de atendimento", "Foto real a inserir"],
  ["04", "Espaço terapêutico", "Foto real a inserir"],
  ["05", "Área infantil", "Foto real a inserir"],
];

function Logo({ variant = "word", testId, alt = "Instituto Libélula" }) {
  return (
    <span className={`logo-crop logo-crop--${variant}`}>
      <img data-testid={testId} src={variant === "round" ? ROUND_LOGO : WORD_LOGO} alt={alt} />
    </span>
  );
}

function Chapter({ number, eyebrow, title, children, dark = false }) {
  return (
    <div className={`chapter-head ${dark ? "chapter-head--dark" : ""}`}>
      <div className="chapter-marker">
        <div className="chapter-number">{number}</div>
        <DragonflyMotif variant={number} testId={`chapter-${number}-dragonfly`} />
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children && <div className="chapter-lead">{children}</div>}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header" data-testid="site-header">
        <div className="header-inner">
          <a className="header-logo" href="#inicio" data-testid="header-logo-link" aria-label="Voltar ao início">
            <Logo variant="word" alt="Instituto Libélula — espaço terapêutico multidisciplinar" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} data-testid={`nav-${id}-link`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="header-action" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="header-whatsapp-link">
            <span>Falar pelo WhatsApp</span>
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação mobile">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} data-testid={`mobile-nav-${id}-link`}>
              <span>{label}</span>
              <ChevronRight size={18} />
            </a>
          ))}
          <a className="mobile-nav-action" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="mobile-whatsapp-link">
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-anchor" id="inicio" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-meta">
                <span className="eyebrow">Espaço terapêutico multidisciplinar</span>
                <span className="hero-place">Araruama · RJ</span>
              </div>
              <h1 id="hero-title" className="hero-title" data-testid="hero-title">
                <span className="hero-line"><span>Cuidar,</span></span>
                <span className="hero-line"><span>acolher e</span></span>
                <span className="hero-line hero-line--accent"><span>desenvolver.</span></span>
              </h1>
              <p className="hero-subtitle" data-testid="hero-subtitle">
                Um espaço terapêutico multidisciplinar dedicado ao cuidado, desenvolvimento e bem-estar de cada pessoa e de sua família.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#instituto" data-testid="hero-institute-btn">
                  Conheça o instituto
                  <ArrowUpRight size={18} />
                </a>
                <a className="button button-accent" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="hero-whatsapp-btn">
                  Falar pelo WhatsApp
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="hero-footnote">
                <HeartHandshake size={18} />
                <span>Atendimento individualizado, humano e respeitoso.</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Imagem conceitual de um espaço terapêutico acolhedor">
              <svg className="hero-orbit" viewBox="0 0 560 680" aria-hidden="true">
                <ellipse cx="280" cy="340" rx="238" ry="300" fill="none" stroke="rgba(0,168,150,.35)" strokeWidth="1" strokeDasharray="3 11" />
                <ellipse cx="280" cy="340" rx="203" ry="262" fill="none" stroke="rgba(12,35,102,.16)" strokeWidth="1" />
              </svg>
              <div className="hero-seal">
                <Logo variant="round" testId="hero-brand-seal" alt="Símbolo do Instituto Libélula" />
                <span>o amor é a asa</span>
              </div>
              <figure className="hero-figure">
                <img src={HERO_IMAGE} alt="Composição conceitual com materiais sensoriais em um ambiente terapêutico" data-testid="hero-concept-image" />
                <figcaption>
                  <span className="status-dot" />
                  Imagem conceitual · substituir por foto real do Instituto
                </figcaption>
              </figure>
              <div className="hero-side-note">
                <span>01</span>
                <span>Um lugar para cada começo.</span>
              </div>
            </div>
          </div>
          <a className="hero-scroll" href="#instituto" data-testid="hero-scroll-link">
            <span>Deslize para conhecer</span>
            <span className="scroll-line" />
          </a>
        </section>

        <div className="marquee" aria-label="Princípios do Instituto Libélula">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
                <span>O amor é a asa que nos leva à inclusão</span><b>✦</b>
                <span>Cuidado centrado na família</span><b>✦</b>
                <span>Araruama · RJ</span><b>✦</b>
                <span>Desenvolvimento com acolhimento</span><b>✦</b>
              </div>
            ))}
          </div>
        </div>

        <section className="content-section section-anchor" id="instituto" aria-labelledby="instituto-title">
          <div className="section-inner">
            <Reveal>
              <Chapter number="01" eyebrow="O instituto" title="Um espaço pensado para acolher">
                O Instituto Libélula nasce para oferecer cuidado especializado sem perder de vista o que torna cada história única: sua pessoa, sua família e seu tempo.
              </Chapter>
            </Reveal>
            <div className="intro-layout">
              <Reveal className="intro-story" delay={90}>
                <p className="large-copy">Acolher é criar espaço para que cada pessoa possa chegar como é — e encontrar caminhos possíveis para se desenvolver.</p>
                <p>Somos um espaço terapêutico multidisciplinar criado para oferecer atendimento especializado e individualizado, considerando as necessidades de cada paciente e o contexto de sua família.</p>
                <p>Nosso propósito é proporcionar um ambiente seguro, preparado e sensível para favorecer o desenvolvimento, a autonomia e a qualidade de vida.</p>
                <a className="text-link" href="#contato" data-testid="intro-contact-link">
                  Converse com o Instituto <ArrowUpRight size={17} />
                </a>
              </Reveal>
              <Reveal className="principles" delay={160}>
                {principles.map(([number, title, text]) => (
                  <article className="principle-row" key={number} data-testid={`principle-${number}`}>
                    <span className="principle-number">{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                    <ChevronRight size={18} aria-hidden="true" />
                  </article>
                ))}
              </Reveal>
            </div>
            <Reveal className="manifesto-card" delay={120}>
              <div className="manifesto-mark">✦</div>
              <div>
                <p className="eyebrow">Manifesto</p>
                <p className="manifesto-line">“O amor é a asa que nos leva à inclusão.”</p>
              </div>
              <span className="manifesto-caption">Uma frase para orientar cada encontro.</span>
            </Reveal>
          </div>
        </section>

        <section className="dark-section section-anchor" id="especialidades" aria-labelledby="especialidades-title">
          <div className="section-inner">
            <Reveal>
              <Chapter number="02" eyebrow="As especialidades" title="Conheça nossos atendimentos" dark>
                Diferentes áreas em diálogo para olhar cada pessoa por inteiro, com cuidado individualizado e linguagem clara.
              </Chapter>
            </Reveal>
            <div className="specialty-grid">
              {specialties.map(([title, text, number], index) => (
                <Reveal key={title} className={`specialty-card specialty-card--${index + 1}`} delay={index * 70}>
                  <div className="card-topline"><span>{number}</span><ArrowUpRight size={18} /></div>
                  <h3 data-testid={`specialty-${number}-title`}>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
              <Reveal className="specialty-pending" delay={360}>
                <Sparkles size={22} />
                <div>
                  <p className="eyebrow">Em atualização</p>
                  <h3>Mais possibilidades de cuidado</h3>
                  <p>Espaço preparado para incluir novas especialidades confirmadas pelo Instituto.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="content-section attention-section" aria-labelledby="attention-title">
          <div className="section-inner">
            <Reveal>
              <div className="split-heading">
                <div>
                  <p className="eyebrow">Áreas de atenção</p>
                  <h2 id="attention-title">Atendimento especializado, sem rótulos.</h2>
                </div>
                <p>O acompanhamento considera necessidades, características e potencialidades — sem promessas prontas e sem reduzir pessoas a diagnósticos.</p>
              </div>
            </Reveal>
            <div className="attention-grid">
              {attentionAreas.map(([label, text], index) => (
                <Reveal key={label} className="attention-card" delay={index * 80}>
                  <span className="attention-index">0{index + 1}</span>
                  <h3>{label}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
            <p className="quiet-note"><span>Nota de cuidado</span> Informações clínicas e condutas devem sempre ser conversadas com profissionais habilitados.</p>
          </div>
        </section>

        <section className="path-section section-anchor" id="como-funciona" aria-labelledby="path-title">
          <div className="section-inner">
            <Reveal>
              <Chapter number="03" eyebrow="Abordagem multidisciplinar" title="Um olhar para cada pessoa por inteiro">
                Quando diferentes áreas trabalham de forma integrada, o acompanhamento pode considerar diferentes aspectos do desenvolvimento e das necessidades de cada paciente.
              </Chapter>
            </Reveal>
            <div className="path-layout">
              <Reveal className="pathway" delay={110}>
                <div className="pathway-label"><UsersRound size={19} /> A rede de cuidado</div>
                {["Paciente", "Família", "Equipe multidisciplinar", "Plano de acompanhamento", "Desenvolvimento e autonomia"].map((item, index) => (
                  <div className="pathway-step" key={item} data-testid={`pathway-step-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                    {index < 4 && <ChevronRight className="pathway-arrow" size={18} aria-hidden="true" />}
                  </div>
                ))}
              </Reveal>
              <Reveal className="process-copy" delay={180}>
                <p className="large-copy">O cuidado se constrói em conjunto.</p>
                <p>O primeiro passo é ouvir. A partir dessa conversa, o Instituto apresenta as possibilidades de atendimento que fazem sentido para a pessoa e sua família.</p>
                <a className="button button-accent" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="process-whatsapp-btn">
                  Falar com o Instituto <ArrowUpRight size={18} />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="steps-section" aria-labelledby="steps-title">
          <div className="section-inner">
            <Reveal>
              <div className="split-heading split-heading--steps">
                <div>
                  <p className="eyebrow">Como funciona</p>
                  <h2 id="steps-title">Começar pode ser simples.</h2>
                </div>
                <p>Um caminho inicial, explicado com clareza para que você saiba o que esperar de cada conversa.</p>
              </div>
            </Reveal>
            <div className="steps-grid">
              {["Entre em contato", "Converse com nossa equipe", "Conheça as possibilidades de atendimento", "Encontre o acompanhamento adequado"].map((step, index) => (
                <Reveal className="step-item" key={step} delay={index * 90}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step}</h3>
                  <ChevronRight size={18} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section team-section section-anchor" id="equipe" aria-labelledby="team-title">
          <div className="section-inner">
            <Reveal>
              <Chapter number="04" eyebrow="Nossa equipe" title="Profissionais que acolhem histórias">
                Nomes apresentados pelo Instituto. Informações de profissão, especialidade, foto e registro profissional serão atualizadas quando confirmadas.
              </Chapter>
            </Reveal>
            <Reveal className="team-feature" delay={100}>
              <figure className="team-feature-media">
                <img src={TEAM_IMAGE} alt="Imagem enviada pelo Instituto Libélula apresentando as profissionais da equipe" data-testid="team-feature-image" />
                <figcaption><span className="status-dot" /> Material enviado pelo Instituto · nomes apresentados</figcaption>
              </figure>
              <div className="team-feature-copy">
                <p className="eyebrow">Pessoas que fazem o cuidado</p>
                <p className="large-copy">Cada nome carrega uma história de acolhimento.</p>
                <p>Esta imagem enviada pelo Instituto apresenta parte da equipe e ajuda a aproximar famílias de quem estará presente no caminho terapêutico.</p>
                <p className="team-feature-note"><span className="status-dot" /> Profissões, especialidades e registros serão confirmados na próxima etapa.</p>
              </div>
            </Reveal>
            <div className="team-grid">
              {teamNames.map((name, index) => (
                <Reveal className="team-card" key={name} delay={index * 55}>
                  <div className="team-photo"><ImageIcon size={22} /><span>Foto pendente</span></div>
                  <div className="team-card-body">
                    <span className="team-number">0{index + 1}</span>
                    <h3 data-testid={`team-member-${index + 1}-name`}>{name}</h3>
                    <p>[Profissão a confirmar]</p>
                    <small>[Registro profissional, quando aplicável]</small>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="placeholder-callout"><Sparkles size={17} /> [Adicionar profissionais posteriormente]</p>
          </div>
        </section>

        <section className="space-section section-anchor" id="espaco" aria-labelledby="space-title">
          <div className="section-inner">
            <Reveal>
              <Chapter number="05" eyebrow="Nosso espaço" title="Um ambiente preparado para acolher">
                Cada detalhe será pensado para proporcionar conforto, acolhimento e segurança durante o acompanhamento terapêutico.
              </Chapter>
            </Reveal>
            <div className="space-layout">
              <Reveal className="space-note" delay={100}>
                <div className="space-note-icon"><HeartHandshake size={23} /></div>
                <p className="large-copy">A casa também cuida.</p>
                <p>As fotos reais da unidade entram aqui na próxima etapa. Até lá, os espaços estão sinalizados para facilitar a substituição.</p>
                <a className="text-link" href="#contato" data-testid="space-more-photos-btn">Ver mais fotos <ArrowUpRight size={17} /></a>
              </Reveal>
              <div className="space-grid">
                {spacePlaces.map(([number, title, text], index) => (
                  <Reveal className={`space-placeholder space-placeholder--${index + 1}`} key={title} delay={index * 65}>
                    <span className="space-number">{number}</span>
                    <ImageIcon size={28} />
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section section-anchor" id="depoimentos" aria-labelledby="testimonial-title">
          <div className="section-inner testimonial-inner">
            <Reveal>
              <div className="rating-display">
                <span className="rating-score" data-testid="google-rating">5,0</span>
                <span className="rating-stars" aria-label="Cinco estrelas">★★★★★</span>
                <span data-testid="google-reviews-count">19 avaliações</span>
              </div>
            </Reveal>
            <Reveal className="testimonial-copy" delay={130}>
              <p className="eyebrow">Depoimentos</p>
              <h2 id="testimonial-title">O que dizem sobre o Instituto.</h2>
              <p>Avaliações públicas disponíveis no Google. Depoimentos individuais serão exibidos somente quando estiverem identificados e autorizados.</p>
              <a className="text-link text-link--light" href={MAP_LINK} target="_blank" rel="noreferrer" data-testid="google-reviews-link">
                Ver avaliações públicas <ArrowUpRight size={17} />
              </a>
            </Reveal>
            <div className="testimonial-mark" aria-hidden="true">“</div>
          </div>
        </section>

        <section className="contact-section section-anchor" id="contato" aria-labelledby="contact-title">
          <div className="section-inner">
            <Reveal>
              <Chapter number="06" eyebrow="Araruama · RJ" title="Vamos conversar?">
                Entre em contato com nossa equipe para saber mais sobre os atendimentos disponíveis e encontrar a melhor forma de acompanhamento.
              </Chapter>
            </Reveal>
            <div className="contact-layout">
              <Reveal className="location-card" delay={110}>
                <div className="card-icon"><MapPin size={21} /></div>
                <p className="eyebrow">Onde estamos</p>
                <h3>Instituto Libélula</h3>
                <p className="address" data-testid="address-info">Rua das Casuarinas, 244<br />Pontinha<br />Araruama - RJ<br />CEP 28981-750</p>
                <a className="button button-outline" href={MAP_LINK} target="_blank" rel="noreferrer" data-testid="maps-directions-btn">
                  Como chegar <ArrowUpRight size={17} />
                </a>
              </Reveal>
              <Reveal className="contact-card" delay={180}>
                <p className="eyebrow">Canais de contato</p>
                <h3>O próximo passo começa com uma conversa.</h3>
                <a className="contact-line" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="contact-whatsapp-btn">
                  <MessageCircle size={21} />
                  <span><small>WhatsApp</small>(22) 99750-1612</span>
                  <ArrowUpRight size={18} />
                </a>
                <a className="contact-line" href="https://www.instagram.com/libelulainstituto/" target="_blank" rel="noreferrer" data-testid="instagram-link">
                  <Instagram size={21} />
                  <span><small>Instagram</small>@libelulainstituto</span>
                  <ArrowUpRight size={18} />
                </a>
                <p className="pending-note" data-testid="whatsapp-pending-note"><span className="status-dot" /> Número informado; link do WhatsApp aguarda confirmação oficial do Instituto.</p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#inicio" data-testid="footer-logo-link" aria-label="Voltar ao início">
              <Logo variant="word" testId="footer-brand-logo" />
            </a>
            <p>Espaço Terapêutico Multidisciplinar<br />Araruama · RJ</p>
          </div>
          <div className="footer-nav">
            <p className="eyebrow">Navegue</p>
            <div>
              <a href="#instituto" data-testid="footer-institute-link">O instituto</a>
              <a href="#especialidades" data-testid="footer-specialties-link">Especialidades</a>
              <a href="#equipe" data-testid="footer-team-link">Equipe</a>
              <a href="#contato" data-testid="footer-contact-link">Contato</a>
            </div>
          </div>
          <div className="footer-contact">
            <p className="eyebrow">Fale com a gente</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="footer-whatsapp-link"><Phone size={17} /> WhatsApp</a>
            <a href="https://www.instagram.com/libelulainstituto/" target="_blank" rel="noreferrer" data-testid="footer-instagram-link"><Instagram size={17} /> Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Instituto Libélula · Araruama - RJ</span>
          <span>[CNPJ e responsável técnico a inserir]</span>
          <span>Política de Privacidade · em atualização</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Falar conosco pelo WhatsApp" data-testid="whatsapp-float-btn">
        <MessageCircle size={21} />
        <span>Fale conosco</span>
      </a>
    </div>
  );
}

export default App;

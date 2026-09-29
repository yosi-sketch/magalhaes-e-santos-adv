"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535999587267";
const PHONE_DISPLAY = "(35) 99958-7267";
const EMAIL_CONTACT = "contato@magalhaesysantos.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/magalhaesesantos.advocacia/";
const INSTAGRAM_HANDLE = "@magalhaesesantos.advocacia";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Magalh%C3%A3es+%26+Santos+Advocacia+Especializada+Av.+Cel.+Carneiro+J%C3%BAnior%2C+124+-+Sl+03+-+Centro%2C+Itajub%C3%A1+-+MG%2C+37500-018";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Magalh%C3%A3es+%26+Santos+Advocacia+Especializada#";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dr. Blener e Dra. Joyce. Gostaria de solicitar uma consulta jurídica especializada com a Magalhães & Santos Advocacia.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "divorcio-familia",
    title: "Litígio de Divórcio, Família & Sucessões",
    icon: HeartHandshake,
    tag: "Especialidade & Sensibilidade",
    summary:
      "Condução sensível, sigilosa e tecnicamente firme em divórcios consensuais e litigiosos, partilha de patrimônio, guarda de filhos e inventários.",
    details:
      "As questões de família e sucessões demandam o mais refinado equilíbrio entre firmeza jurídica e acolhimento humano. Sob a condução atenta da Dra. Joyce Santos e do Dr. Blener Magalhães, o escritório atua em divórcios de alta complexidade com partilha equitativa de bens, ações de pensão alimentícia (fixação, revisão e execução), guarda e convivência parental, inventários judiciais e extrajudiciais ágeis em cartório e planejamento sucessório para proteção patrimonial.",
    topics: [
      "Divórcio consensual e litigioso com partilha patrimonial estratégica",
      "Guarda compartilhada, convivência familiar e alienação parental",
      "Fixação, revisão, exoneração e execução de pensão alimentícia",
      "Inventários judiciais e extrajudiciais ágeis e planejamento sucessório",
    ],
    whatsAppText:
      "Olá, Dr. Blener e Dra. Joyce. Gostaria de uma consulta especializada em Divórcio e Direito de Família.",
  },
  {
    id: "litigio-civil",
    title: "Litígio Civil & Disputas Patrimoniais",
    icon: Scale,
    tag: "Combatividade & Blindagem",
    summary:
      "Atuação contenciosa vigorosa em reparações civis, cobranças de títulos, rescisões e elaboração de contratos blindados de alto padrão.",
    details:
      "A proteção do seu patrimônio e a resolução ágil de conflitos cíveis exigem estratégia processual impecável. Atuamos com extrema técnica na elaboração e auditoria minuciosa de contratos, ações indenizatórias por danos morais e materiais, execuções forçadas de títulos e cobrança de dívidas, defesas possessórias e resolução de controvérsias negociais, prevenindo passivos e garantindo a devida compensação jurídica.",
    topics: [
      "Ações indenizatórias por danos materiais, morais e lucros cessantes",
      "Elaboração e revisão minuciosa de contratos civis e comerciais blindados",
      "Ações de cobrança, execuções de títulos e recuperação de crédito",
      "Resolução de litígios imobiliários, possessórios e obrigações de fazer",
    ],
    whatsAppText:
      "Olá, Dr. Blener e Dra. Joyce. Gostaria de orientações sobre Litígio Civil e Contratos.",
  },
  {
    id: "litigio-trabalhista",
    title: "Litígio Trabalhista & Defesa Estratégica",
    icon: Briefcase,
    tag: "Defesa dos Direitos",
    summary:
      "Defesa combativa de trabalhadores em reclamatórias complexas e assessoria preventiva/contenciosa especializada para empresas e empresários.",
    details:
      "A relação de trabalho exige domínio profundo da jurisprudência dos Tribunais Regionais e do TST. Nossa banca atua com determinação na defesa de direitos trabalhistas sonegados — como rescisão indireta por falta grave do empregador, horas extras, adicionais de insalubridade e periculosidade, verbas rescisórias retidas e indenizações por assédio moral ou acidentes de trabalho —, além de consultoria corporativa para mitigação de passivos trabalhistas.",
    topics: [
      "Reclamatórias trabalhistas e pedidos de rescisão indireta",
      "Cobrança de horas extras, adicionais e reflexos rescisórios",
      "Indenizações por assédio moral, burnout e acidentes de trabalho",
      "Consultoria preventiva, auditoria de conformidade e defesa para empresas",
    ],
    whatsAppText:
      "Olá, Dr. Blener e Dra. Joyce. Gostaria de uma avaliação para uma causa em Direito Trabalhista.",
  },
  {
    id: "consumidor-bancario",
    title: "Direito do Consumidor & Defesa Bancária",
    icon: Landmark,
    tag: "Restauração de Direitos",
    summary:
      "Combate incisivo a fraudes eletrônicas, golpes bancários, empréstimos consignados não solicitados e negativações indevidas no SPC/Serasa.",
    details:
      "Práticas abusivas de instituições financeiras e grandes concessionárias exigem resposta jurídica contundente e célere. Atuamos fortemente na anulação de contratos de empréstimo fraudulentos com pedido de repetição de indébito (devolução em dobro), desconstituição de fraudes cibernéticas e do golpe do PIX, e ações com pedido liminar para exclusão de negativações cadastrais indevidas com indenização por danos morais.",
    topics: [
      "Cancelamento de empréstimos consignados fraudulentos e descontos indevidos",
      "Recuperação de perdas e indenizações em fraudes digitais e golpes bancários",
      "Liminares para exclusão imediata de negativações irregulares no SPC/Serasa",
      "Ações indenizatórias contra abusividades de companhias aéreas e operadoras",
    ],
    whatsAppText:
      "Olá, Dr. Blener e Dra. Joyce. Gostaria de orientações jurídicas sobre Direito do Consumidor e Bancário.",
  },
  {
    id: "consultoria-recursos",
    title: "Assessoria Preventiva & Recursos aos Tribunais",
    icon: ShieldCheck,
    tag: "Visão Holística & Recursal",
    summary:
      "Atuação recursal nos Tribunais de Justiça e Tribunais Superiores (STJ e STF), com sustentações orais e formulação de soluções extrajudiciais.",
    details:
      "Casos complexos muitas vezes são decididos nas instâncias superiores. Desenvolvemos teses jurídicas sólidas, memoriais e sustentações perante os Tribunais Estaduais (TJMG) e Cortes Superiores (STJ, STF, TST). Paralelamente, nossa advocacia consultiva antecipa litígios através de pareceres preventivos, mediações e negociações extrajudiciais bem fundamentadas.",
    topics: [
      "Elaboração de recursos especiais, recursos extraordinários e agravos",
      "Acompanhamento em tribunais estaduais, federais e superiores",
      "Negociação estratégica extrajudicial e mediação de conflitos",
      "Pareceres jurídicos para tomada de decisões patrimoniais e empresariais",
    ],
    whatsAppText:
      "Olá, Dr. Blener e Dra. Joyce. Gostaria de uma assessoria estratégica para meu processo/empresa.",
  },
];

interface Testimonial {
  name: string;
  reviewsCount: string;
  date: string;
  highlight: string;
  content: string;
  verified?: boolean;
}

const clientReviews: Testimonial[] = [
  {
    name: "Pietro William",
    reviewsCount: "6 avaliações · 1 foto",
    date: "Há 5 meses",
    highlight: "Resolveram meu problema com muito respeito e empatia",
    content:
      "Excelentes profissionais! Muito atenciosos, competentes e extremamente capacitados. Resolveram meu problema com muito respeito, atenção e empatia. Recomendo muito!",
    verified: true,
  },
  {
    name: "Giovani",
    reviewsCount: "1 avaliação",
    date: "Há 4 meses",
    highlight: "Só elogios para o Dr. Blener e a Dra. Joyce!",
    content:
      "Só elogios para o trabalho do Dr. Blener e da Dra. Joyce! Atendimento super prestativo, esclarecedor e profissional!",
    verified: true,
  },
  {
    name: "Guilherme Mira",
    reviewsCount: "2 avaliações",
    date: "Há 4 meses",
    highlight: "Muita paciência e clareza. Confio e super recomendo",
    content:
      "Profissionais muito bem preparados e qualificados. Tivemos duas experiências distintas, consultamos eles, nos esclareceram tudo com muita paciência e clareza. Confio e super recomendo o trabalho deles para outras pessoas.",
    verified: true,
  },
  {
    name: "Leandra Lamoglia",
    reviewsCount: "3 avaliações",
    date: "Há 5 meses",
    highlight: "Atendimento impecável! Muito acolhedores e ágeis",
    content:
      "Atendimento impecável! Muito acolhedores e ágeis na resolução do meu problema. Super recomendo.",
    verified: true,
  },
  {
    name: "Michelly Carvalho",
    reviewsCount: "1 avaliação",
    date: "Há 4 meses",
    highlight: "Atendimento maravilhoso, presencial e no online",
    content:
      "Sou cliente e sempre fui muito bem tratada tanto presencial quanto no online, atendimento maravilhoso, lugar aconchegante.. super recomendo 🙌🏾💜",
    verified: true,
  },
  {
    name: "Alyson Ferreira",
    reviewsCount: "1 avaliação",
    date: "Há 5 meses",
    highlight: "Trabalho fenomenal, muito acima da média",
    content:
      "O trabalho deles é fenomenal, muito acima da média em tudo o que já presenciei neste ramo. Super recomendo.",
    verified: true,
  },
  {
    name: "valdineia faria",
    reviewsCount: "4 avaliações",
    date: "Há 1 mês",
    highlight: "Explicou todo o processo com clareza",
    content:
      "Excelentes profissionais, muito atenciosos e competentes. Explicou todo o processo com clareza. Recomendo.",
    verified: true,
  },
  {
    name: "Lucas Santiago",
    reviewsCount: "1 avaliação",
    date: "Há 4 meses",
    highlight: "Altamente capacitados e ótimo ambiente",
    content:
      "Profissionais altamente capacitados com atendimento excelente em um ótimo ambiente, indico demais.",
    verified: true,
  },
  {
    name: "Vanda Aparecida de Paula",
    reviewsCount: "2 avaliações",
    date: "Há 5 meses",
    highlight: "Muita competência e profissionalismo",
    content:
      "Ótimo atendimento! Muita competência e profissionalismo. Recomendo fortemente!!",
    verified: true,
  },
  {
    name: "Maira Fortes",
    reviewsCount: "2 avaliações",
    date: "Há 5 meses",
    highlight: "Agilidade e atenciosos com os clientes",
    content:
      "Excelentes profissionais... Agilidade e atenciosos com os clientes.. Super recomendo ..",
    verified: true,
  },
  {
    name: "genifer oliveira",
    reviewsCount: "2 avaliações",
    date: "Há 5 meses",
    highlight: "Podem ir sem medo, estará em boas mãos",
    content:
      "Super recomendo .... São ótimos profissionais... Podem ir sem medo , estará em boas mãos.",
    verified: true,
  },
  {
    name: "Jacqueline Gonzaga",
    reviewsCount: "Local Guide · 15 avaliações",
    date: "Há 5 meses",
    highlight: "Lugar tranquilo e profissionais muito educados",
    content:
      "Lugar tranquilo, com profissionais qualificados e muito educados. Fui muito bem atendida. Parabéns aos profissionais 👏👏",
    verified: true,
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-brand-950 sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/70"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-brand-950 text-brand-50">
        {/* Navigation Bar - Obsidian Noir with Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-950/90 backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[96px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Magalhães & Santos Advocacia Especializada — Início"
              onClick={closeMenu}
              className="group flex items-center gap-3.5 transition-opacity hover:opacity-95"
            >
              <div className="relative size-12 shrink-0 sm:size-14">
                <Image
                  src="/logo(no background).png"
                  alt="Logo Magalhães & Santos Advocacia"
                  fill
                  priority
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-contain drop-shadow-[0_2px_12px_rgba(197,151,66,0.3)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-[0.04em] text-white sm:text-xl">
                  MAGALHÃES &amp; SANTOS
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-400 sm:text-[10px]">
                  Advocacia Especializada
                </span>
              </div>
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300"
                href="#inicio"
              >
                Início
              </a>
              <a
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300"
                href="#socios"
              >
                Os Sócios
              </a>
              <a
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300"
                href="#atuacao"
              >
                Áreas de Atuação
              </a>
              <a
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300"
                href="#metodo"
              >
                Diferenciais
              </a>
              <a
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300"
                href="#avaliacoes"
              >
                Avaliações (5,0 ★)
              </a>
              <a
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300"
                href="#contato"
              >
                Contato
              </a>
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="text-[11px] font-medium tracking-wide text-white/70 transition-colors hover:text-gold-300"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Magalhães & Santos Advocacia"
                className="grid size-9 place-items-center rounded-full border border-white/20 text-gold-300 transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200"
              >
                <InstagramIcon size={16} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-full shadow-gold"
              >
                <WhatsAppIcon size={14} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-white/10 bg-brand-900 px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Os Sócios & Trajetória", "#socios"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais & Método", "#metodo"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-white/80 transition-colors hover:text-gold-300"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 py-3 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                  >
                    <InstagramIcon size={16} /> Seguir no Instagram ({INSTAGRAM_HANDLE})
                  </a>
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-brand-950 shadow-gold transition-all hover:brightness-105"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <WhatsAppIcon size={16} /> Falar no WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - High-End Luxury Dark Editorial */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-white/10 bg-radial-[at_top_right] from-brand-900 via-brand-950 to-brand-950"
        >
          {/* Ambient Lighting Accents */}
          <div className="pointer-events-none absolute -right-24 top-10 -z-10 size-[38rem] rounded-full bg-gold-500/10 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-brand-700/20 blur-[130px]" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[740px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div variants={reveal} className="eyebrow-light mb-6">
                <span className="size-2 rounded-full bg-gold-400" />
                5,0 ★ NO GOOGLE (63 AVALIAÇÕES) · ITAJUBÁ - MG · ATENDIMENTO BRASIL
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.6rem]"
              >
                Defesa jurídica de alto padrão com{" "}
                <span className="italic font-serif bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 bg-clip-text text-transparent">
                  combatividade forense
                </span>{" "}
                e dedicação artesanal.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8"
              >
                Sob a liderança do <strong className="text-white font-semibold">Dr. Blener Magalhães</strong> e da <strong className="text-white font-semibold">Dra. Joyce Santos</strong>, a Magalhães &amp; Santos Advocacia oferece estratégia jurídica personalizada em Litígio Civil, Divórcio &amp; Família e Causas Trabalhistas — com acolhimento pessoal no Centro de Itajubá e atendimento digital seguro em todo o território nacional.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-full shadow-gold"
                >
                  <WhatsAppIcon size={17} /> Falar com os Sócios no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-white/90 transition-colors hover:text-gold-300"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-xs text-white/65"
              >
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-gold-300"
                >
                  <Star size={15} className="fill-gold-400 text-gold-400" />{" "}
                  5,0 estrelas no Google (63 avaliações unânimes)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Users size={15} className="text-gold-400" /> Casal de sócios dedicados à sua causa
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-gold-400" /> Av. Cel. Carneiro Júnior, 124 · Itajubá
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation - Dr. Blener & Dra. Joyce Together */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-0"
            >
              {/* Outer decorative gold halo */}
              <div className="absolute -inset-3 -rotate-1 rounded-2xl border border-gold-500/30 sm:-inset-4" />

              {/* Main portrait container */}
              <div className="relative aspect-[0.84] overflow-hidden rounded-2xl border border-white/15 bg-brand-900 shadow-2xl">
                <Image
                  src="/imgi_65_484354507_17955301970924096_1866708495477717268_n.jpg"
                  alt="Dr. Blener Magalhães e Dra. Joyce Santos — Magalhães & Santos Advocacia Especializada"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-[50%_18%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dr. Blener &amp; Dra. Joyce
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                      Magalhães &amp; Santos Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-400/50 bg-brand-950/80 text-gold-300 backdrop-blur-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3.5 left-6 rounded-full border border-gold-400/40 bg-brand-900/95 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-gold-200 shadow-xl backdrop-blur-md sm:-top-4 sm:left-8 sm:px-5">
                CASAL DE SÓCIOS ESPECIALISTAS
              </div>

              <div className="absolute -right-3 bottom-[20%] rounded-2xl border border-gold-500/40 bg-brand-900/95 p-3.5 shadow-2xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-gold-400">
                  <Star size={14} className="fill-gold-400" />
                  <span className="font-serif text-lg font-bold text-white">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/70">
                  63 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-white/10 bg-brand-900/60 backdrop-blur-md"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "classificação máxima unânime com 63 avaliações no Google"],
              ["Sócios Titulares", "atendimento direto com o Dr. Blener e a Dra. Joyce"],
              ["Especializada", "Litígio Civil, Divórcio, Família e Trabalhista"],
              ["Itajubá & Brasil", "sede no Centro de Itajubá e atendimento 100% on-line"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-white/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-3xl font-semibold text-gold-400">
                  {value}
                </span>
                <span className="max-w-[155px] text-[11px] leading-5 text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre os Sócios (The Couple & The Firm) */}
        <section
          id="socios"
          className="scroll-mt-24 bg-ivory py-20 text-brand-950 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.p variants={reveal} className="eyebrow">
                QUEM SOMOS · ADVOCACIA A QUATRO MÃOS
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-brand-950 sm:text-5xl lg:text-[3.5rem]"
              >
                Uma sociedade fundada na{" "}
                <span className="italic text-gold-600">cumplicidade</span>, no
                rigor técnico e na defesa intransigente de quem confia em nós.
              </motion.h2>
              <motion.p
                variants={reveal}
                className="mt-6 text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                A <strong className="text-brand-950 font-semibold">Magalhães &amp; Santos Advocacia Especializada</strong> é conduzida pelo casal de advogados <strong className="text-brand-950">Dr. Blener Magalhães</strong> e <strong className="text-brand-950">Dra. Joyce Santos</strong>. Unidos pelo rigor ético e pela dedicação à Justiça, construíram um escritório com um compromisso claro: tratar cada cliente com empatia genuína e cada processo como uma missão singular.
              </motion.p>
              <motion.p
                variants={reveal}
                className="mt-4 text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Aqui, sua causa não é terceirizada ou tratada com formulários genéricos. Você é atendido diretamente pelos sócios, recebendo relatórios claros, estratégias personalizadas e total transparência sobre cada movimentação jurídica.
              </motion.p>
            </motion.div>

            {/* Two Partner Cards - Symmetrical Presentation */}
            <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Card Dr. Blener Magalhães */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                className="group flex flex-col overflow-hidden rounded-2xl border border-brand-950/10 bg-white p-7 shadow-card transition-all duration-300 hover:border-gold-500/40 hover:shadow-xl sm:p-9"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="relative aspect-[0.85] w-full shrink-0 overflow-hidden rounded-xl border border-brand-950/10 bg-brand-900 sm:w-44">
                    <Image
                      src="/imgi_62_483862409_17993564879780736_4758234426780214328_n.jpg"
                      alt="Dr. Blener Magalhães — Sócio-Fundador"
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600">
                      Sócio-Fundador
                    </span>
                    <h3 className="mt-1 font-serif text-3xl font-normal text-brand-950">
                      Dr. Blener Magalhães
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-brand-700">
                      Litígio Civil, Contratos &amp; Contencioso Estratégico
                    </p>
                    <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                      Atuação incisiva na proteção patrimonial, formulação de teses defensivas e resolução de litígios contratuais e cíveis de alta complexidade.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-brand-950/10 pt-5 text-xs text-ink-soft space-y-2.5">
                  <div className="flex items-center gap-2.5 font-medium text-brand-950">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Estratégia processual combativa e minuciosa</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium text-brand-950">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Auditoria e elaboração de contratos seguros</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium text-brand-950">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Defesas patrimoniais e recuperação de créditos</span>
                  </div>
                </div>
              </motion.div>

              {/* Card Dra. Joyce Santos */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                className="group flex flex-col overflow-hidden rounded-2xl border border-brand-950/10 bg-white p-7 shadow-card transition-all duration-300 hover:border-gold-500/40 hover:shadow-xl sm:p-9"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="relative aspect-[0.85] w-full shrink-0 overflow-hidden rounded-xl border border-brand-950/10 bg-brand-900 sm:w-44">
                    <Image
                      src="/imgi_63_484837281_17993564591780736_1958939322199981627_n.jpg"
                      alt="Dra. Joyce Santos — Sócia-Fundadora"
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600">
                      Sócia-Fundadora
                    </span>
                    <h3 className="mt-1 font-serif text-3xl font-normal text-brand-950">
                      Dra. Joyce Santos
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-brand-700">
                      Litígio de Divórcio, Família, Sucessões &amp; Trabalhista
                    </p>
                    <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                      Especialista no acolhimento de famílias e trabalhadores, aliando extrema sensibilidade à proteção de direitos e partilha patrimonial justa.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-brand-950/10 pt-5 text-xs text-ink-soft space-y-2.5">
                  <div className="flex items-center gap-2.5 font-medium text-brand-950">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Condução acolhedora e sigilosa em divórcios</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium text-brand-950">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Defesa combativa de direitos dos trabalhadores</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium text-brand-950">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Agilidade em inventários e partilhas extrajudiciais</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Synergy & Trust Box */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-gold-500/30 bg-white p-8 shadow-card sm:flex-row sm:p-10"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-gold-600">
                  <Users size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
                    Atendimento Exclusivo pelos Sócios
                  </span>
                </div>
                <h4 className="mt-2 font-serif text-2xl text-brand-950 sm:text-3xl">
                  Sua causa analisada com rigor por quem realmente decide.
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Tenha a tranquilidade de contar com uma advocacia dedicada, que estuda cada detalhe documental e mantém você atualizado a cada avanço do processo.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Blener e Dra. Joyce. Gostaria de agendar uma consulta jurídica para meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-full shadow-gold"
                >
                  <WhatsAppIcon size={16} /> Consultar os Sócios
                </GlowingButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-950/20 bg-brand-50 px-5 py-3 text-xs font-semibold text-brand-950 transition-all hover:border-gold-600 hover:bg-gold-50/80 hover:text-gold-900"
                >
                  <InstagramIcon size={15} /> Seguir no Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Estratégica */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-brand-900 py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO ESTRATÉGICA"
                light
                description="Conhecimento técnico aprofundado para resguardar seus direitos civis, familiares, trabalhistas e patrimoniais."
              >
                Segurança jurídica e assertividade nos{" "}
                <span className="italic font-serif bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 bg-clip-text text-transparent">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-white/70">
                Clique em uma área para visualizar as demandas atendidas e iniciar uma consulta especializada com os sócios.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[360px] flex-col rounded-2xl border border-white/10 bg-brand-950/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-2xl sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-gold-500/30 bg-brand-900 text-gold-300 transition-colors group-hover:bg-gold-500 group-hover:text-brand-950">
                        <Icon size={22} strokeWidth={1.7} />
                      </span>
                      <span className="font-serif text-2xl text-gold-400/60">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-gold-300">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-white group-hover:text-gold-200 transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-white/70">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300 hover:text-gold-200 cursor-pointer"
                    >
                      Ver detalhes e demandas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Diferenciais / Nosso Método */}
        <section
          id="metodo"
          className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-gold-500/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-700/20 blur-[120px]" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
              light
              description="A condução de cada caso com a máxima técnica jurídica, transparência irrestrita e respeito ao tempo e à história de quem nos procura."
            >
              A precisão técnica aliada ao{" "}
              <span className="italic text-gold-300">
                respeito que sua história merece.
              </span>
            </Heading>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/10"
            >
              {[
                [
                  "01",
                  "Atendimento Conduzido Diretamente pelos Sócios",
                  "Você tem a segurança de conversar e traçar estratégias diretamente com o Dr. Blener e com a Dra. Joyce, sem intermediários desatentos ou respostas evasivas.",
                ],
                [
                  "02",
                  "Transparência Radical & Clareza Sem Juridiquês",
                  "Você entende cada passo do seu processo em linguagem direta e acessível. Informamos com total honestidade sobre riscos, prazos reais e expectativas concretas.",
                ],
                [
                  "03",
                  "Dedicação Artesanal Sem Petições Genéricas",
                  "Cada história é única. Analisamos minuciosamente cada documento e prova, aplicando jurisprudência atualizada para construir peças processuais robustas e vitoriosas.",
                ],
                [
                  "04",
                  "Ambiente Acolhedor & Presença Digital Nacional",
                  "Oferecemos uma estrutura confortável e reservada no Centro de Itajubá para atendimento presencial, além de ferramentas seguras para consultas online em todo o Brasil.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-gold-400">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/70">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Prova Social Real - 5.0 Estrelas com 63 Avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-ivory py-20 text-brand-950 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação da Magalhães & Santos Advocacia é atestada por quem viveu a experiência do nosso atendimento. Todas as avaliações são públicas e verificadas no Google Maps."
                >
                  Confiança atestada por quem{" "}
                  <span className="italic text-gold-600">
                    vivenciou nosso atendimento.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-gold-500 pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-950 hover:text-gold-700 transition-colors"
                  >
                    Ver perfil e avaliações no Google <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights tags */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Atenciosos & Competentes",
                    "Paciência e Clareza",
                    "Ambiente Aconchegante",
                    "Profissionais Qualificados",
                    "Muito Acima da Média",
                    "Super Recomendo",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-950/10 bg-white px-3.5 py-1.5 text-[11px] font-medium text-ink-soft shadow-xs"
                    >
                      <CheckCircle2 size={13} className="text-gold-600" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-gold-400/40 bg-brand-950 p-8 text-white shadow-2xl sm:p-10">
                <div className="absolute -right-10 -top-16 size-56 rounded-full border border-gold-400/10" />
                <div className="absolute -right-2 -top-8 size-40 rounded-full border border-gold-400/10" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div
                    className="flex gap-1 text-gold-400"
                    aria-label="5 estrelas de 5"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="font-serif text-7xl font-normal leading-none text-white sm:text-8xl">
                      5,0
                    </span>
                    <p className="mt-2 text-xs font-semibold text-gold-300">
                      Excelente · Classificação Máxima Unânime
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-serif text-3xl font-semibold text-white">
                      63 avaliações
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      100% de clientes satisfeitos no Google
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid - Row 1 */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(0, 4).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between rounded-xl border border-brand-950/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-gold-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-950">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-brand-950/10 pt-4">
                    <p className="font-serif text-base font-semibold text-brand-950">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Grid - Row 2 */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(4, 8).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between rounded-xl border border-brand-950/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-gold-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-950">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-brand-950/10 pt-4">
                    <p className="font-serif text-base font-semibold text-brand-950">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Grid - Row 3 */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(8, 12).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between rounded-xl border border-brand-950/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-gold-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-950">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-brand-950/10 pt-4">
                    <p className="font-serif text-base font-semibold text-brand-950">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Sede em Itajubá */}
        <section
          id="contato"
          className="scroll-mt-24 bg-brand-900 py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & LOCALIZAÇÃO"
                light
                description="Agende sua consulta presencial em nosso escritório no Centro de Itajubá ou realize seu atendimento de forma totalmente on-line com total sigilo e conveniência."
              >
                Estamos prontos para{" "}
                <span className="italic font-serif bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 bg-clip-text text-transparent">
                  ouvir o seu caso.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-full shadow-gold"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-white/70">
                  Atendimento direto e retorno com agilidade:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-white/75">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gold-400 shrink-0" />
                  <span>Segunda a Sexta: 09h às 18h (atendimento sob agendamento)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold-400 shrink-0" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gold-400 shrink-0" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="text-gold-400 shrink-0" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold-300 transition-colors"
                  >
                    Instagram: {INSTAGRAM_HANDLE}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gold-400 shrink-0" />
                  <span>Av. Cel. Carneiro Júnior, 124 - Sl 03 - Centro, Itajubá - MG, 37500-018</span>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-brand-950 p-7 sm:p-10 shadow-2xl">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-gold-500 to-gold-400" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl border border-gold-400/30 bg-brand-900 text-gold-300">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">
                    Centro · Itajubá - MG
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-white/75">
                <strong className="text-white font-semibold">
                  Magalhães &amp; Santos Advocacia Especializada
                </strong>
                <br />
                Avenida Coronel Carneiro Júnior, 124 - Sala 03
                <br />
                Centro, Itajubá - MG, CEP 37500-018, Brasil
              </address>

              <div className="my-7 h-px bg-white/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-white/70">
                  Atendimento presencial no Centro e on-line para todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-500/10 hover:text-white"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-white/10 bg-radial-[at_center] from-brand-900 via-brand-950 to-brand-950 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                MAGALHÃES &amp; SANTOS ADVOCACIA ESPECIALIZADA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
                Pronto para resguardar seus direitos com quem realmente se dedica à sua causa?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Blener e Dra. Joyce. Gostaria de agendar uma consulta inicial para avaliar minha situação."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950 shadow-gold transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="relative size-12 shrink-0">
                  <Image
                    src="/logo(no background).png"
                    alt="Logo Magalhães & Santos"
                    fill
                    sizes="48px"
                    className="object-contain drop-shadow-[0_2px_12px_rgba(197,151,66,0.3)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-[0.04em] text-white">
                    MAGALHÃES &amp; SANTOS
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-400">
                    Advocacia Especializada
                  </span>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/65">
                Advocacia estratégica, rigor técnico e atendimento dedicado conduzido pelos sócios Dr. Blener Magalhães e Dra. Joyce Santos. Sede no Centro de Itajubá - MG e assessoria on-line para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-gold-400">
                Itajubá - Minas Gerais
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#socios">
                  Os Sócios &amp; Trajetória
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#metodo">
                  Diferenciais &amp; Método
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato &amp; Localização
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" />
                  <span>Av. Cel. Carneiro Júnior, 124 - Sl 03, Centro, Itajubá - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Magalhães &amp; Santos Advocacia Especializada. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-gold-500/30 bg-brand-950 p-7 text-white shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-gold-300 cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-light">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/75">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-400">
                    Principais demandas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-white/90"
                      >
                        <span className="size-2 rounded-full bg-gold-400 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="gold"
                    className="rounded-full shadow-gold"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Button */}
        <div className="fixed bottom-6 right-6 z-30">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp com Dr. Blener e Dra. Joyce"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
          >
            <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366]/40 opacity-75 duration-1000" />
            <WhatsAppIcon size={28} className="relative z-10" />
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}

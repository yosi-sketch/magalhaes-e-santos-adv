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
  Award,
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
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535999183277";
const PHONE_DISPLAY = "(35) 99918-3277";
const EMAIL_CONTACT = "contato@barbaracarolis.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/bcarolis/";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/b%C3%A1rbara-carolis-lima-diniz-65009017a/";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Cel.+Carneiro+J%C3%BAnior%2C+57+-+Sl+1004+-+Centro%2C+Itajub%C3%A1+-+MG%2C+37500-018";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dra. Bárbara Carolis. Gostaria de solicitar uma consulta jurídica especializada.";
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

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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
    id: "trabalhista-empresarial",
    title: "Direito do Trabalho & Empresarial",
    icon: Briefcase,
    tag: "Especialista Damásio",
    summary:
      "Defesa combativa dos direitos de trabalhadores e assessoria jurídica preventiva e contenciosa de alto nível para empresas.",
    details:
      "Com pós-graduação e especialização pelo Damásio Educacional, a Dra. Bárbara Carolis atua de maneira estratégica nas relações de trabalho. Atendemos profissionais e organizações em reclamatórias trabalhistas, rescisões indiretas por falta grave do empregador, recuperação de verbas rescisórias em atraso, equiparação salarial, horas extras, assédio moral e consultoria preventiva contínua para mitigação de passivos trabalhistas.",
    topics: [
      "Reclamatórias trabalhistas e rescisões indiretas",
      "Cobrança de horas extras, adicionais e verbas rescisórias",
      "Indenizações por assédio moral e acidente de trabalho",
      "Consultoria preventiva e auditoria de conformidade para empresas",
    ],
    whatsAppText:
      "Olá, Dra. Bárbara Carolis. Gostaria de uma consulta jurídica especializada em Direito do Trabalho.",
  },
  {
    id: "digital-propriedade",
    title: "Direito Digital & Marcas (INPI)",
    icon: ShieldCheck,
    tag: "Inovação & Ativos",
    summary:
      "Registro e proteção de marcas no INPI, conformidade com a LGPD, contratos de tecnologia e proteção contra crimes virtuais.",
    details:
      "Em um ecossistema digital dinâmico, proteger os ativos intangíveis da sua empresa é essencial. Especialista em Direito Digital pelo Damásio Educacional, a Dra. Bárbara atua com excelência no registro de marcas, patentes e programas de computador no INPI, auditoria e implementação da LGPD, contratos de software e defesa técnica em fraudes eletrônicas e crimes cibernéticos.",
    topics: [
      "Registro de marcas, patentes e softwares no INPI",
      "Adequação e auditoria jurídica à LGPD",
      "Contratos de tecnologia, licenciamento e SaaS",
      "Defesa contra golpes digitais, invasões e vazamento de dados",
    ],
    whatsAppText:
      "Olá, Dra. Bárbara Carolis. Gostaria de orientações sobre Direito Digital e Registro de Marcas no INPI.",
  },
  {
    id: "civel-contratos",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Segurança Patrimonial",
    summary:
      "Elaboração minuciosa de contratos, auditoria preventiva, reparações civis por danos e disputas patrimoniais complexas.",
    details:
      "Segurança jurídica sólida para relações pessoais e negócios. Atuação na elaboração e revisão minuciosa de contratos civis e comerciais blindados, cobranças e execuções judiciais de títulos, indenizações por danos materiais e morais, rescisões contratuais e resolução de litígios patrimoniais com foco em eficiência e prevenção de riscos.",
    topics: [
      "Elaboração e revisão estratégica de contratos civis e comerciais",
      "Ações de cobrança, execuções de dívidas e recuperação de crédito",
      "Ações indenizatórias por danos morais e materiais",
      "Rescisões contratuais e defesas patrimoniais",
    ],
    whatsAppText:
      "Olá, Dra. Bárbara Carolis. Gostaria de uma consulta especializada em Direito Cível e Contratos.",
  },
  {
    id: "consumidor-transito",
    title: "Consumidor & Trânsito Especializado",
    icon: Landmark,
    tag: "Defesa Intransigente",
    summary:
      "Combate incisivo a fraudes e abusos bancários, negativações indevidas e recursos especializados em Direito de Trânsito.",
    details:
      "Proteção rigorosa contra práticas abusivas do mercado de consumo: empréstimos consignados não autorizados, negativações indevidas em órgãos de proteção ao crédito (SPC/Serasa) e cobranças ilegais. No Direito de Trânsito, atuação técnica em defesas e recursos contra suspensão ou cassação da CNH e infrações administrativas.",
    topics: [
      "Fraudes financeiras, golpes bancários e cobranças indevidas",
      "Indenizações por negativação indevida no SPC/Serasa",
      "Recursos contra suspensão e cassação da Carteira de Habilitação (CNH)",
      "Defesa especializada contra multas e penalidades de trânsito",
    ],
    whatsAppText:
      "Olá, Dra. Bárbara Carolis. Gostaria de orientações em Direito do Consumidor ou Trânsito.",
  },
  {
    id: "familia-sucessoes",
    title: "Família & Sucessões",
    icon: HeartHandshake,
    tag: "Atendimento Humanizado",
    summary:
      "Condução sensível, técnica e discreta em inventários judiciais e extrajudiciais, divórcios e partilhas de bens.",
    details:
      "As questões de família e sucessões exigem o equilíbrio perfeito entre firmeza técnica e acolhimento humano. Atuamos com celeridade em inventários e partilhas extrajudiciais em cartório, divórcios consensuais e litigiosos, guarda e regime de convivência de filhos, pensão alimentícia e planejamento sucessório patrimonial.",
    topics: [
      "Inventários judiciais e extrajudiciais ágeis em cartório",
      "Divórcio consensual e litigioso com partilha patrimonial",
      "Pensão alimentícia, guarda e convivência parental",
      "Planejamento sucessório e proteção de bens da família",
    ],
    whatsAppText:
      "Olá, Dra. Bárbara Carolis. Gostaria de uma consulta em Direito de Família e Sucessões.",
  },
];

const clientReviews = [
  {
    name: "Felipe Rodrigues",
    reviewsCount: "3 avaliações",
    date: "Há 3 anos",
    highlight: "Atendimento impecável! Técnico e humanizado",
    content:
      "Atendimento impecável! Técnico e humanizado! Me fez entender com facilidade todos os passos legais do meu processo. Dra Bárbara está super recomendada!",
  },
  {
    name: "Marcos A R Santos",
    reviewsCount: "4 avaliações",
    date: "Há 3 anos",
    highlight: "Empatia e profundo conhecimento das leis",
    content:
      "Profissional muito competente. Sempre empatica com seu cliente e conhece bem as leis das áreas que atua. Além de ser uma pessoa maravilhosa. ❤️",
  },
  {
    name: "Lucas Kaue",
    reviewsCount: "5 avaliações · 4 fotos",
    date: "Há 3 anos",
    highlight: "Extremamente capacitada e comprometida",
    content:
      "Excelente profissional, extremamente capacitada e comprometida com as causas.",
  },
  {
    name: "Bruna Martins",
    reviewsCount: "3 avaliações",
    date: "Há 3 anos",
    highlight: "Atualizada, disponível e preocupada em resolver",
    content:
      "Excelente profissional. Atualizada, disponível e preocupada em resolver o problema. Indico!",
  },
  {
    name: "Pauline Arantes Ribeiro",
    reviewsCount: "5 avaliações",
    date: "Há 2 anos",
    highlight: "Dedicada, ética e responsável. Indico de olhos fechados!",
    content:
      "Excelente profissional! Dedicada, ética e responsável. Indico de olhos fechados!",
  },
  {
    name: "Jeser Giffoni Cruz",
    reviewsCount: "6 avaliações",
    date: "Há 3 anos",
    highlight: "Atendimento esclarecedor e transparente",
    content:
      "Dra Bárbara me prestou um excelente atendimento, muito esclarecedora e transparente , recomendo de olhos fechados !",
  },
  {
    name: "Ana Paula Miranda",
    reviewsCount: "10 avaliações · 3 fotos",
    date: "Há 3 anos",
    highlight: "Total confiança, competência e atenção",
    content:
      "Advogada extremamente profissional, competente e atenciosa! Me passou total confiança. Recomendo!",
  },
  {
    name: "Mayumi Yukuhiro",
    reviewsCount: "9 avaliações",
    date: "Há 3 anos",
    highlight: "Super atenciosa, amei muito o trabalho",
    content:
      "Super atenciosa! Melhor advogada, sério. Amei muito o trabalho dela! ❤️",
  },
  {
    name: "Anjo Acolhedor",
    reviewsCount: "1 avaliação",
    date: "Há 3 anos",
    highlight: "Excelência e presteza nas resoluções",
    content:
      "Excelencia no atendimento, presteza com o cliente, competência nas resoluções das ações que foram confiadas!",
  },
  {
    name: "Luana de Azevedo",
    reviewsCount: "4 avaliações · 1 foto",
    date: "Há 3 anos",
    highlight: "Atendimento excelente e atenção redobrada",
    content:
      "Atendimento excelente! Profissional extremamente atenciosa!",
  },
  {
    name: "Nayara Esper",
    reviewsCount: "7 avaliações",
    date: "Há 2 anos",
    highlight: "Super atenciosa e humana, não mede esforços",
    content:
      "Advogada maravilhosa! Super atenciosa e humana! Não mede esforços para ajudar!",
  },
  {
    name: "Raissa Diniz Marinho",
    reviewsCount: "9 avaliações · 1 foto",
    date: "Há 3 anos",
    highlight: "Responsável, atenciosa e muito competente",
    content:
      "Ótima advogada, responsável, atenciosa e muito competente! Recomendo.",
  },
  {
    name: "Carlos Santos",
    reviewsCount: "4 avaliações · 9 fotos",
    date: "Há 3 anos",
    highlight: "Excelente profissional e muito atenciosa",
    content: "Excelente profissional e muito atenciosa.",
  },
  {
    name: "Thayane Joanny",
    reviewsCount: "1 avaliação",
    date: "Há 3 anos",
    highlight: "Uma das melhores advogadas de Itajubá",
    content:
      "Sem dúvida uma das melhores advogadas de Itajubá! Recomendo de olhos fechados.",
  },
  {
    name: "Breno LLS",
    reviewsCount: "7 avaliações · 7 fotos",
    date: "Há 3 anos",
    highlight: "Estudiosa, persistente, transparente e CORRETA!",
    content:
      "Top!!! Estudiosa, persistente, transparente e principalmente CORRETA!!!",
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
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
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
      <main className="overflow-hidden bg-ivory text-ink">
        {/* Navigation Bar - Petrol Navy with Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-800/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[98px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Bárbara Carolis Advogados — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95"
            >
              <Image
                src="/logo sem fundo.png"
                width={500}
                height={167}
                alt="Bárbara Carolis Advogados — OAB/MG 168.000"
                priority
                className="h-12 w-auto object-contain sm:h-14 drop-shadow-[0_2px_12px_rgba(223,169,56,0.2)]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300" href="#inicio">
                Início
              </a>
              <a className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300" href="#sobre">
                A Advogada
              </a>
              <a className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300" href="#compromisso">
                Diferenciais
              </a>
              <a className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300" href="#avaliacoes">
                Avaliações (5.0 ★)
              </a>
              <a className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-gold-300" href="#contato">
                Contato
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Bárbara Carolis"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-gold-300 transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn da Dra. Bárbara Carolis"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-gold-300 transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200"
              >
                <LinkedInIcon size={15} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-full shadow-md"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
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
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais & Método", "#compromisso"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Localização", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-white/80 hover:text-gold-300"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-brand-950 shadow-md transition-all hover:brightness-105"
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

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          {/* Subtle Ambient Glows with Petrol and Gold Accents */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-gold-200/25 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="eyebrow mb-6">
                <span className="size-2 rounded-full bg-brand-700" />
                OAB/MG 168.000 · Centro, Itajubá - MG · Atendimento Brasil
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.2rem] leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.75rem]"
              >
                Defesa jurídica de alto padrão com{" "}
                <span className="italic text-brand-700 font-serif">
                  rigor técnico
                </span>{" "}
                e dedicação artesanal.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Conduzida pela <strong className="text-ink font-semibold">Dra. Bárbara Carolis</strong> (OAB/MG 168.000), especialista em Direito do Trabalho e Direito Digital. Atuação ética, transparente e resolutiva para resguardar seu patrimônio e seus direitos fundamentais — atendimento presencial no Centro de Itajubá e on-line em todo o país.
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
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar com a Dra. Bárbara
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-gold-500 text-gold-500" />{" "}
                  5,0 estrelas no Google (44 avaliações unânimes)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={16} className="text-brand-700" /> Especialista pelo
                  Damásio Educacional
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Av. Cel.
                  Carneiro Júnior, 57 · Itajubá
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-2"
            >
              {/* Outer decorative gold border */}
              <div className="absolute -inset-3 -rotate-2 rounded-[46%_46%_5%_5%] border border-gold-500/35 sm:-inset-4" />

              {/* Main portrait */}
              <div className="relative aspect-[0.82] overflow-hidden rounded-[46%_46%_5%_5%] bg-[#ded7d0] shadow-card">
                <Image
                  src="/imgi_7_813101487_18628558288036257_5729430727166619910_n.jpg"
                  alt="Dra. Bárbara Carolis Lima Diniz — Advogada OAB/MG 168.000"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950/90 via-brand-950/45 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Bárbara Carolis
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-300">
                      OAB/MG 168.000 · Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-400/40 bg-brand-950/60 text-gold-300 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-[14%] rounded-full border border-brand-700/20 bg-ivory px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-card sm:-left-9 sm:px-5">
                ATENDIMENTO HUMANIZADO
              </div>

              <div className="absolute -right-3 bottom-[22%] rounded-2xl border border-gold-500/30 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-right-8">
                <div className="flex items-center gap-2 text-gold-500">
                  <Star size={14} className="fill-gold-500" />
                  <span className="font-serif text-lg font-bold text-ink">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-soft">
                  44 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-ink/10 bg-white/70"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "classificação máxima com 44 avaliações unânimes no Google"],
              ["OAB/MG", "nº 168.000 com sólida e reconhecida trajetória"],
              ["Especialista", "Direito do Trabalho e Direito Digital (Damásio)"],
              ["Itajubá & Brasil", "atendimento presencial no Centro e 100% on-line"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-3xl font-semibold text-brand-700">
                  {value}
                </span>
                <span className="max-w-[155px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Bárbara Carolis */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Visual presentation of Dra. Bárbara */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[520px]"
            >
              {/* Primary portrait */}
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2px] bg-[#ded7d0] shadow-card">
                <Image
                  src="/imgi_53_816737078_18628558291036257_752521829256015605_n.jpg"
                  alt="Dra. Bárbara Carolis — Advogada e Especialista em Direito do Trabalho e Direito Digital"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_20%]"
                />
              </div>

              {/* Authority card with speaking photo */}
              <div className="absolute -bottom-10 right-2 max-w-[300px] border-l-2 border-brand-700 bg-ivory p-4 shadow-card sm:-right-6 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-gold-500/40">
                    <Image
                      src="/imgi_6_658133991_18575277415036257_9164826257039688827_n.jpg"
                      alt="Dra. Bárbara Carolis em palestra jurídica"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-700">
                      Presença & Palestras
                    </p>
                    <p className="font-serif text-sm font-semibold text-ink leading-tight">
                      Voz ativa e atuação institucional
                    </p>
                  </div>
                </div>
                <p className="mt-2.5 text-[11px] leading-4 text-ink-soft">
                  Compromisso contínuo com a evolução do Direito e a defesa firme de causas com rigor e ética.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                TRAJETÓRIA, RIGOR E HUMANIZAÇÃO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Uma advocacia pautada na{" "}
                <span className="italic text-brand-700">
                  escuta empática
                </span>{" "}
                e na combatividade técnica.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                A <strong className="text-ink font-semibold">Dra. Bárbara Carolis Lima Diniz (OAB/MG 168.000)</strong> é graduada em Direito pelo Centro Universitário Salesiano de São Paulo (UNISAL) e pós-graduada com especializações em <strong className="text-ink">Direito do Trabalho</strong> e <strong className="text-ink">Direito Digital</strong> pelo prestigiado Damásio Educacional.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com escritório sediado no coração de Itajubá - MG, sua prática profissional se destaca pelo atendimento próximo, minucioso e descomplicado. Cada cliente é acolhido com atenção pessoal, sem modelos genéricos, com explicações claras sobre cada passo do processo e total transparência sobre riscos e estratégias.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Estudo artesanal de cada linha do processo</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Transparência radical em todas as etapas</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Especialização contínua e atualização jurídica</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Sede em Itajubá e atendimento digital nacional</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Bárbara Carolis. Gostaria de entender como seu escritório pode atuar no meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Agendar consulta com a Dra. Bárbara
                </GlowingButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-800 hover:text-brand-700 transition-colors"
                >
                  <InstagramIcon size={16} /> Seguir no Instagram
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
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
                description="Conhecimento técnico aprofundado para resguardar seus direitos trabalhistas, negócios, marcas e patrimônio."
              >
                Segurança jurídica e assertividade nos{" "}
                <span className="italic text-brand-700">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma área para ver os detalhes e consultar diretamente a Dra. Bárbara Carolis.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-gold-600/70">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-700 cursor-pointer"
                    >
                      Ver detalhes e tópicos{" "}
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

        {/* Diferenciais / Nosso Compromisso */}
        <section
          id="compromisso"
          className="relative overflow-hidden bg-brand-900 py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-gold-500/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
              light
              description="A condução de cada caso com a máxima técnica, transparência irrestrita e respeito ao tempo e aos anseios de quem nos procura."
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
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Atendimento Técnico & Humanizado",
                  "Tratamos cada cliente com empatia genuína, atenção integral e paciência para esclarecer dúvidas em linguagem acessível e acolhedora.",
                ],
                [
                  "02",
                  "Transparência e Comunicação Ativa",
                  "Você é mantido informado sobre cada movimentação em tempo real, compreendendo com clareza os passos jurídicos, as chances reais e as estratégias adotadas.",
                ],
                [
                  "03",
                  "Dedicação Artesanal Sem Modelos Prontos",
                  "Lemos cada documento com extremo critério e elaboramos peças customizadas, aliando doutrina atualizada e jurisprudência combativa para buscar o melhor resultado.",
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

        {/* Avaliações no Google (Depoimentos Reais Fornecidos) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação sólida da Dra. Bárbara Carolis é comprovada pelo reconhecimento de quem confiou seu processo ao escritório. Confira depoimentos autênticos no Google Maps."
                >
                  Confiança atestada por quem{" "}
                  <span className="italic text-brand-700">
                    vivenciou nosso atendimento.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-gold-500 pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:text-brand-700"
                  >
                    Ver perfil e avaliações no Google <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights tags directly from client google data */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Atenciosa (8 menções)",
                    "Transparente",
                    "Dedicada",
                    "Responsável",
                    "Ética e Correta",
                    "Atendimento Humanizado",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ivory px-3.5 py-1.5 text-[11px] font-medium text-ink-soft"
                    >
                      <CheckCircle2 size={13} className="text-brand-700" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-gold-400/30 bg-ivory p-8 shadow-card sm:p-10">
                <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-700/10" />
                <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-700/10" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div className="flex gap-1 text-gold-500" aria-label="5 estrelas de 5">
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
                    <span className="font-serif text-7xl font-normal leading-none text-ink sm:text-8xl">
                      5,0
                    </span>
                    <p className="mt-2 text-xs font-semibold text-brand-800">
                      Excelente · Classificação Máxima Unânime
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-serif text-3xl font-semibold text-brand-700">
                      44 avaliações
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">
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
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card"
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

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
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
                  className="flex flex-col justify-between border border-ink/10 bg-ivory/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card"
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

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
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
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card"
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

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
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

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & LOCALIZAÇÃO"
                description="Agende sua consulta presencial no Centro de Itajubá ou realize seu atendimento de forma totalmente on-line com sigilo e segurança."
              >
                Estamos prontos para{" "}
                <span className="italic text-brand-700">ouvir sua causa.</span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Atendimento direto e retorno com presteza:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-700" />
                  <span>Segunda a Sexta: 09h às 18h (sob agendamento prévio)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-700" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-700" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700 transition-colors"
                  >
                    @bcarolis
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedInIcon size={16} />
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700 transition-colors"
                  >
                    LinkedIn: Bárbara Carolis
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10 shadow-card">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-brand-700" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Itajubá · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                <strong className="text-ink font-semibold">
                  Almeida & Carolis Advogados Associados
                </strong>
                <br />
                Avenida Coronel Carneiro Júnior, 57 - Sala 1004 (10º andar)
                <br />
                Centro, Itajubá - MG, CEP 37500-018, Brasil
              </address>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Atendimento presencial no Centro e on-line em todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="bg-brand-800 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                BÁRBARA CAROLIS ADVOGADOS · OAB/MG 168.000
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
                Pronto para resguardar seus direitos com quem realmente se dedica
                à sua causa?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Bárbara. Gostaria de agendar uma consulta inicial para avaliar minha situação."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950 shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex rounded-sm bg-brand-900/80 border border-white/10 p-3.5 shadow-md">
                <Image
                  src="/logo sem fundo.png"
                  width={450}
                  height={150}
                  alt="Bárbara Carolis Advogados"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/65">
                Advocacia estratégica, rigor técnico e atendimento dedicado. Sede
                no Centro de Itajubá - MG e atendimento digital seguro para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-gold-300">
                Inscrição OAB/MG 168.000
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada & Trajetória
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#compromisso">
                  Diferenciais & Método
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Localização
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
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
                  <InstagramIcon size={15} /> Instagram: @bcarolis
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <LinkedInIcon size={15} /> LinkedIn: Bárbara Carolis
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" />
                  <span>Av. Cel. Carneiro Júnior, 57 - Sl 1004, Centro, Itajubá - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Dra. Bárbara Carolis Lima Diniz (OAB/MG 168.000). Todos os direitos reservados.
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
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink/10 bg-ivory p-7 shadow-2xl sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-700 hover:text-brand-700 cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800">
                    Principais demandas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 rounded-full bg-brand-700 shrink-0" />
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
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-ink-soft hover:text-ink transition-colors cursor-pointer"
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
            aria-label="Falar no WhatsApp com a Dra. Bárbara Carolis"
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

"use client";
import { useState } from "react";
import { Coffee, Clock, MapPin, Phone, Circle as Instagram, Star, ArrowUpRight, CupSoda, Cake, Sandwich, Menu, X } from "lucide-react";

const MENU = [
  { icon: Coffee, title: "Кофе с собой", desc: "Латте, капучино, айс-кофе, бабл-кофе" },
  { icon: CupSoda, title: "Напитки", desc: "Bubble Tea, смузи, лимонады, свежевыжатые соки" },
  { icon: Cake, title: "Десерты", desc: "Моти, меренговые рулеты, дубайский шоколад, торты на заказ" },
  { icon: Sandwich, title: "Сэндвичи и пончики", desc: "Свежая выпечка и сытные перекусы навынос" },
];

const GALLERY = [
  { src: "/uploads/url-asset-35f979279b3b.jpg", alt: "Прозрачный стакан с темным ягодным напитком, кусочками апельсина и льдом на деревянной доске" },
  { src: "/uploads/url-asset-b12a8f0a0894.jpg", alt: "Черная чашка кофе с латте-артом в окружении круассанов, макарунов и десертов" },
  { src: "/uploads/url-asset-e8a699897bcc.jpg", alt: "Пластиковый стакан с кофейным коктейлем, шоколадным сиропом и логотипом ZARAD COFFEE" },
  { src: "/uploads/url-asset-4d1cc148d2d8.jpg", alt: "Белая чашка кофе с узором на блюдце рядом с круассаном и пончиком" },
  { src: "/uploads/url-asset-7154fea9cba4.jpg", alt: "Деревянная подставка с четырьмя маленькими стаканами разных напитков на фоне витрины" },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#menu", label: "Меню" },
    { href: "#gallery", label: "Атмосфера" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f6efe6] text-[#2b1d14] font-[Onest,sans-serif]">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=Onest:wght@400;500;600&display=swap&subset=cyrillic" />

      <header className="sticky top-0 z-40 bg-[#f6efe6]/90 backdrop-blur border-b border-[#2b1d14]/10">
        <div className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="font-[Unbounded] text-lg tracking-tight">ZARЯD <span className="text-[#b4532a]">Coffee</span></a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-[#b4532a] transition-colors">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+77052597277" className="hidden sm:flex items-center gap-2 text-sm font-semibold bg-[#2b1d14] text-[#f6efe6] px-4 py-2 rounded-full hover:bg-[#b4532a] transition-colors">
              <Phone size={15} /> +7 705 259 72 77
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Меню">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-5 pb-4 flex flex-col gap-3 text-sm font-medium">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          </div>
        )}
      </header>

      <section id="top" className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#2b1d14]/5 px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
            <Star size={13} className="fill-[#b4532a] text-[#b4532a]" /> 4.9 · 650 оценок · 209 отзывов
          </div>
          <h1 className="font-[Unbounded] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Насладись ароматным кофе в нашей уютной кофейне
          </h1>
          <p className="mt-6 text-[#2b1d14]/70 text-lg max-w-lg">
            Спешелти-кофе, десерты и напитки навынос в Атырау. Работаем круглосуточно — заходите в любое время.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 bg-[#b4532a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2b1d14] transition-colors">
              Смотреть меню <ArrowUpRight size={16} />
            </a>
            <a href="https://wa.me/77052597277" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#2b1d14]/20 px-6 py-3 rounded-full font-semibold hover:border-[#b4532a] hover:text-[#b4532a] transition-colors">
              Написать в WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#2b1d14]/70">
            <span className="flex items-center gap-2"><Clock size={15} /> Круглосуточно</span>
            <span className="flex items-center gap-2"><MapPin size={15} /> ул. Бактыгерея Кулманова, 111/4</span>
          </div>
        </div>
        <div className="relative">
          <img src="/uploads/url-asset-35f979279b3b.jpg" alt="Прозрачный стакан с темным ягодным напитком, кусочками апельсина и льдом на деревянной доске" className="w-full h-[420px] sm:h-[520px] object-cover rounded-[2rem] shadow-xl" />
          <div className="absolute bottom-5 left-5 bg-[#f6efe6] px-4 py-2 rounded-full text-xs font-semibold shadow">Чек ~1200 ₸</div>
        </div>
      </section>

      <section id="menu" className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 py-16 border-t border-[#2b1d14]/10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="font-[Unbounded] text-3xl sm:text-4xl tracking-tight">Что у нас есть</h2>
          <p className="text-[#2b1d14]/60 max-w-sm text-sm">Заказ навынос · Наличный расчёт · Оплата через банк и по QR-коду</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MENU.map((m) => (
            <div key={m.title} className="bg-white/60 border border-[#2b1d14]/10 rounded-2xl p-6 hover:border-[#b4532a] transition-colors">
              <m.icon size={26} className="text-[#b4532a]" />
              <h3 className="font-[Unbounded] text-lg mt-4">{m.title}</h3>
              <p className="text-sm text-[#2b1d14]/65 mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 py-16 border-t border-[#2b1d14]/10">
        <h2 className="font-[Unbounded] text-3xl sm:text-4xl tracking-tight mb-10">Атмосфера и вкусы</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((g, i) => (
            <figure key={g.src} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <img src={g.src} alt={g.alt} className={`w-full object-cover rounded-2xl ${i === 0 ? "h-full min-h-[280px]" : "h-[200px]"}`} />
            </figure>
          ))}
        </div>
      </section>

      <section id="contacts" className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 py-16 border-t border-[#2b1d14]/10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-[Unbounded] text-3xl sm:text-4xl tracking-tight mb-6">Как нас найти</h2>
            <ul className="space-y-4 text-[#2b1d14]/80">
              <li className="flex gap-3"><MapPin size={18} className="text-[#b4532a] shrink-0 mt-0.5" /> г. Атырау, ул. Бактыгерея Кулманова, 111/4</li>
              <li className="flex gap-3"><Clock size={18} className="text-[#b4532a] shrink-0 mt-0.5" /> Ежедневно, круглосуточно (24/7)</li>
              <li className="flex gap-3"><Phone size={18} className="text-[#b4532a] shrink-0 mt-0.5" /> <a href="tel:+77052597277" className="hover:text-[#b4532a] transition-colors">+7 705 259 72 77</a></li>
              <li className="flex gap-3"><Instagram size={18} className="text-[#b4532a] shrink-0 mt-0.5" /> <a href="https://instagram.com/zaryadcoffee.atyrau" target="_blank" rel="noopener noreferrer" className="hover:text-[#b4532a] transition-colors">@zaryadcoffee.atyrau</a></li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://2gis.kz/atyrau/firm/70000001077730622/51.901552%2C47.107008?m=51.903482%2C47.106966%2F17.76%2Fp%2F43.67" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#2b1d14] text-[#f6efe6] px-6 py-3 rounded-full font-semibold hover:bg-[#b4532a] transition-colors">
                Построить маршрут <ArrowUpRight size={16} />
              </a>
              <a href="https://wa.me/77052597277" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#2b1d14]/20 px-6 py-3 rounded-full font-semibold hover:border-[#b4532a] hover:text-[#b4532a] transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
          <img src="/uploads/url-asset-7154fea9cba4.jpg" alt="Деревянная подставка с четырьмя маленькими стаканами разных напитков на фоне витрины" className="w-full h-[360px] object-cover rounded-[2rem]" />
        </div>
      </section>

      <footer className="w-full border-t border-[#2b1d14]/10 mt-8">
        <div className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-[#2b1d14]/60">
          <span className="font-[Unbounded] text-[#2b1d14]">ZARЯD Coffee · Атырау</span>
          <span>© {new Date().getFullYear()} · Кофейня и кондитерские изделия</span>
        </div>
      </footer>
    </div>
  );
}
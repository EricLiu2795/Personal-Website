"use client";

import { useRef, useState } from "react";
import type { Locale, PortfolioContent } from "@/lib/content";

type Props = {
  locale: Locale;
  labels: PortfolioContent["nav"];
  pagePrefix: string;
  englishHref: string;
  chineseHref: string;
  resumeHref: string;
};

export default function SiteNavigation({ locale, labels, pagePrefix, englishHref, chineseHref, resumeHref }: Props) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setOpen(false);
  const links = [...labels.items.map(item => ({ label: item.label, href: `${pagePrefix}/#${item.id}` })), { label: labels.resume, href: resumeHref }];

  return (
    <nav className="site-nav" aria-label={locale === "zh" ? "主导航" : "Primary navigation"} onKeyDown={event => { if (event.key === "Escape" && open) { closeMenu(); menuButton.current?.focus(); } }}>
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a href={locale === "zh" ? chineseHref : englishHref} className="shrink-0 font-serif text-lg tracking-[-0.02em]" onClick={closeMenu}>
          {locale === "zh" ? "刘" : "JL"}<span className="text-ember">.</span>
        </a>
        <div className="flex items-center gap-5 lg:gap-7">
          <div className="primary-nav-links hidden md:flex">
            {links.map(item => <a className="primary-nav-link" href={item.href} key={item.href}>{item.label}</a>)}
          </div>
          <div className="language-switcher" role="group" aria-label={labels.languageLabel}>
            <a href={englishHref} hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>{labels.english}</a>
            <span aria-hidden="true">/</span>
            <a href={chineseHref} hrefLang="zh-CN" lang="zh-CN" aria-current={locale === "zh" ? "page" : undefined}>{labels.chinese}</a>
          </div>
          <button ref={menuButton} type="button" className="menu-toggle md:hidden" aria-expanded={open} aria-controls={open ? "mobile-navigation" : undefined} onClick={() => setOpen(value => !value)}>
            {labels.menu}<span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-navigation" className="mobile-navigation md:hidden">
          {links.map(item => <a href={item.href} onClick={closeMenu} key={item.href}>{item.label}<span aria-hidden="true">↘</span></a>)}
        </div>
      )}
    </nav>
  );
}

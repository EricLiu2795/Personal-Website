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
export default function SiteNavigation({
  locale,
  labels,
  pagePrefix,
  englishHref,
  chineseHref,
  resumeHref,
}: Props) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setOpen(false);
  const links = [
    ...labels.items.map((item) => ({
      label: item.label,
      href: `${pagePrefix}/#${item.id}`,
    })),
    { label: labels.resume, href: resumeHref },
  ];
  return (
    <nav
      className="site-nav"
      aria-label={locale === "zh" ? "主导航" : "Primary navigation"}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
    >
      <div className="section-shell nav-inner">
        <a
          href={locale === "zh" ? chineseHref : englishHref}
          className="brand"
          aria-label={locale === "zh" ? "刘峻锟 · 首页" : "Junkun Liu · Home"}
          onClick={closeMenu}
        >
          <span aria-hidden="true">[</span>JL<span aria-hidden="true">]</span>
          <span className="brand-name">Junkun Liu</span>
        </a>
        <div className="primary-nav-links">
          {labels.items.map((item) => (
            <a
              className="primary-nav-link"
              href={`${pagePrefix}/#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <div
            className="language-switcher"
            role="group"
            aria-label={labels.languageLabel}
          >
            <a
              href={englishHref}
              hrefLang="en"
              lang="en"
              aria-current={locale === "en" ? "page" : undefined}
            >
              {labels.english}
            </a>
            <span aria-hidden="true">/</span>
            <a
              href={chineseHref}
              hrefLang="zh-CN"
              lang="zh-CN"
              aria-current={locale === "zh" ? "page" : undefined}
            >
              {labels.chinese}
            </a>
          </div>
          <a className="nav-contact" href={`${pagePrefix}/#contact`}>
            {labels.sayHello}
            <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {labels.menu}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className="mobile-navigation" hidden={!open}>
        {links.map((item) => (
          <a href={item.href} onClick={closeMenu} key={item.href}>
            {item.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
        <a href={`${pagePrefix}/#contact`} onClick={closeMenu}>
          {labels.sayHello}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}

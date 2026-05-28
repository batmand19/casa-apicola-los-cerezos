'use client';

import { useState, useEffect } from 'react';
import { trackClick, trackMobileMenu } from '@/lib/tracking';

const NAV_ITEMS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#historia', label: 'Historia' },
  { href: '#productos', label: 'Productos' },
  { href: '/blog', label: 'Blog' },
];

const HEADER_HEIGHT = 72;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, href, label) => {
    // Si es enlace externo (blog), dejar que navegue normalmente
    if (href.startsWith('/')) {
      trackClick(`nav_${label.toLowerCase()}`, href, { label });
      return; // Permitir navegación nativa
    }

    e.preventDefault();
    setIsMobileMenuOpen(false);
    trackClick(`nav_${label.toLowerCase()}`, href, { label });

    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    trackMobileMenu(newState ? 'open' : 'close');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero', 'Inicio')}
            className="flex items-center gap-2 group min-h-[44px] py-1"
            aria-label="Casa Apícola Los Cerezos - Ir al inicio"
          >
            <span className="text-2xl" aria-hidden="true">🍯</span>
            <span className="text-sm sm:text-base font-bold text-tierra-900 group-hover:text-miel-700 transition-colors leading-tight">
              Casa Apícola<br className="hidden sm:inline" />{' '}
              <span className="text-miel-700">Los Cerezos</span>
            </span>
          </a>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className="px-4 py-2 text-sm font-medium text-tierra-700 hover:text-miel-700 hover:bg-miel-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#productos"
              onClick={(e) => handleNavClick(e, '#productos', 'Productos')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-miel-600 hover:bg-miel-700 rounded-xl shadow-md shadow-miel-500/20 transition-all duration-200 min-h-[44px]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Comprar
            </a>
          </div>

          {/* Hamburguesa mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-tierra-700 hover:bg-miel-50 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100 bg-white/95 backdrop-blur-md border-t border-tierra-100 shadow-lg'
            : 'max-h-0 opacity-0'
        }`}
        role="navigation"
        aria-label="Menú de navegación móvil"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.label)}
              className="block px-4 py-3 text-base font-medium text-tierra-700 hover:text-miel-700 hover:bg-miel-50 rounded-xl transition-colors min-h-[48px] flex items-center"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#productos"
            onClick={(e) => handleNavClick(e, '#productos', 'Productos')}
            className="block px-4 py-3 text-base font-semibold text-white bg-miel-600 hover:bg-miel-700 rounded-xl transition-colors text-center mt-3 min-h-[48px] flex items-center justify-center"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </header>
  );
}

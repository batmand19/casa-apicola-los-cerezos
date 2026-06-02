'use client';

import { useState, useEffect } from 'react';
import { trackClick, trackMobileMenu } from '@/lib/tracking';
import { getCartCount } from '@/lib/cart';

const NAV_ITEMS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#historia', label: 'Historia' },
  { href: '#productos', label: 'Productos' },
  { href: '/blog', label: 'Blog' },
];

const HEADER_HEIGHT = 80;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const refresh = () => setCartCount(getCartCount());
    refresh();
    window.addEventListener('cart-updated', refresh);
    return () => window.removeEventListener('cart-updated', refresh);
  }, []);

  const handleNavClick = (e, href, label) => {
    if (href.startsWith('/')) { trackClick(`nav_${label.toLowerCase()}`, href, { label }); return; }
    e.preventDefault();
    setIsMobileMenuOpen(false);
    trackClick(`nav_${label.toLowerCase()}`, href, { label });
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    trackMobileMenu(next ? 'open' : 'close');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass shadow-lg shadow-black/[0.03]' : 'bg-transparent'}`} role="banner">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero', 'Inicio')} className="flex items-center gap-3 group min-h-[44px] py-1" aria-label="Casa Apícola Los Cerezos">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-honey-400 to-honey-600 flex items-center justify-center text-white text-lg shadow-md shadow-honey-500/20 group-hover:shadow-honey-500/40 transition-shadow duration-500">🍯</div>
            <div className="leading-tight">
              <span className={`block text-sm font-semibold tracking-wide transition-colors duration-500 ${isScrolled ? 'text-earth-800' : 'text-white'}`}>Casa Apícola</span>
              <span className={`block text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-500 ${isScrolled ? 'text-honey-600' : 'text-honey-300'}`}>Los Cerezos</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href, item.label)} className={`px-4 py-2 text-[13px] font-medium tracking-wide rounded-full transition-all duration-300 min-h-[44px] flex items-center ${isScrolled ? 'text-earth-600 hover:text-honey-600 hover:bg-honey-50' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-cart'))}
              className="relative w-10 h-10 flex items-center justify-center rounded-full transition-colors min-h-[44px]"
              aria-label={`Abrir carrito${cartCount > 0 ? `, ${cartCount} items` : ''}`}
            >
              <svg className={`w-5 h-5 transition-colors duration-300 ${isScrolled ? 'text-earth-600' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold text-white bg-honey-500 rounded-full shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
            <a href="#productos" onClick={(e) => handleNavClick(e, '#productos', 'Productos')} className={`px-6 py-2.5 text-[13px] font-semibold tracking-wide rounded-full transition-all duration-300 min-h-[44px] flex items-center ${isScrolled ? 'text-white bg-gradient-to-r from-honey-500 to-honey-600 hover:from-honey-600 hover:to-honey-700 shadow-md shadow-honey-500/20' : 'text-earth-800 bg-white/90 hover:bg-white shadow-md'}`}>
              Comprar
            </a>
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full transition-colors" aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''} ${isScrolled ? 'bg-earth-800' : 'bg-white'}`} />
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''} ${isScrolled ? 'bg-earth-800' : 'bg-white'}`} />
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''} ${isScrolled ? 'bg-earth-800' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass border-t border-white/10 shadow-xl">
          <nav className="max-w-7xl mx-auto px-5 py-6 space-y-1" aria-label="Menú móvil">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href, item.label)} className="block px-4 py-3.5 text-base font-medium text-earth-700 hover:text-honey-600 hover:bg-honey-50 rounded-xl transition-all duration-300 min-h-[48px] flex items-center">
                {item.label}
              </a>
            ))}
            <a href="#productos" onClick={(e) => { handleNavClick(e, '#productos', 'Productos'); setIsMobileMenuOpen(false); }} className="block px-4 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-honey-500 to-honey-600 rounded-xl text-center mt-3 min-h-[48px] flex items-center justify-center">
              Comprar ahora
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

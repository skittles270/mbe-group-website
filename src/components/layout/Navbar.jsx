import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { Menu, X, Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const navLinks = [
  { key: 'home', path: '/Home' },
  { key: 'about', path: '/About' },
  { key: 'brands', path: '/Brands' },
  { key: 'advantages', path: '/Advantages' },
  { key: 'contact', path: '/Contact' },
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'tr', label: 'Türkçe' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/Home" className="flex items-center"><img src="https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/5611e2570_MBE_Group_Logo-removebg-preview.png" alt="MBE Group" className="h-8 w-auto" /></Link>
        <div className="hidden md:flex items-center gap-1">{navLinks.map(({ key, path }) => { const isActive = location.pathname === path; return (<Link key={key} to={path} onClick={() => window.scrollTo(0, 0)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-foreground bg-secondary' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}>{t.nav[key]}</Link>); })}</div>
        <div className="hidden md:flex items-center gap-3"><DropdownMenu><DropdownMenuTrigger asChild><button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors hover:bg-secondary/50"><Globe className="w-4 h-4" />{languages.find(l => l.code === lang)?.label}</button></DropdownMenuTrigger><DropdownMenuContent align="end">{languages.map(({ code, label }) => (<DropdownMenuItem key={code} onClick={() => setLang(code)}><span className="flex items-center gap-2">{label}{lang === code && <Check className="w-4 h-4" />}</span></DropdownMenuItem>))}</DropdownMenuContent></DropdownMenu><Link to="/Contact" onClick={() => window.scrollTo(0, 0)}><Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">{t.hero.cta}</Button></Link></div>
        <div className="flex md:hidden items-center gap-2"><DropdownMenu><DropdownMenuTrigger asChild><button className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-muted-foreground border border-border rounded-lg"><Globe className="w-4 h-4" /></button></DropdownMenuTrigger><DropdownMenuContent align="end">{languages.map(({ code, label }) => (<DropdownMenuItem key={code} onClick={() => setLang(code)}><span className="flex items-center gap-2">{label}{lang === code && <Check className="w-4 h-4" />}</span></DropdownMenuItem>))}</DropdownMenuContent></DropdownMenu><button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">{mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button></div>
      </div>
      <AnimatePresence>{mobileOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background border-b border-border overflow-hidden"><div className="px-6 py-4 space-y-1">{navLinks.map(({ key, path }) => (<Link key={key} to={path} onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} className="block px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">{t.nav[key]}</Link>))}<Link to="/Contact" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}><Button className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">{t.hero.cta}</Button></Link></div></motion.div>)}</AnimatePresence>
    </nav>
  );
}
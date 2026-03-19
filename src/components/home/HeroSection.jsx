import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/851bb1d7a_ge1.png')", filter: 'blur(5px)', transform: 'scale(1.05)' }} />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto">{t.hero.title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">{t.hero.subtitle}</motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/Contact" onClick={() => window.scrollTo(0, 0)}><Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12 text-base">{t.hero.cta}<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
          <Link to="/About" onClick={() => window.scrollTo(0, 0)}><Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium">{t.hero.learnMore}</Button></Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-20"><ChevronDown className="w-5 h-5 text-muted-foreground/50 mx-auto animate-bounce" /></motion.div>
      </div>
    </section>
  );
}
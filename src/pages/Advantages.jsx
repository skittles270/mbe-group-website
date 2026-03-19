import { useLanguage } from '@/lib/i18n';
import SectionLabel from '@/components/shared/SectionLabel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Clock, Globe, Store, Megaphone, Container, ArrowRight } from 'lucide-react';

const icons = [Zap, Clock, Globe, Store, Megaphone, Container];

export default function Advantages() {
  const { t } = useLanguage();
  return (
    <section className="py-24"><div className="max-w-7xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20"><SectionLabel>{t.advantages.sectionLabel}</SectionLabel><h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{t.advantages.title}</h1><p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">{t.advantages.subtitle}</p></motion.div><div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">{t.advantages.items.map((item, i) => { const Icon = icons[i]; return (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl"><div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-12 translate-x-12 group-hover:bg-accent/10 transition-colors" /><div className="relative"><div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-accent" /></div><h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.description}</p></div></motion.div>); })}</div><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center"><div className="bg-primary rounded-2xl p-12 text-center"><h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">{t.contact.title}</h2><p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">{t.contact.subtitle}</p><Link to="/Contact" onClick={() => window.scrollTo(0, 0)}><Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">{t.hero.cta}<ArrowRight className="w-4 h-4 ml-2" /></Button></Link></div></motion.div></div></section>
  );
}
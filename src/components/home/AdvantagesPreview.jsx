import { useLanguage } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import SectionLabel from '@/components/shared/SectionLabel';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Zap, Clock, Globe, Store, Megaphone, Container } from 'lucide-react';

const icons = [Zap, Clock, Globe, Store, Megaphone, Container];

export default function AdvantagesPreview() {
  const { t } = useLanguage();
  return (
    <section className="py-24"><div className="max-w-7xl mx-auto px-6"><div className="text-center mb-16"><SectionLabel>{t.advantages.sectionLabel}</SectionLabel><h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{t.advantages.title}</h2><p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t.advantages.subtitle}</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{t.advantages.items.map((item, i) => { const Icon = icons[i]; return (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"><div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"><Icon className="w-5 h-5 text-accent" /></div><h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></motion.div>); })}</div><div className="text-center mt-12"><Link to="/Advantages" onClick={() => window.scrollTo(0, 0)}><Button variant="outline" size="lg" className="font-medium">{t.hero.learnMore}</Button></Link></div></div></section>
  );
}
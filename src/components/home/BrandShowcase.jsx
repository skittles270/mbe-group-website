import { useLanguage } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import SectionLabel from '@/components/shared/SectionLabel';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const brands = [
  { name: 'oToMUNICH', accent: 'from-amber-400 to-orange-500', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/6ec1e0082_oToMunich-removebg-preview.png' },
  { name: 'LastWerk', accent: 'from-slate-500 to-slate-700', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/2743bf315_LastWerk_Logo__1_-removebg-preview.png' },
  { name: 'ROASTLY', accent: 'from-amber-700 to-amber-900', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/e4b3a8fbd_Roastlylogo-removebg-preview.png' },
  { name: 'Portal.', accent: 'from-blue-400 to-indigo-600', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/971286edc_EM500000019233142-removebg-preview.png', invert: true },
  { name: 'Freeze.', accent: 'from-cyan-300 to-blue-500', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/d85eaed9a_IMG_8746-removebg-preview.png' },
  { name: 'MobiHero', accent: 'from-blue-600 to-blue-800', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/4e4cb2bf9_MobiHero-5.png' },
];

export default function BrandShowcase() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-secondary/30"><div className="max-w-7xl mx-auto px-6"><div className="text-center mb-16"><SectionLabel>{t.brands.sectionLabel}</SectionLabel><h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{t.brands.title}</h2><p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t.brands.subtitle}</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">{brands.map((brand, i) => (<motion.div key={brand.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}><Link to={`/Brands#${encodeURIComponent(brand.name)}`} className="group block"><div className="relative overflow-hidden rounded-xl bg-card border border-border p-6 h-48 flex flex-col justify-between hover:border-accent/30 transition-all duration-300 hover:shadow-lg"><div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${brand.accent} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:opacity-20 transition-opacity`} /><div className="flex-1 flex items-center justify-center"><img src={brand.logo} alt={brand.name} className={`max-h-16 max-w-full object-contain${brand.invert ? ' invert' : ''}`} /></div><div className="flex items-center justify-between"><p className="text-xs text-muted-foreground leading-relaxed">{t.brandDescriptions[brand.name]}</p><ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors ml-2 shrink-0" /></div></div></Link></motion.div>))}</div></div></section>
  );
}
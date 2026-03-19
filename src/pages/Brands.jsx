import { useLanguage } from '@/lib/i18n';
import SectionLabel from '@/components/shared/SectionLabel';
import { motion } from 'framer-motion';
import BrandCard from '@/components/brands/BrandCard';

const brandsData = [
  { name: 'oToMUNICH', bgGradient: 'from-amber-50 to-orange-50', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/6ec1e0082_oToMunich-removebg-preview.png' },
  { name: 'LastWerk', bgGradient: 'from-slate-50 to-gray-100', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/2743bf315_LastWerk_Logo__1_-removebg-preview.png' },
  { name: 'ROASTLY', bgGradient: 'from-amber-50 to-yellow-50', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/e4b3a8fbd_Roastlylogo-removebg-preview.png' },
  { name: 'Portal.', bgGradient: 'from-blue-50 to-indigo-50', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/971286edc_EM500000019233142-removebg-preview.png', invert: true },
  { name: 'Freeze.', bgGradient: 'from-cyan-50 to-blue-50', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/d85eaed9a_IMG_8746-removebg-preview.png' },
  { name: 'MobiHero', bgGradient: 'from-blue-50 to-indigo-100', logo: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/4e4cb2bf9_MobiHero-5.png' },
];

export default function Brands() {
  const { t } = useLanguage();
  return (
    <section className="py-24"><div className="max-w-7xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20"><SectionLabel>{t.brands.sectionLabel}</SectionLabel><h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{t.brands.title}</h1><p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">{t.brands.subtitle}</p></motion.div><div className="space-y-6">{brandsData.map((brand, i) => (<BrandCard key={brand.name} brand={brand} description={t.brandDescriptions[brand.name]} delay={i * 0.1} />))}</div></div></section>
  );
}
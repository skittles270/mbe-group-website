import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const brandDetailsTpl = {
  oToMUNICH: (t) => ({ description: t.brandDetails.oToMUNICH.description, products: [{ name: t.brandDetails.oToMUNICH.bestSeller, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/93c42d04e_IMG_8059.jpg' },{ name: t.brandDetails.oToMUNICH.inStore, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/2d91f2a2f_IMG_1154.jpg' }] }),
  LastWerk: (t) => ({ description: t.brandDetails.LastWerk.description, products: [{ name: t.brandDetails.LastWerk.bestSeller, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/1cef5e712_AltCoverPU.jpg', contain: true },{ name: t.brandDetails.LastWerk.warehouse, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/f2cc89206_IMG_1124.jpg' }] }),
  ROASTLY: (t) => ({ description: t.brandDetails.ROASTLY.description, products: [{ name: t.brandDetails.ROASTLY.bestSeller, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/6f68c6047_GEM.png', contain: true },{ name: t.brandDetails.ROASTLY.inStore, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/9f2496fc8_IMG_11572.png' }] }),
  'Portal.': (t) => ({ description: t.brandDetails['Portal.'].description, products: [{ name: t.brandDetails['Portal.'].bestSeller, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/d7a6e2a0a_Portal2.png', contain: true },{ name: t.brandDetails['Portal.'].warehouse, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/c5f7bf069_IMG_5032.jpg' }] }),
  'Freeze.': (t) => ({ description: t.brandDetails['Freeze.'].description, products: [{ name: t.brandDetails['Freeze.'].bestSeller, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/0f13f090b_IMG_99762.jpg', contain: true },{ name: t.brandDetails['Freeze.'].facility, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/0c4477513_IMG_11592.png' }] }),
  MobiHero: (t) => ({ description: t.brandDetails.MobiHero.description, products: [{ name: t.brandDetails.MobiHero.sold, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/3548af806_IMG_0210.jpg' },{ name: t.brandDetails.MobiHero.facility, img: 'https://media.base44.com/images/public/69b9d2d5db8edfaad7d5faa5/a9b3b019f_IMG_2156.jpg' }] }),
};

export default function BrandCard({ brand, description, delay }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const details = brandDetailsTpl[brand.name](t);
  const cardRef = useRef(null);
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash === brand.name) {
      setOpen(true);
      setTimeout(() => {
        const el = cardRef.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 300);
    }
  }, [brand.name]);
  return (
    <motion.div ref={cardRef} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      <div className={`rounded-2xl bg-gradient-to-r ${brand.bgGradient} border border-border overflow-hidden transition-all duration-300 hover:shadow-xl`}>
        <button onClick={() => setOpen(!open)} className="w-full p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 text-left group">
          <div className="w-40 shrink-0 flex items-center justify-center"><img src={brand.logo} alt={brand.name} className={`max-h-16 max-w-full object-contain${brand.invert ? ' invert' : ''}`} /></div>
          <div className="flex-1"><p className="text-muted-foreground leading-relaxed">{description}</p></div>
          <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence initial={false}>{open && (<motion.div key="dropdown" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} className="overflow-hidden"><div className="px-8 md:px-10 pb-10 border-t border-black/5"><p className="mt-6 text-sm text-muted-foreground leading-relaxed mb-6">{details.description}</p><div className="flex flex-wrap justify-center gap-4">{details.products.map((product) => (<div key={product.name} className="flex flex-col flex-1 min-w-[200px] max-w-xs"><div className="h-56 rounded-xl overflow-hidden flex items-end justify-center bg-transparent"><img src={product.img} alt={product.name} className={`rounded-xl ${product.contain ? 'max-h-full max-w-full object-contain' : 'w-full h-full object-cover'}`} /></div><div className="pt-2 text-center"><p className="text-xs font-medium text-muted-foreground">{product.name}</p></div></div>))}</div></div></motion.div>)}</AnimatePresence>
      </div>
    </motion.div>
  );
}
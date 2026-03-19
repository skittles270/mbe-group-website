import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Imprint() {
  const { lang } = useLanguage();
  const content = {
    en: { title: 'Imprint', intro: 'MBE Group operates under the managing firm', company: 'MobiHero GmbH', address: 'Braunstr. 7, 81545 München, Germany', phone: '+49 176 550 64000', email: 'info@mbe-group.com', ceo: 'Managing Director: Daniel Ali Zadeh Moghadam Masouleh', register: 'Trade Register: District Court Munich, HRB 290544', tax: 'Tax ID: DE366775547', weee: 'WEEE Reg.-No.: DE 25491888', disclaimer: 'Our company is exempt from accessibility requirements under applicable law.', mediation: 'We are not obligated and not willing to participate in dispute resolution proceedings before a consumer arbitration body.' },
    de: { title: 'Impressum', intro: 'MBE Group operates under the managing firm', company: 'MobiHero GmbH', address: 'Braunstr. 7, 81545 München, Deutschland', phone: '+49 176 550 64000', email: 'info@mbe-group.com', ceo: 'Geschäftsführer: Daniel Ali Zadeh Moghadam Masouleh', register: 'Handelsregister: Amtsgericht München, HRB 290544', tax: 'Umsatzsteuer-Identifikationsnummer: DE366775547', weee: 'WEEE-Reg.-Nr.: DE 25491888', disclaimer: 'Unser Unternehmen ist gemäß den gesetzlichen Bestimmungen vom Anwendungsbereich der Barrierefreiheit Anforderungen ausgenommen.', mediation: 'Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.' },
  };
  const t = content[lang] || content.en;
  return (
    <div className="min-h-screen bg-background"><section className="py-24"><div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8"><h1 className="text-4xl font-bold text-foreground">{t.title}</h1><p className="text-muted-foreground">{t.intro}</p><div className="space-y-6 text-muted-foreground leading-relaxed"><div><h2 className="text-xl font-semibold text-foreground mb-2">{t.company}</h2><p>{t.address}</p><p>Tel: <a href={`tel:${t.phone}`} className="text-accent hover:underline">{t.phone}</a></p><p>E-Mail: <a href={`mailto:${t.email}`} className="text-accent hover:underline">{t.email}</a></p></div><div className="pt-6 border-t border-border"><p>{t.ceo}</p><p>{t.register}</p><p>{t.tax}</p><p>{t.weee}</p></div><div className="pt-6 border-t border-border space-y-4"><p>{t.disclaimer}</p><p>{t.mediation}</p></div></div></motion.div></div></section></div>
  );
}
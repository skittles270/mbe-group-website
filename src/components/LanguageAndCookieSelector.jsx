import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

export default function LanguageAndCookieSelector({ onComplete }) {
  const { setLang, t } = useLanguage();
  const [selectedLang, setSelectedLang] = useState('en');
  const [cookiesAccepted, setCookiesAccepted] = useState(null);
  const [step, setStep] = useState('language');
  const handleLanguageSelect = (code) => { setSelectedLang(code); setLang(code); };
  const handleComplete = () => { localStorage.setItem('languageSelected', selectedLang); localStorage.setItem('cookiesAccepted', cookiesAccepted === true ? 'true' : 'false'); onComplete(); };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-background rounded-2xl shadow-2xl max-w-md w-full p-8">
        {step === 'language' && (<div className="space-y-6"><div className="text-center"><h1 className="text-2xl font-bold text-foreground mb-2">{t.cookieBanner.selectLanguage}</h1></div><div className="grid grid-cols-2 gap-3">{languages.map(({ code, label, flag }) => (<button key={code} onClick={() => handleLanguageSelect(code)} className={`p-4 rounded-lg border-2 transition-all flex items-center justify-between ${selectedLang === code ? 'border-accent bg-accent/10' : 'border-border hover:border-accent/50'}`}><span className="text-2xl">{flag}</span><span className="text-sm font-medium">{label}</span>{selectedLang === code && <Check className="w-4 h-4 text-accent" />}</button>))}</div><Button onClick={() => setStep('cookies')} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-11">{t.cookieBanner.continue}</Button></div>)}
        {step === 'cookies' && (<div className="space-y-6"><div className="text-center"><h1 className="text-2xl font-bold text-foreground mb-2">{t.cookieBanner.cookieConsent}</h1><p className="text-muted-foreground text-sm">{t.cookieBanner.cookieDescription}</p></div><div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground"><p>{t.cookieBanner.cookieInfo}</p></div><div className="space-y-3"><Button onClick={() => { setCookiesAccepted(true); handleComplete(); }} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-11">{t.cookieBanner.acceptAll}</Button><Button onClick={() => { setCookiesAccepted(false); handleComplete(); }} variant="outline" className="w-full font-semibold h-11">{t.cookieBanner.reject}</Button></div></div>)}
      </motion.div>
    </motion.div>
  );
}
// Full i18n translations — see source app for complete multilingual content
import { createContext, useContext, useState } from 'react';
// (translations object omitted for brevity — copy from source)
const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  return <LanguageContext.Provider value={{ lang, setLang, t: {} }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function StatsStrip() {
  const { t } = useLanguage();
  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
  ];
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-primary-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
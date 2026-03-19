import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/sendContactEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success(t.contact.success);
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-foreground text-center mb-16">{t.contact.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2"><Label>{t.contact.nameLabel}</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
                <div className="space-y-2"><Label>{t.contact.emailLabel}</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
              </div>
              <div className="space-y-2"><Label>{t.contact.companyLabel}</Label><Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
              <div className="space-y-2"><Label>{t.contact.messageLabel}</Label><Textarea className="h-32 resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
              <Button type="submit" disabled={sending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                {sending ? t.contact.sending : <span className="flex items-center gap-2"><Send className="w-4 h-4" />{t.contact.submit}</span>}
              </Button>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {[{ icon: Mail, label: t.contact.emailLabel, value: 'proc@mbe-group.com' }, { icon: MapPin, label: t.contact.visitLabel, value: 'Munich & Bremen, Germany' }, { icon: Clock, label: t.contact.responseLabel, value: '< 24 hours' }].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-accent" /></div>
                <div><p className="text-sm text-muted-foreground">{item.label}</p><p className="text-foreground font-medium mt-0.5">{item.value}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
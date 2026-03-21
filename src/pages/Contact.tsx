import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { usePageSEO } from '@/hooks/use-page-seo';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '@/hooks/use-scroll-animation';

const Contact = () => {
  usePageSEO({
    title: 'Contact Manish Kumar | Hire Web Developer & SEO Expert in Bihar',
    description: 'Contact Manish Kumar — frontend & full-stack web developer and SEO expert from Kochas, Rohtas (Bihar). Hire for React, Next.js, WordPress and SEO projects.',
    keywords: ['contact Manish Kumar', 'hire web developer Bihar', 'hire frontend developer Bihar', 'hire SEO expert Bihar'],
  });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'manishkumar09112002@gmail.com',
      }, 'YOUR_PUBLIC_KEY');
      toast({ title: 'Message sent!', description: "I'll get back to you soon." });
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast({ title: 'Failed to send', description: 'Please email me directly.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: Mail,   label: 'Email',    value: 'mk42526870@gmail.com',  href: 'mailto:manishkumar09112002@gmail.com' },
    { icon: Phone,  label: 'Phone',    value: '+91 7635065908',         href: 'tel:+917635065908' },
    { icon: MapPin, label: 'Location', value: 'Kochas, Rohtas, Bihar',  href: '#' },
  ];

  const socials = [
    { icon: Github,   label: 'GitHub',   href: 'https://github.com/M76350' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/manish0911' },
    { icon: Twitter,  label: 'Twitter',  href: 'https://twitter.com/manishkumar' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="section-line" />
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's build something great together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="card-gradient rounded-lg p-7">
              <h2 className="font-semibold text-lg mb-6">Send a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-muted-foreground">Name</label>
                  <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="h-10 rounded-md border-border bg-background focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-muted-foreground">Email</label>
                  <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="h-10 rounded-md border-border bg-background focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-muted-foreground">Message</label>
                  <Textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} className="rounded-md border-border bg-background resize-none focus:border-primary" />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full h-10 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {sending ? (
                    <><div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="h-4 w-4" /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-5"
          >
            {/* Contact details */}
            <div className="card-gradient rounded-lg p-7">
              <h2 className="font-semibold text-lg mb-5">Contact Details</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href}
                    className="flex items-center gap-4 p-3 rounded-md hover:bg-secondary transition-colors group">
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{info.label}</div>
                      <div className="text-sm font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="card-gradient rounded-lg p-7">
              <h3 className="font-semibold mb-4">Find me on</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label={s.label}>
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="card-gradient rounded-lg p-7 flex items-center gap-4"
            >
              <div className="relative shrink-0">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
              </div>
              <div>
                <div className="font-medium text-sm">Available for hire</div>
                <div className="text-xs text-muted-foreground mt-0.5">Currently accepting new projects</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

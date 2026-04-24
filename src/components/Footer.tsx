import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'Projects',   to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'About',      to: '/about' },
  { label: 'Contact',    to: '/contact' },
];

const socials = [
  { icon: Github,   href: 'https://github.com/M76350',                        label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/manish0911',           label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com/manishkumar',                  label: 'Twitter' },
  { icon: Mail,     href: 'mailto:manishkumar09112002@gmail.com',             label: 'Email' },
];

/* Animated big text that splits into chars */
const AnimatedHeading = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const text = "Let's Work Together";

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="flex flex-wrap justify-center gap-x-[0.18em]">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 80, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: i * 0.028, ease: [0.22, 1, 0.36, 1] }}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
              char === ' ' ? 'w-[0.3em]' : ''
            } ${i > 6 ? 'text-primary' : ''}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-sm">

      {/* ── CTA band ── */}
      <div className="py-20 px-4 text-center border-b border-border">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono tracking-widest uppercase text-primary mb-6"
        >
          Available for hire
        </motion.p>

        <AnimatedHeading />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-muted-foreground mt-6 max-w-md mx-auto text-sm leading-relaxed"
        >
          Have a project in mind? I'd love to build something great together.
          React · Next.js · MERN · WordPress · SEO
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity group"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* ── Main footer grid ── */}
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-xl font-bold text-primary mb-3">Manish Kumar</div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Frontend Developer · React & Next.js · MERN Stack · WordPress · SEO
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              Kochas, Rohtas, Bihar, India
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-sm font-semibold mb-4 text-foreground">Navigation</div>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Socials + contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-sm font-semibold mb-4 text-foreground">Connect</div>
            <div className="flex gap-2 mb-5">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.35 + i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:manishkumar09112002@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
            >
              manishkumar09112002@gmail.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-muted-foreground"
          >
            © {year} Manish Kumar. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs text-muted-foreground flex items-center gap-1"
          >
            Built with <Heart className="h-3 w-3 text-primary fill-primary" /> using React & Tailwind CSS
          </motion.p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

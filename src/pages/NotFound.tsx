import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ArrowLeft, Coffee, Bug, Wifi, Zap } from 'lucide-react';
import { usePageSEO } from '@/hooks/use-page-seo';

const funMessages = [
  "Bhai yeh page toh gaya! 😂",
  "Yeh URL kahan se laya? 🤔",
  "Page ne resign kar diya! 😅",
  "404 — Developer bhi confuse hai! 🤷",
  "Yeh raasta band hai bhai! 🚧",
];

const floatingIcons = [
  { icon: Bug,    x: '10%',  y: '20%', delay: 0,    rotate: -15 },
  { icon: Coffee, x: '85%',  y: '15%', delay: 0.3,  rotate: 10  },
  { icon: Wifi,   x: '75%',  y: '70%', delay: 0.6,  rotate: -8  },
  { icon: Zap,    x: '15%',  y: '75%', delay: 0.9,  rotate: 20  },
  { icon: Bug,    x: '50%',  y: '85%', delay: 1.2,  rotate: -5  },
];

/* Glitching 404 digits */
const GlitchText = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative select-none">
      {/* Shadow layers for glitch */}
      {glitch && (
        <>
          <span className="absolute inset-0 text-[10rem] md:text-[14rem] font-black text-primary/40 translate-x-2 -translate-y-1 blur-[1px]">
            404
          </span>
          <span className="absolute inset-0 text-[10rem] md:text-[14rem] font-black text-blue-400/30 -translate-x-2 translate-y-1 blur-[1px]">
            404
          </span>
        </>
      )}
      <motion.span
        animate={glitch ? { x: [-3, 3, -2, 2, 0], opacity: [1, 0.8, 1] } : {}}
        transition={{ duration: 0.15 }}
        className="relative text-[10rem] md:text-[14rem] font-black text-primary leading-none"
        style={{ textShadow: '0 0 60px hsl(210 100% 56% / 0.3)' }}
      >
        404
      </motion.span>
    </div>
  );
};

/* Bouncing dots loader */
const BounceDots = () => (
  <div className="flex gap-1.5 justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-primary"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

const NotFound = () => {
  const location = useLocation();
  const [msgIndex, setMsgIndex] = useState(0);

  usePageSEO({
    title: '404 — Page Not Found | Manish Kumar',
    description: 'Oops! This page does not exist on Manish Kumar portfolio.',
    keywords: ['404', 'Manish Kumar web developer'],
  });

  useEffect(() => {
    console.error('404:', location.pathname);
  }, [location.pathname]);

  // Cycle through fun messages
  useEffect(() => {
    const t = setInterval(() => {
      setMsgIndex((p) => (p + 1) % funMessages.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

      {/* Floating background icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10 pointer-events-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.15, 1],
            rotate: [item.rotate, item.rotate + 10, item.rotate],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.icon className="w-10 h-10 md:w-14 md:h-14" />
        </motion.div>
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg w-full"
      >
        {/* 404 glitch number */}
        <div className="flex justify-center mb-2">
          <GlitchText />
        </div>

        {/* Animated fun message */}
        <div className="h-8 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={msgIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg font-medium text-primary"
            >
              {funMessages[msgIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-sm leading-relaxed mb-3"
        >
          Jo page tu dhundh raha hai woh toh exist hi nahi karta.
          <br />
          Shayad URL galat hai, ya page ne chutti le li! 🏖️
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs text-muted-foreground/60 font-mono mb-8"
        >
          path: <span className="text-primary">{location.pathname}</span>
        </motion.p>

        {/* Bouncing dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <BounceDots />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 h-11 px-7 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity group"
          >
            <Home className="h-4 w-4" />
            Ghar Wapas Jao
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 h-11 px-7 border border-border text-sm font-medium rounded-md hover:border-primary hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Peeche Jao
          </button>
        </motion.div>

        {/* Fun footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-xs text-muted-foreground/50"
        >
          Developer bhi kabhi kabhi galti karta hai... par yeh galti teri hai 😄
        </motion.p>
      </motion.div>
    </div>
  );
};

export default NotFound;

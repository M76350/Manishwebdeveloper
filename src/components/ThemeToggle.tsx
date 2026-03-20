import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      className={`
        relative flex items-center justify-center
        w-10 h-10 rounded-xl
        border border-border/60
        bg-card/80 backdrop-blur-sm
        shadow-sm hover:shadow-md
        transition-all duration-300
        hover:border-primary/50 hover:bg-primary/10
        group overflow-hidden
      `}
    >
      {/* Glow ring on hover */}
      <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-accent/10" />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <Sun className="h-4 w-4 text-amber-400 group-hover:text-amber-300 transition-colors" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <Moon className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

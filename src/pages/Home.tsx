import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye, Code, Palette, Zap, Globe, Search, TrendingUp, GitBranch, Rocket, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TypewriterText from '@/components/TypewriterText';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';
import About from './About';
import heroImage from '@/assets/hero-image.jpg';
import { usePageSEO } from '@/hooks/use-page-seo';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn, viewport } from '@/hooks/use-scroll-animation';

const features = [
  { icon: Code,       title: 'Front-End Development',   description: 'React.js · Next.js · Redux Toolkit · Pixel-perfect responsive UI' },
  { icon: Palette,    title: 'UI Implementation',        description: 'Figma / Adobe XD to clean, responsive, user-friendly interfaces' },
  { icon: Zap,        title: 'API & State Management',   description: 'RESTful APIs · Redux · Context API · Dynamic data rendering' },
  { icon: Globe,      title: 'WordPress Development',    description: 'Custom themes · Plugin integration · PHP & MySQL backend' },
  { icon: Search,     title: 'SEO Optimization',         description: 'On-page · Technical SEO · Page speed · Search ranking improvements' },
  { icon: TrendingUp, title: 'Digital Marketing',        description: 'SEO strategy · Content optimization · Analytics & lead generation' },
  { icon: GitBranch,  title: 'Version Control',          description: 'Git workflow · GitHub · Collaborative development' },
  { icon: Rocket,     title: 'Deployment & Hosting',     description: 'Vercel · Netlify · GitHub Pages · Production builds' },
  { icon: Share2,     title: 'Social Media Content',     description: 'Brand visuals · Marketing creatives · Digital engagement' },
];

const Home = () => {
  usePageSEO({
    title: 'Best Web Developer in Bihar | Front-End & SEO Expert | Manish Kumar',
    description: 'Manish Kumar is a front-end and full-stack web developer and SEO expert from Kochas, Rohtas (Bihar), building fast, responsive and search-optimized websites.',
    keywords: ['best web developer in Bihar', 'front-end developer in Bihar', 'React developer in Bihar', 'web developer in Kochas', 'web developer in Rohtas', 'SEO expert in Bihar', 'Manish Kumar web developer Bihar'],
  });

  const handleDownloadResume = () => {
    const a = document.createElement('a');
    a.href = '/manishresume.pdf';
    a.download = 'Manish_Kumar_Resume.pdf';
    a.click();
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p variants={fadeUp} className="text-primary text-sm font-mono tracking-widest uppercase mb-4">
              Available for hire
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Hi, I'm{' '}
              <span className="text-primary">Manish Kumar</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground mb-6 h-9">
              <TypewriterText
                words={['Front-End Developer', 'React & Next.js Specialist', 'SEO Expert', 'Full Stack Developer']}
                className="text-foreground font-medium"
              />
            </motion.div>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Building fast, scalable web experiences from{' '}
              <span className="text-foreground font-medium">Kochas, Rohtas (Bihar)</span>.
              Specializing in React, Next.js, WordPress and SEO-optimized websites that rank on Google.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link to="/projects">
                <Button className="group h-11 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="h-11 px-6 rounded-md border-border hover:border-primary hover:text-primary transition-all"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button
                variant="outline"
                className="h-11 px-6 rounded-md border-border hover:border-primary hover:text-primary transition-all"
                onClick={() => window.open('/manishresume.pdf', '_blank')}
              >
                <Eye className="mr-2 h-4 w-4" />
                View CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="order-1 lg:order-2 flex justify-center lg:justify-end mt-20 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-primary/10 blur-2xl" />
              <img
                src={heroImage}
                alt="Manish Kumar — Full Stack Developer"
                className="hero-image relative w-56 h-56 md:w-72 md:h-72 lg:w-[420px] lg:h-[420px] rounded-full object-cover border border-border"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            className="w-px h-8 bg-primary/40"
          />
        </motion.div>
      </section>

      {/* ── What I Do ── */}
      <section className="py-28 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="section-line" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
              What I Do
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              End-to-end web development with a focus on performance, clean code, and search visibility.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-5"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={scaleIn}
                className="card-gradient p-6 rounded-lg group cursor-default"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default Home;

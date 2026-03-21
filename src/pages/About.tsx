import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import { usePageSEO } from '@/hooks/use-page-seo';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn, viewport } from '@/hooks/use-scroll-animation';

/* ── Animated skill bar ── */
const SkillBar = ({ name, level, category, index }: { name: string; level: number; category: string; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="card-gradient p-5 rounded-lg">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-sm font-medium">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{category}</span>
          <motion.span
            className="text-xs font-mono text-primary tabular-nums w-8 text-right"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.04 + 0.4 }}
          >
            {inView ? `${level}%` : ''}
          </motion.span>
        </div>
      </div>
      <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
        <motion.div
          className="h-1.5 rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

const About = () => {
  usePageSEO({
    title: 'About Manish Kumar | Best Web Developer & SEO Specialist in Bihar',
    description: 'Manish Kumar — best full stack & frontend web developer and SEO specialist from Kochas, Rohtas (Bihar) with 2+ years of experience.',
    keywords: ['Manish Kumar about', 'best web developer Bihar', 'full stack developer Bihar', 'SEO specialist Bihar', 'web developer Kochas'],
  });

  const skills = [
    { name: 'HTML',        level: 95, category: 'Frontend' },
    { name: 'CSS',         level: 90, category: 'Frontend' },
    { name: 'Bootstrap',   level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS',level: 90, category: 'Frontend' },
    { name: 'JavaScript',  level: 95, category: 'Frontend' },
    { name: 'React',       level: 80, category: 'Frontend' },
    { name: 'Next.js',     level: 75, category: 'Frontend' },
    { name: 'TypeScript',  level: 85, category: 'Frontend' },
    { name: 'Node.js',     level: 88, category: 'Backend'  },
    { name: 'Express.js',  level: 80, category: 'Backend'  },
    { name: 'MongoDB',     level: 85, category: 'Database' },
    { name: 'PostgreSQL',  level: 82, category: 'Database' },
    { name: 'WordPress',   level: 92, category: 'CMS'      },
    { name: 'Git',         level: 92, category: 'Tools'    },
    { name: 'Docker',      level: 78, category: 'DevOps'   },
    { name: 'AWS',         level: 75, category: 'Cloud'    },
  ];

  const seoSkills = [
    { name: 'SEO Optimization',      level: 95, category: 'SEO'          },
    { name: 'Technical SEO',         level: 92, category: 'SEO'          },
    { name: 'On-Page SEO',           level: 94, category: 'SEO'          },
    { name: 'Off-Page SEO',          level: 90, category: 'SEO'          },
    { name: 'Keyword Research',      level: 93, category: 'SEO'          },
    { name: 'Digital Marketing',     level: 88, category: 'Marketing'    },
    { name: 'Social Media Marketing',level: 85, category: 'Marketing'    },
    { name: 'Link Building',         level: 90, category: 'Off-Page SEO' },
    { name: 'Content Marketing',     level: 85, category: 'Marketing'    },
    { name: 'Social Bookmarking',    level: 92, category: 'Off-Page SEO' },
  ];

  const interests = [
    { icon: Code2,   title: 'Clean Code',        description: 'Maintainable, scalable architecture' },
    { icon: Palette, title: 'UI/UX Design',       description: 'Beautiful, functional interfaces'    },
    { icon: Zap,     title: 'Performance',        description: 'Speed and efficiency first'          },
    { icon: Users,   title: 'Collaboration',      description: 'Working with diverse teams'          },
    { icon: Coffee,  title: 'Coffee & Code',      description: 'Fuel for late-night sessions'        },
    { icon: Heart,   title: 'Open Source',        description: 'Contributing to the community'       },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport} className="text-center mb-16">
          <motion.div variants={fadeUp} className="section-line" />
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Full-stack developer & SEO specialist from Kochas, Rohtas (Bihar) — building fast, scalable, high-ranking digital products.
          </motion.p>
        </motion.div>

        {/* Bio + Profile */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <h2 className="font-semibold text-xl mb-5">My Story</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Manish Kumar</strong>, a passionate{' '}
                <strong className="text-foreground">Web Developer, WordPress Developer, and SEO Specialist</strong> based in{' '}
                <strong className="text-foreground">Kochas, Rohtas (Bihar)</strong> with{' '}
                <strong className="text-foreground">2+ years of hands-on experience</strong> building modern, scalable, high-performance websites.
              </p>
              <p>
                As a <strong className="text-foreground">React.js and Next.js Developer</strong>, I build clean, responsive interfaces
                while integrating powerful backend solutions — React, Next.js, Node.js, WordPress, PHP, and MySQL.
              </p>
              <p>
                I also work extensively in <strong className="text-foreground">SEO and Digital Marketing</strong> — helping local businesses
                in Bihar and Rohtas grow organic traffic and improve Google rankings through on-page SEO, technical SEO, and keyword strategy.
              </p>
              <p>
                My goal: digital products that combine <strong className="text-foreground">beautiful design, strong performance, and high search visibility</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport} className="space-y-5">
            <div className="card-gradient rounded-lg p-6 text-center">
              <img
                src={heroImage}
                alt="Manish Kumar — Full Stack Developer"
                className="mx-auto w-36 h-36 rounded-full object-cover border border-border mb-4"
              />
              <div className="font-semibold">Manish Kumar</div>
              <div className="text-sm text-muted-foreground mt-1">Web Developer · SEO Expert</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-gradient rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="card-gradient rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport} className="mb-16">
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-center mb-10">Technical Skills</motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((s, i) => <SkillBar key={s.name} {...s} index={i} />)}
          </div>
        </motion.div>

        {/* SEO Skills */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport} className="mb-16">
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-center mb-10">SEO & Digital Marketing</motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {seoSkills.map((s, i) => <SkillBar key={s.name} {...s} index={i} />)}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-center mb-10">What I Love</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((item) => (
              <motion.div key={item.title} variants={scaleIn} className="card-gradient rounded-lg p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import { usePageSEO } from '@/hooks/use-page-seo';

/* ── Animated skill bar ─────────────────────────────────────── */
const SkillBar = ({
  name,
  level,
  category,
  index,
}: {
  name: string;
  level: number;
  category: string;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="card-gradient p-6 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-sm md:text-base">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
            {category}
          </span>
          <motion.span
            className="text-sm font-bold text-primary tabular-nums"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 + 0.3 }}
          >
            {inView ? `${level}%` : '0%'}
          </motion.span>
        </div>
      </div>

      {/* Track */}
      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
        {/* Animated fill */}
        <motion.div
          className="h-2.5 rounded-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, hsl(199,95%,55%), hsl(158,80%,48%))',
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.1,
            delay: index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shimmer sweep */}
          <motion.span
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={inView ? { backgroundPosition: ['200% 0', '-200% 0'] } : {}}
            transition={{
              duration: 1.4,
              delay: index * 0.05 + 0.6,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

/* ── About page ─────────────────────────────────────────────── */
const About = () => {
  usePageSEO({
    title: 'About Manish Kumar | Best Web Developer & SEO Specialist in Bihar & Rohtas',
    description:
      'Learn about Manish Kumar — best full stack & frontend web developer and SEO specialist from Kochas, Rohtas (Bihar) with 2+ years of experience building high-performance, SEO-optimized websites.',
    keywords: [
      'Manish Kumar about',
      'best web developer in Bihar',
      'full stack developer Bihar',
      'frontend developer Rohtas',
      'SEO specialist in Bihar',
      'WordPress developer in Bihar',
      'web developer in Kochas',
    ],
  });

  const skills = [
    { name: 'HTML', level: 95, category: 'Frontend' },
    { name: 'CSS', level: 90, category: 'Frontend' },
    { name: 'Bootstrap', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Next.js', level: 75, category: 'Frontend' },
    { name: 'Svelte', level: 80, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'PostgreSQL', level: 82, category: 'Database' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'Docker', level: 78, category: 'DevOps' },
    { name: 'Firebase', level: 75, category: 'Frontend' },
    { name: 'Git', level: 92, category: 'Tools' },
  ];

  const importantSkills = [
    { name: 'SEO Optimization', level: 95, category: 'SEO' },
    { name: 'Technical SEO', level: 92, category: 'SEO' },
    { name: 'On-Page SEO', level: 94, category: 'SEO' },
    { name: 'Off-Page SEO', level: 90, category: 'SEO' },
    { name: 'Keyword Research', level: 93, category: 'SEO' },
    { name: 'Digital Marketing', level: 88, category: 'Marketing' },
    { name: 'Social Media Marketing', level: 85, category: 'Marketing' },
    { name: 'Social Bookmarking', level: 92, category: 'Off-Page SEO' },
    { name: 'Content Marketing', level: 85, category: 'Marketing' },
    { name: 'Link Building', level: 90, category: 'Off-Page SEO' },
  ];

  const interests = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed and efficiency' },
    { icon: Users, title: 'Collaboration', description: 'Working with diverse teams' },
    { icon: Coffee, title: 'Coffee Enthusiast', description: 'Fuel for coding sessions' },
    { icon: Heart, title: 'Open Source', description: 'Contributing to the community' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer & SEO specialist from Kochas, Rohtas (Bihar) creating
            fast, scalable and high-ranking digital products for businesses across Bihar and India.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <strong>Manish Kumar</strong>, a passionate{' '}
                <strong>Web Developer, WordPress Developer, and SEO Specialist</strong> based in{' '}
                <strong>Kochas, Rohtas (Bihar)</strong> with over{' '}
                <strong>2+ years of hands-on experience</strong> building modern, scalable, and
                high-performance websites.
              </p>
              <p>
                As a <strong>React.js and Next.js Developer</strong>, I build clean, responsive, and
                user-friendly interfaces while integrating powerful backend solutions. My expertise
                includes <strong>React, Next.js, JavaScript, Node.js, WordPress, PHP, and MySQL</strong>.
              </p>
              <p>
                Along with development, I work extensively in{' '}
                <strong>Search Engine Optimization (SEO)</strong> and{' '}
                <strong>Digital Marketing</strong> — helping local businesses looking for a{' '}
                <strong>web developer in Bihar</strong> or a{' '}
                <strong>front-end developer in Rohtas and Kochas</strong> grow their organic traffic.
              </p>
              <p>
                My goal is to build digital products that combine{' '}
                <strong>beautiful design, strong performance, and high search visibility</strong>.
              </p>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="card-gradient p-8 rounded-2xl text-center">
              <img
                src={heroImage}
                alt="Manish Kumar - Full Stack Developer"
                className="mx-auto w-[300px] h-[300px] rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <h3 className="text-2xl font-bold mt-4">Manish Kumar</h3>
              <p className="text-muted-foreground">
                <b>Web Developer</b> & <b>SEO Expert</b>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="card-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Technical Skills</h2>
          <p className="text-center text-muted-foreground mb-12 text-sm">
            Scroll into view to see live progress
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* SEO & Digital Marketing Skills */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            SEO & Digital Marketing Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-sm">
            Scroll into view to see live progress
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {importantSkills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I Love</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, hsl(199,95%,55%), hsl(158,80%,48%))' }}
                >
                  <interest.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-muted-foreground text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;

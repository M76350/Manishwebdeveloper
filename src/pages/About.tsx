import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import { usePageSEO } from '@/hooks/use-page-seo';

const About = () => {
  usePageSEO({
    title: 'About Manish Kumar | Web Developer & SEO Specialist in Bihar',
    description:
      'Learn about Manish Kumar, a web developer, WordPress developer and SEO specialist from Kochas, Rohtas (Bihar) with 2+ years of experience building high-performance, SEO-optimized websites.',
    keywords: [
      'Manish Kumar about',
      'web developer in Bihar',
      'SEO specialist in Bihar',
      'WordPress developer in Bihar',
      'front-end developer in Rohtas',
      'web developer in Kochas'
    ]
  });
  const skills = [
    { name: "Html", level: 95, category: "Frontend" },
    { name: "Css", level: 90, category: "Frontend" },
    { name: "Bootstrap", level: 90, category: "Frontend" },
    { name: "Tailwindcss", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Next Js", level: 75, category: "Frontend" },
    { name: "Svelte", level: 80, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Express Js", level: 80, category: "Backend" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "Docker", level: 78, category: "DevOps" },
    { name: "Firebase", level: 75, category: "Frontend" },
    { name: "Git", level: 92, category: "Tools" }
  ];

  // ⭐ Important SEO & Digital Marketing Skills
  const importantSkills = [
    { name: "SEO Optimization", level: 95, category: "SEO" },
    { name: "Technical SEO", level: 92, category: "SEO" },
    { name: "On-Page SEO", level: 94, category: "SEO" },
    { name: "Off-Page SEO", level: 90, category: "SEO" },
    { name: "Keyword Research", level: 93, category: "SEO" },
    { name: "Digital Marketing", level: 88, category: "Marketing" },
    { name: "Social Media Marketing", level: 85, category: "Marketing" },
    { name: "Social Bookmarking", level: 92, category: "Off-Page SEO" },
    { name: "Content Marketing", level: 85, category: "Marketing" },
    { name: "Link Building", level: 90, category: "Off-Page SEO" }
  ];

  const interests = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: Palette, title: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency" },
    { icon: Users, title: "Collaboration", description: "Working with diverse teams" },
    { icon: Coffee, title: "Coffee Enthusiast", description: "Fuel for coding sessions" },
    { icon: Heart, title: "Open Source", description: "Contributing to the community" }
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
            Passionate full-stack developer & SEO specialist from Kochas, Rohtas (Bihar) creating fast, scalable and
            high-ranking digital products for businesses across Bihar and India.
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
                Hello! I'm <strong>Manish Kumar</strong>, a passionate <strong>Web Developer, WordPress Developer, and SEO Specialist</strong> based in
                <strong> Kochas, Rohtas (Bihar)</strong> with over <strong>2+ years of hands-on experience</strong> building modern, scalable, and
                high-performance websites. I specialize in creating fast, responsive, and SEO-optimized web applications using modern technologies.
              </p>

              <p>
                As a <strong>React.js and Next.js Developer</strong>, I build clean, responsive, and user-friendly interfaces
                while integrating powerful backend solutions. My expertise includes <strong>React, Next.js, JavaScript, Node.js, WordPress, PHP, and MySQL</strong>,
                allowing me to deliver both custom web applications and dynamic CMS-based websites.
              </p>

              <p>
                Along with development, I work extensively in <strong>Search Engine Optimization (SEO)</strong> and
                <strong> Digital Marketing</strong>. I implement on-page SEO, technical SEO, keyword research, performance optimization,
                and search ranking strategies that help websites grow organic traffic and improve visibility on search engines – especially for
                local businesses looking for a <strong>web developer in Bihar</strong> or a <strong>front-end developer in Rohtas and Kochas</strong>.
              </p>

              <p>
                My goal is to build digital products that combine <strong>beautiful design, strong performance, and high search visibility</strong>.
                I continuously learn new technologies and marketing strategies to deliver scalable, future-ready, and results-driven web solutions.
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
              <p className="text-muted-foreground"><b>Web Developer</b> & <b>SEO Expert</b></p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="card-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">2 </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="card-gradient p-6 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
                <div className="text-right text-sm text-muted-foreground mt-1">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SEO & Digital Marketing Skills */}
        <motion.div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO & Digital Marketing Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {importantSkills.map((skill, index) => (
              <div key={skill.name} className="card-gradient p-6 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
                <div className="text-right text-sm text-muted-foreground mt-1">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div>
          <h2 className="text-3xl font-bold text-center mb-12">What I Love</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="card-gradient p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <interest.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-muted-foreground text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { usePageSEO } from '@/hooks/use-page-seo';
import { fadeUp, fadeLeft, staggerContainer, viewport } from '@/hooks/use-scroll-animation';

const experiences = [
  {
    id: 1,
    title: 'Associate Website Developer (MERN Stack)',
    company: 'Sync Soft Solution',
    link: 'https://syncsoftsolution.com',
    location: 'Delhi',
    duration: 'Sept 2025 – Present',
    type: 'Full-time',
    description: [
      'Developing and maintaining high-performance websites along with full-stack web applications',
      'Building scalable MERN stack applications using React, Node.js, Express, and MongoDB',
      'Designing and integrating RESTful APIs and third-party services',
      'Working on WordPress and PHP-based systems with performance and security optimization',
      'Implementing reusable frontend components and modular architecture for scalability',
      'Improving SEO structure, page speed, and overall user experience across platforms',
      'Collaborating with cross-functional teams in Agile development environments',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'WordPress',
      'PHP',
      'MySQL',
      'JavaScript',
      'SEO',
      'Git',
    ],
  },
  {
    id: 2,
    title: 'React / Full Stack Developer',
    company: 'Global India Express Pvt Ltd',
    link: 'https://www.globalindiaexpress.com',
    location: 'Delhi',
    duration: 'Aug 2025 – Sept 2025',
    type: 'Full-time',
    description: [
      'Developed high-performance, SEO-optimized web applications using Next.js with server-side rendering (SSR)',
      'Engineered dynamic, data-driven interfaces including pricing modules and landing pages',
      'Integrated backend services and external APIs with robust validation and error handling mechanisms',
      'Enhanced application responsiveness and cross-browser compatibility for improved user experience',
      'Contributed to performance tuning and technical optimization to meet business requirements',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'SEO', 'Git'],
  },
  {
    id: 3,
    title: 'Frontend Developer (React)',
    company: 'Telepathy Infotech Pvt Ltd',
    link: 'https://telepathyinfotech.com',
    location: 'Jaipur',
    duration: 'Jan 2025 – Aug 2025',
    type: 'Full-time',
    description: [
      'Developed scalable and maintainable frontend applications using React and Next.js',
      'Implemented advanced state management solutions using Redux for complex data handling',
      'Collaborated with UI/UX teams to translate business requirements into intuitive user interfaces',
      'Integrated animations and interactive elements to enhance user engagement and usability',
      'Participated in Agile ceremonies including sprint planning, code reviews, and daily stand-ups',
    ],
    technologies: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'GSAP', 'Git'],
  },
  {
    id: 4,
    title: 'Frontend Developer Intern',
    company: 'Telepathy Infotech Pvt Ltd',
    link: 'https://telepathyinfotech.com',
    location: 'Remote',
    duration: 'June 2024 – Dec 2024',
    type: 'Internship',
    description: [
      'Built responsive and user-friendly web interfaces using modern HTML, CSS, and JavaScript standards',
      'Assisted in migrating legacy codebases to component-based React architecture',
      'Performed basic performance optimization and SEO enhancements',
      'Supported senior developers in debugging, testing, and maintaining web applications',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  },
];

const Experience = () => {
  usePageSEO({
    title: 'Work Experience | Web Developer & SEO Expert | Manish Kumar Bihar',
    description: 'Work experience of Manish Kumar — web developer and SEO expert from Bihar with roles in React, Next.js, WordPress, PHP, and full-stack development.',
    keywords: ['web developer experience Bihar', 'Manish Kumar work history', 'frontend developer Bihar', 'SEO expert Bihar'],
  });

  return (
    <div className="min-h-screen pt-24 pb-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

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
            Work <span className="text-primary">Experience</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey — from intern to associate developer, building real products for real clients.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: i * 0.08 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-[18px] top-5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

                <div className="card-gradient rounded-lg p-6">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg leading-tight">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-muted-foreground">
                        {/* <span className="text-primary font-medium">{exp.company}</span> */}
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
                        >
                          {exp.company}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />{exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="text-xs font-mono text-muted-foreground">{exp.duration}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full border border-primary/30 text-primary">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-1.5 mb-5">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 text-center card-gradient rounded-lg p-8"
        >
          <h3 className="font-semibold text-lg mb-2">Open to New Opportunities</h3>
          <p className="text-muted-foreground text-sm mb-5">
            Looking for a skilled developer? Let's talk about your project.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4 transition-all">
            Get in touch <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

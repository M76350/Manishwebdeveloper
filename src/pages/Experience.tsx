import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { usePageSEO } from '@/hooks/use-page-seo';
import { fadeUp, fadeLeft, staggerContainer, viewport } from '@/hooks/use-scroll-animation';

const experiences = [
  {
    id: 1,
    title: 'Associate Website Developer',
    company: 'Sync Soft Solution',
    location: 'Delhi',
    duration: 'Sept 2025 – Present',
    type: 'Full-time',
    description: [
      'Developed high-performance websites and internal tools',
      'Optimized WordPress/PHP systems for speed and security',
      'Created and maintained global shipment tracking modules',
      'Improved SEO structure for better visibility and ranking',
      'Built custom plugins, API integrations, and reusable components',
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'SEO', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Associate Website Developer',
    company: 'Global India Express PVT LTD',
    location: 'Delhi',
    duration: 'Aug 2025 – Sept 2025',
    type: 'Full-time',
    description: [
      'Built and optimized service-based websites improving UX and performance',
      'Developed courier rate pages, landing pages, and SEO-focused structures',
      'Integrated APIs, forms, tracking systems, and backend logic',
      'Enhanced page speed and responsiveness across devices',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'SEO', 'Git'],
  },
  {
    id: 3,
    title: 'Associate Frontend Developer',
    company: 'Telepathy Infotech Pvt Ltd',
    location: 'Jaipur',
    duration: 'Jan 2025 – Aug 2025',
    type: 'Full-time',
    description: [
      'Built responsive web interfaces for early-stage startups',
      'Implemented modern JavaScript frameworks and libraries',
      'Worked closely with UX designers to enhance user experience',
      'Participated in agile development cycles and sprint planning',
    ],
    technologies: ['React', 'Next.js', 'Redux', 'Shadcn', 'GSAP', 'Tailwind', 'Git'],
  },
  {
    id: 4,
    title: 'Junior Web Developer Intern',
    company: 'Telepathy Infotech Pvt Ltd',
    location: 'Remote',
    duration: 'June 2024 – Dec 2024',
    type: 'Internship',
    description: [
      'Developed custom WordPress themes and plugins',
      'Created responsive websites using HTML, CSS, and JavaScript',
      'Assisted in SEO optimization and performance improvements',
      'Provided technical support and maintenance for client websites',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'WordPress'],
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
                        <span className="text-primary font-medium">{exp.company}</span>
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

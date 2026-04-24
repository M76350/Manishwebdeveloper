import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageSEO } from '@/hooks/use-page-seo';
import { fadeUp, staggerContainer, scaleIn, viewport } from '@/hooks/use-scroll-animation';

const projects = [
  { id: 1,  title: 'Courier Charges for Logistics',  description: 'International courier service website with shipping charge calculator, SEO optimization, and PHP & MySQL backend for inquiry management.',                                image: 'https://i.postimg.cc/B64ncQrm/courier-chages-for.png',                                                                    technologies: ['WordPress','PHP','MySQL','SEO','JavaScript'],       liveUrl: 'https://courierchargesfor.com/',                    githubUrl: 'https://github.com/M76350' },
  { id: 2,  title: 'Digital Marketing Agency',        description: 'Professional agency website showcasing SEO, social media marketing, and lead generation services with custom WordPress structure and PHP backend.',                    image: 'https://i.postimg.cc/RZYQ40qQ/syncsoft-solution-mahipalpur.webp',                                                         technologies: ['WordPress','PHP','MySQL','SEO','JavaScript'],       liveUrl: 'https://syncsoftsolution.com/',                     githubUrl: 'https://github.com/M76350' },
  { id: 3,  title: 'Global India Express Courier',    description: 'Corporate logistics website for international courier services with customer inquiry forms, SEO structure, and PHP & MySQL integration.',                              image: 'https://i.postimg.cc/qvs8fBcF/international-courer-service.webp',                                                         technologies: ['WordPress','PHP','MySQL','SEO','JavaScript'],       liveUrl: 'https://www.globalindiaexpress.com/',               githubUrl: 'https://github.com/M76350' },
  { id: 4,  title: 'Real Estate CRM Platform',        description: 'Full-stack MERN application for managing real estate leads, property listings, and sales pipelines with secure MongoDB backend.',                                      image: 'https://i.postimg.cc/YCzb6zPz/homelead.png',                                                                              technologies: ['React','Next.js','Node.js','MongoDB','Tailwind'],   liveUrl: 'https://homelead.in/',                              githubUrl: 'https://github.com/M76350' },
  { id: 5,  title: 'Govindam Group Real Estate',      description: 'Real estate business website with property showcases, lead generation forms, SEO optimization, and Bootstrap-based responsive UI.',                                   image: 'https://govindamgroup.in/wp-content/uploads/2024/09/govindam-tower-bg-scaled.jpg',                                        technologies: ['HTML','CSS','Bootstrap','PHP','MySQL'],             liveUrl: 'https://govindamgroup.in/',                         githubUrl: 'https://github.com/M76350' },
  { id: 6,  title: 'Pizza Booking & Slot System',     description: 'Online pizza ordering platform with real-time slot booking using Socket.io, React frontend, Express backend, and PostgreSQL database.',                               image: 'https://content.jdmagicbox.com/comp/def_content_category/pizza-outlets-dominos/pizza-outlets-dominos-658-8vme1.jpg',     technologies: ['React','Socket.io','Express','PostgreSQL'],         liveUrl: 'https://m76350.github.io/pizza-heart-web/',        githubUrl: 'https://github.com/M76350/pizza-heart-web' },
  { id: 7,  title: 'Delhuan Dairy & Animal Care',     description: 'Responsive dairy business website with Bootstrap layout and WOW.js scroll animations for an engaging user experience.',                                               image: 'https://delhuan-dairy.netlify.app/assets/hero-dairy-3-DXCLnQ35.jpg',                                                     technologies: ['HTML','CSS','Bootstrap','WOW.js'],                  liveUrl: 'https://delhuan-dairy.netlify.app/',                githubUrl: 'https://github.com/M76350/delhuan-dairy' },
  { id: 8,  title: 'Delhuan Dairy Mobile App',        description: 'Flutter mobile application for browsing dairy products with GetX state management and smooth Material UI experience.',                                                image: 'https://i.ytimg.com/vi/KVqtmUjuTxM/maxresdefault.jpg',                                                                    technologies: ['Flutter','Dart','GetX','Riverpod'],                 liveUrl: '#',                                                 githubUrl: 'https://github.com/M76350/delhuan-dairyapp' },
  { id: 9,  title: 'Developer Portfolio',             description: 'Modern developer portfolio with React, Tailwind CSS, Framer Motion animations, and EmailJS contact integration.',                                                      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',                                      technologies: ['React','Framer Motion','Tailwind','EmailJS'],       liveUrl: 'https://manish-code-dinara.vercel.app/',            githubUrl: 'https://github.com/M76350/manish-code-dinara' },
  { id: 10, title: 'World Atlas App',                 description: 'React application fetching country data and flags via public API with dynamic components for capitals, flags, and country details.',                                   image: 'https://world-atlas-taupe.vercel.app/image/worldimage.png',                                                               technologies: ['React','API Integration','Hooks','CSS'],            liveUrl: 'https://world-atlas-taupe.vercel.app/',             githubUrl: 'https://github.com/M76350/worldAtlas' },
  { id: 11, title: 'Solar Energy Website',            description: 'Responsive solar energy solutions website with Bootstrap layout and AOS scroll animations for engaging presentation.',                                                 image: 'https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg',                                          technologies: ['HTML','CSS','Bootstrap','AOS'],                     liveUrl: 'https://m76350.github.io/solar-energy/',           githubUrl: 'https://github.com/M76350/solar-energy' },
  { id: 12, title: 'Netflix UI Clone',                description: 'Responsive Netflix-inspired landing page replicating the modern streaming interface with interactive animation effects.',                                              image: 'https://s3-alpha.figma.com/hub/file/936981378/40fd9ce4-a7a2-468d-b87c-1dabb77298e2-cover.png',                          technologies: ['HTML','CSS','Bootstrap','Animation'],               liveUrl: 'https://m76350.github.io/web-net-fl-web/',         githubUrl: 'https://github.com/M76350/web-net-fl-web' },
  { id: 13, title: 'Doctor Appointment Booking',      description: 'Online medical appointment platform allowing patients to schedule doctor visits with responsive UI and interactive booking form.',                                     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZclK2GSujjwteZgXjCHm-bN7ZhjPeh1bIQ&s',                        technologies: ['HTML','CSS','JavaScript','Bootstrap'],              liveUrl: 'https://m76350.github.io/doctorwebsite/',          githubUrl: 'https://github.com/M76350/doctorwebsite' },
  { id: 14, title: 'Awwwards Inspired Design',        description: 'Creative animated website inspired by Awwwards-style designs, built with Svelte and smooth UI interactions.',                                                         image: 'https://assets.awwwards.com/awards/images/2025/02/Monolith-Thumb.jpg',                                                    technologies: ['Svelte','JavaScript','CSS','Animation'],            liveUrl: 'https://awwardweb.vercel.app/',                     githubUrl: 'https://github.com/M76350/Awwardweb' },
  { id: 15, title: 'WordPress Dev Tools',             description: 'Custom WordPress automation tool for Global India Express to efficiently manage pages, updates, and routine tasks.',                                                   image: 'https://i.postimg.cc/dtHSZwLt/Manish-Devtoolwith-global-india-express.png',                                              technologies: ['WordPress','PHP','API','HTML','CSS','JavaScript'],  liveUrl: 'https://wordpress-tool.vercel.app/',                githubUrl: 'https://github.com/M76350/wordpressTool' },
];

const PREVIEW_COUNT = 6;

/* Shared project card */
const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    variants={scaleIn}
    className="group card-gradient rounded-lg overflow-hidden flex flex-col"
  >
    <div className="relative overflow-hidden h-44">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-md hover:opacity-90 transition-opacity">
          <Eye className="h-3.5 w-3.5" /> Live
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 border border-border text-foreground text-xs font-medium rounded-md hover:border-primary hover:text-primary transition-colors">
          <Github className="h-3.5 w-3.5" /> Code
        </a>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-primary/8 text-primary border border-primary/15 rounded text-xs">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-auto">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 h-8 bg-primary text-primary-foreground text-xs font-medium rounded-md hover:opacity-90 transition-opacity">
          <ExternalLink className="h-3.5 w-3.5" /> View
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 border border-border rounded-md hover:border-primary hover:text-primary transition-colors">
          <Github className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </motion.div>
);

interface ProjectsProps {
  isPreview?: boolean;
}

const Projects = ({ isPreview = false }: ProjectsProps) => {
  usePageSEO(
    !isPreview
      ? {
          title: 'Projects | Web Development Portfolio | Manish Kumar Bihar',
          description: 'Explore web development and SEO projects by Manish Kumar from Bihar — React, Next.js, WordPress and full-stack applications.',
          keywords: ['web development projects Bihar', 'Manish Kumar portfolio', 'React projects Bihar', 'WordPress projects Bihar'],
        }
      : { title: '', description: '', keywords: [] }
  );

  const gridRef = useRef<HTMLDivElement>(null);

  const visible = isPreview
    ? projects.slice(0, PREVIEW_COUNT)
    : projects; // full page — show all at once

  return (
    <div className={`${isPreview ? 'py-28' : 'min-h-screen pt-24 pb-20'} border-t border-border`} ref={gridRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="section-line" />
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated showcase of real-world work — from full-stack apps to SEO-optimized WordPress sites.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          key={isPreview ? 'preview' : 'all'}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Preview mode: View All button */}
        {isPreview && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex justify-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 h-11 px-8 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity group"
            >
              View All {projects.length} Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}

        {/* Full page mode: no pagination — all projects shown at once */}
      </div>
    </div>
  );
};

export default Projects;

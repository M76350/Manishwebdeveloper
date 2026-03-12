import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePageSEO } from '@/hooks/use-page-seo';

const Projects = () => {
  usePageSEO({
    title: 'Projects | Web Development & SEO Portfolio | Manish Kumar (Bihar)',
    description:
      'Explore web development and SEO projects by Manish Kumar from Bihar, including React, Next.js, WordPress and full-stack applications for businesses in India and beyond.',
    keywords: [
      'web development projects Bihar',
      'Manish Kumar portfolio projects',
      'React projects in Bihar',
      'WordPress projects in Bihar',
      'SEO case studies Bihar'
    ]
  });
  const projects = [
    {
    id: 1,
    title: "Courier charges for logistics website",
    description: "International courier service website that helps users check shipping charges and request parcel delivery worldwide. I played a key role in WordPress development, implementing SEO strategies, optimizing service pages, and integrating PHP & MySQL database to manage inquiries and improve search visibility.",
    image: "https://i.postimg.cc/B64ncQrm/courier-chages-for.png",
    technologies: ["WordPress","PHP","MySQL","SEO","HTML","CSS","JavaScript"],
    liveUrl: "https://courierchargesfor.com/",
    githubUrl: "https://github.com/M76350"
    },

    {
    id: 2,
    title: "Digital Marketing Agency Website",
    description: "A professional digital marketing agency website designed to showcase services like SEO, social media marketing, and lead generation. I contributed by developing the WordPress structure, implementing SEO optimization, and customizing PHP & MySQL backend for lead management.",
    image: "https://media.licdn.com/dms/image/v2/D560BAQFnMJlChMjjIw/company-logo_200_200/B56ZkteNbAHQAI-/0/1757404518934/sync_soft_solution_logo?e=1775088000&v=beta&t=dEsayPK5-Z-m6L0BWiqzB1jOju1E8piAQAY-rhIJcxU",
    technologies: ["WordPress","PHP","MySQL","SEO","HTML","CSS","JavaScript"],
    liveUrl: "https://syncsoftsolution.com/",
    githubUrl: "https://github.com/M76350"
    },

    {
    id: 3,
    title: "Global India Express Courier Website",
    description: "Corporate logistics and international courier website that allows customers to explore services and submit shipping inquiries. My main role included WordPress development, implementing SEO optimization, and integrating PHP & MySQL database for handling user inquiries.",
    image: "https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/481314977_1053883630096875_2902088875333456848_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2a1932&_nc_ohc=rCKYMs5ejHUQ7kNvwGP49uA&_nc_oc=AdneyaO0SwxrqcSBQIctfd8ZpQv_XHWwJWxt0LhhO9WWPkuvj7sW0KjVu-Le1H1p6G587XJIcdctqBsKRyUE-vqJ&_nc_zt=23&_nc_ht=scontent.fdel1-2.fna&_nc_gid=sLo8BdjN25CRHraSWn50Bw&_nc_ss=8&oh=00_AfzbsuObDAYcs8J87a66K-Xr7X_VWgcAHvred76Wtt_r8A&oe=69B86B59",
    technologies: ["WordPress","PHP","MySQL","SEO","HTML","CSS","JavaScript"],
    liveUrl: "https://www.globalindiaexpress.com/",
    githubUrl: "https://github.com/M76350"
    },

    {
    id: 4,
    title: "Real Estate CRM & Lead Management Platform",
    description: "A full-stack MERN application for managing real estate leads, property listings, and sales pipelines. I was responsible for building the frontend using React & Next.js, developing backend APIs with Node.js, and integrating MongoDB database for secure lead management.",
    image: "/projects/real-estate-crm-lead-management-platform.png",
    technologies: ["React","Next.js","Node.js","MongoDB","Tailwind CSS","Shadcn"],
    liveUrl: "https://homelead.in/",
    githubUrl: "https://github.com/M76350"
    },
    {
      id: 14,
      title: "Govindam Group Real Estate Website",
      description: "Developed and customized a real estate business website for Govindam Group using  PHP, and MySQL. The website showcases property projects, company information, and lead generation forms. I implemented UI customization using HTML, CSS, JavaScript, and Bootstrap, along with SEO optimization and performance improvements.",
      image: "https://govindamgroup.in/wp-content/uploads/2024/09/govindam-tower-bg-scaled.jpg",
      technologies: ["HTML","CSS","JavaScript","Bootstrap","PHP","MySQL"],
      liveUrl: "https://govindamgroup.in/",
      githubUrl: "https://github.com/M76350"
    },

    {
    id: 5,
    title: "Pizza Booking & Slot System",
    description: "An online pizza ordering platform where users can book delivery slots and place orders efficiently. I contributed by building the React frontend and integrating real-time communication using Socket.io with an Express backend and PostgreSQL database.",
    image: "https://content.jdmagicbox.com/comp/def_content_category/pizza-outlets-dominos/pizza-outlets-dominos-658-8vme1.jpg",
    technologies: ["React","Socket.io","Express","PostgreSQL"],
    liveUrl: "https://m76350.github.io/pizza-heart-web/",
    githubUrl: "https://github.com/M76350/pizza-heart-web"
    },

    {
    id: 6,
    title: "Delhuan Dairy & Animal Care Website",
    description: "A responsive dairy business website designed to showcase dairy products and animal care services. My role included designing the layout, implementing responsive UI with Bootstrap, and adding WOW.js animations for interactive user experience.",
    image: "https://delhuan-dairy.netlify.app/assets/hero-dairy-3-DXCLnQ35.jpg",
    technologies: ["HTML","CSS","Bootstrap","WOW.js","Responsive Design"],
    liveUrl: "https://delhuan-dairy.netlify.app/",
    githubUrl: "https://github.com/M76350/delhuan-dairy"
    },

    {
    id: 7,
    title: "Delhuan Dairy Mobile App",
    description: "A Flutter-based mobile application for browsing dairy products and services. I contributed by building the UI using Flutter and Dart, implementing state management, and designing a smooth mobile experience for product browsing.",
    image: "https://i.ytimg.com/vi/KVqtmUjuTxM/maxresdefault.jpg",
    technologies: ["Flutter","Dart","Material UI","GetX","Riverpod"],
    liveUrl: "#",
    githubUrl: "https://github.com/M76350/delhuan-dairyapp"
    },

    {
    id: 8,
    title: "Portfolio Website",
    description: "A modern developer portfolio website showcasing my projects, skills, and experience. I designed and developed the site using React, Tailwind CSS, and Framer Motion to create smooth animations and a responsive UI.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    technologies: ["React","Framer Motion","Tailwind CSS","EmailJS"],
    liveUrl: "https://manish-code-dinara.vercel.app/",
    githubUrl: "https://github.com/M76350/manish-code-dinara"
    },

    {
    id: 9,
    title: "World Atlas & Country Information App",
    description: "A React application that fetches country data and flags using a public API. I developed the interface, implemented API integration, and built dynamic components to display country details like capitals and flags.",
    image: "https://world-atlas-taupe.vercel.app/image/worldimage.png",
    technologies: ["React JS","API Integration","Hooks","CSS"],
    liveUrl: "https://world-atlas-taupe.vercel.app/",
    githubUrl: "https://github.com/M76350/worldAtlas"
    },

    {
    id: 10,
    title: "Solar Energy Website",
    description: "A responsive website promoting solar energy solutions and renewable technology. I developed the layout using HTML, CSS, and Bootstrap while integrating AOS animations for engaging scroll effects.",
    image: "https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg",
    technologies: ["HTML","CSS","Bootstrap","AOS","WOW Animation"],
    liveUrl: "https://m76350.github.io/solar-energy/",
    githubUrl: "https://github.com/M76350/solar-energy"
    },

    {
    id: 11,
    title: "Netflix UI Clone",
    description: "A responsive Netflix-inspired landing page replicating the modern streaming interface. I developed the UI using HTML, CSS, and Bootstrap with interactive animation effects.",
    image: "https://s3-alpha.figma.com/hub/file/936981378/40fd9ce4-a7a2-468d-b87c-1dabb77298e2-cover.png",
    technologies: ["HTML","CSS","Bootstrap","Animation"],
    liveUrl: "https://m76350.github.io/web-net-fl-web/",
    githubUrl: "https://github.com/M76350/web-net-fl-web"
    },

    {
    id: 12,
    title: "Doctor Appointment Booking Website",
    description: "An online medical appointment booking platform that allows patients to schedule doctor visits easily. I built the responsive UI and interactive booking form using HTML, CSS, JavaScript, and Bootstrap.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZclK2GSujjwteZgXjCHm-bN7ZhjPeh1bIQ&s",
    technologies: ["HTML","CSS","JavaScript","Bootstrap"],
    liveUrl: "https://m76350.github.io/doctorwebsite/",
    githubUrl: "https://github.com/M76350/doctorwebsite"
    },

    {
    id: 13,
    title: "Awwwards Inspired Web Design",
    description: "A modern animated website inspired by Awwwards-style creative designs. I developed the interface using Svelte with smooth animations and visually engaging UI interactions.",
    image: "https://assets.awwwards.com/awards/images/2025/02/Monolith-Thumb.jpg",
    technologies: ["Svelte","JavaScript","CSS","Animation"],
    liveUrl: "https://awwardweb.vercel.app/",
    githubUrl: "https://github.com/M76350/Awwardweb"
    }
    ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents
            a unique challenge and demonstrates different aspects of my development skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group card-gradient rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="hero" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
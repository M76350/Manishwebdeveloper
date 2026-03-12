import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { usePageSEO } from '@/hooks/use-page-seo';

type ShowcaseItem = {
  id: number;
  year: string;
  title: string;
  genres: string;
  link: string;
  image: string;
};

// NOTE: Background images are expected in /public/experience/ with the file names below.
const animeCollection: ShowcaseItem[] = [
  {
    id: 1,
    year: '2013',
    title: 'Attack On Titan',
    genres: 'Action, Dark fantasy, Post-apocalyptic',
    link: 'https://www.imdb.com/title/tt2560140/',
    image: '/experience/attack-on-titan-levi-ackerman.jpg'
  },
  {
    id: 2,
    year: '2019',
    title: 'Demon Slayer',
    genres: 'Adventure, Dark fantasy, Martial arts',
    link: 'https://www.imdb.com/title/tt9335498/',
    image: '/experience/demon-slayer-tanjiro.png'
  },
  {
    id: 3,
    year: '2016',
    title: 'Your Name',
    genres: 'Romance, Fantasy',
    link: 'https://www.imdb.com/title/tt5311514/',
    image: '/experience/your-name-makoto-shinkai.jpg'
  },
  {
    id: 4,
    year: '2021',
    title: 'Jujutsu Kaisen',
    genres: 'Adventure, Dark fantasy, Supernatural',
    link: 'https://www.imdb.com/title/tt12343534/',
    image: '/experience/jujutsu-kaisen-yuji-itadori.jpg'
  },
  {
    id: 5,
    year: '1999',
    title: 'One Piece',
    genres: 'Adventure, Fantasy',
    link: 'https://www.imdb.com/title/tt0388629/',
    image: '/experience/one-piece-luffy.jpg'
  },
  {
    id: 6,
    year: '2019',
    title: 'Weathering with You',
    genres: 'Fantasy, Romance',
    link: 'https://www.imdb.com/title/tt9426210/',
    image: '/experience/weathering-with-you.jpg'
  },
  {
    id: 7,
    year: '2006',
    title: 'Death Note',
    genres: 'Psychological thriller',
    link: 'https://www.imdb.com/title/tt0877057/',
    image: '/experience/death-note-light-and-l.jpg'
  },
  {
    id: 8,
    year: '1999',
    title: 'Naruto',
    genres: 'Adventure, Fantasy, Martial arts',
    link: 'https://www.imdb.com/title/tt0409591/',
    image: '/experience/naruto-uzumaki.png'
  },
  {
    id: 9,
    year: '2022',
    title: 'Suzume',
    genres: 'Adventure, Animation',
    link: 'https://www.imdb.com/title/tt16428256/',
    image: '/experience/suzume.jpg'
  },
  {
    id: 10,
    year: '1989',
    title: 'Dragon Ball',
    genres: 'Adventure, Fantasy, Martial arts',
    link: 'https://www.imdb.com/title/tt0280249/',
    image: '/experience/dragon-ball-goku.jpg'
  },
  {
    id: 11,
    year: '2021',
    title: 'Arcane',
    genres: 'Action, Adventure, Drama, Sci-Fi',
    link: 'https://www.imdb.com/title/tt11126994/',
    image: '/experience/arcane-jinx.jpg'
  },
  {
    id: 12,
    year: '2014',
    title: 'Haikyuu!!',
    genres: 'Comedy, Coming-of-age, Sports',
    link: 'https://www.imdb.com/title/tt3398540/',
    image: '/experience/haikyuu-volleyball-team.jpg'
  }
];

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Experience = () => {
  usePageSEO({
    title: 'Work Experience | Web Developer & SEO Expert | Manish Kumar (Bihar)',
    description:
      'Work experience of Manish Kumar, a web developer and SEO expert from Bihar, including roles in React, Next.js, WordPress, PHP, SEO optimization and full-stack development.',
    keywords: [
      'web developer experience Bihar',
      'Manish Kumar work history',
      'frontend developer experience in Bihar',
      'SEO expert work experience Bihar'
    ]
  });
  const [hoveredId, setHoveredId] = useState<number>(animeCollection[0].id);
  const [titleDisplay, setTitleDisplay] = useState<Record<number, string>>(() =>
    animeCollection.reduce((acc, item) => {
      acc[item.id] = item.title;
      return acc;
    }, {} as Record<number, string>)
  );
  const scrambleTimers = useRef<Record<number, number>>({});

  const startScramble = (item: ShowcaseItem) => {
    const { id, title } = item;
    if (scrambleTimers.current[id]) {
      window.clearInterval(scrambleTimers.current[id]);
    }

    let iteration = 0;
    scrambleTimers.current[id] = window.setInterval(() => {
      setTitleDisplay((prev) => ({
        ...prev,
        [id]: title
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return title[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('')
      }));

      iteration += 1 / 3;
      if (iteration >= title.length) {
        window.clearInterval(scrambleTimers.current[id]);
        setTitleDisplay((prev) => ({ ...prev, [id]: title }));
      }
    }, 20);
  };

  const handleMouseEnter = (item: ShowcaseItem) => {
    setHoveredId(item.id);
    startScramble(item);
  };

  useEffect(() => {
    return () => {
      Object.values(scrambleTimers.current).forEach((timer) => {
        if (timer) {
          window.clearInterval(timer);
        }
      });
    };
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Associate Website Developer",
      company: "Sync Soft Solution",
      location: "Delhi",
      duration: "Sept 2025 - Present",
      description: [
        "Developed high-performance websites and internal tools.",
        "Optimized WordPress/PHP systems for speed and security.",
        "Created and maintained global shipment tracking modules.",
        "Improved SEO structure for better visibility and ranking.",
        "Built custom plugins, API integrations, and reusable components.",
        "Worked with teams to deliver pixel-perfect UI features."
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "Global Tracking Systems",
        "SEO",
        "Custom Plugins",
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },
    {
      id: 2,
      title: "Associate Website Developer",
      company: "Global India Express PVT LTD",
      location: "Delhi",
      duration: "Aug 2025 - sept 2025",
      description: [
        "Built and optimized service-based websites improving UX and performance.",
        "Developed courier rate pages, landing pages, and SEO-focused structures.",
        "Integrated APIs, forms, tracking systems, and backend logic.",
        "Enhanced page speed and responsiveness across devices.",
        "Added new features, fixed UI/UX issues, and improved workflows.",
        "Maintained site security, updates, and technical operations."
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind",
        "SEO Optimization",
        "API Integration",
        "Git & GitHub"
      ]
    }
    ,
    {
      id: 3,
      title: " Associate Frontend Developer",
      company: "Telepathy Infotech pvt Ltd",
      location: "Jaipur",
      duration: "jan 2025 - Aug 2025",
      description: [
        "Built responsive web interfaces for early-stage startups",
        "Implemented modern JavaScript frameworks and libraries",
        "Worked closely with UX designers to enhance user experience",
        "Participated in agile development cycles and sprint planning"
      ],
      technologies: ["React", "Next js", "redux", "Shad CN", "Api Integratation", "git & github", "Vue.js", "SASS", "Webpack", "Gsap", "Tailwind Css",]
    },
    {
      id: 4,
      title: "Junior Web Developer Intern",
      company: "TelepathyInfotech pvt Ltd",
      location: "Remote",
      duration: "june 2024 - Dec 2024",
      description: [
        "Developed custom WordPress themes and plugins",
        "Created responsive websites using HTML, CSS, and JavaScript",
        "Assisted in SEO optimization and performance improvements",
        "Provided technical support and maintenance for client websites"
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Wordpress"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in web development, from junior developer to senior roles,
            building innovative solutions for diverse clients and companies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r hidden md:flex from-primary to-accent rounded-full  items-center justify-center relative z-10">
                  <Calendar className="h-8 w-8 text-white" />
                </div>

                {/* Experience content */}
                <div className="flex-1 card-gradient p-8 rounded-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center space-x-4 text-muted-foreground">
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-gradient p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6">
              Interested in my experience? I'm always open to discussing new opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
            >
              Get in touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* My Activity Showcase */}

      </div>
    </div>
  );
};

export default Experience;
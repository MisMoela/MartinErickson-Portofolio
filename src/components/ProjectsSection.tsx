import { ArrowRight, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "DigiPurse",
    description:
      "DigiPurse is a decentralized purse that aims to combine tickets, documents, and identities into a single Web3 based app.",
    image: "/projects/digipurse_project.jpg",
    tags: [
      "Motoko",
      "React",
      "Vite",
      "Tailwind",
      "Javascript",
      "Python",
      "Azure",
      "Figma",
    ],
    githubUrl: "https://github.com/Kazeth/DigiPurse",
  },
  {
    id: 2,
    title: "BYT Constructions",
    description:
      "BYT Constructions is a combination of an e-commerce app and a database manager for specifically construction materials.",
    image: "/projects/bytconstructions_project.jpg",
    tags: ["HTML", "CSS", "Javascript", "NodeJs", "MongoDB", "Figma"],
    githubUrl: "https://github.com/MisMoela/BYT-Constructions",
  },
  {
    id: 3,
    title: "ChainPilot",
    description:
      "ChainPilot is a decentralized coin trading app that aims to provide users with a unique trading experience.",
    image: "/projects/chainpilot_project.jpg",
    tags: ["Motoko", "React", "Vite", "Tailwind", "Typescript"],
    githubUrl: "https://github.com/Kazeth/ChainPilot",
  },
  {
    id: 4,
    title: "Shoppybara",
    description:
      "Stackybara is a decentralized e-commerce app that works on blockchain technology and Web3 architecture.",
    image: "/projects/shoppybara_project.jpg",
    tags: ["Motoko", "React", "Vite", "Tailwind", "Javascript"],
    githubUrl: "https://github.com/OkToRen/Stackybara",
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Here are my projects, each of which reflects how I gained and honed my
          skills through hands-on experience and problem-solving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card card-hover flex flex-col overflow-hidden shadow-xs"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Github */}
                <div className="flex justify-end items-center mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/MisMoela" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Home } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=600&width=800&text=Portfolio",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management and payment integration.",
    image: "/placeholder.svg?height=600&width=800&text=E-Commerce",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    slug: "mobile-fitness-app",
    title: "Mobile Fitness App",
    description: "A fitness tracking application for iOS and Android with workout plans and progress tracking.",
    image: "/placeholder.svg?height=600&width=800&text=Fitness+App",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 4,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A real-time weather dashboard with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=600&width=800&text=Weather",
    tags: ["JavaScript", "APIs", "Chart.js"],
  },
  {
    id: 5,
    slug: "task-management-tool",
    title: "Task Management Tool",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=600&width=800&text=Task+Manager",
    tags: ["React", "Socket.io", "Express"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to About
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work, personal projects, and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group block overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm font-medium text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer navigation */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to About
          </Link>
        </div>
      </div>
    </div>
  )
}


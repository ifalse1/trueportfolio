import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample project data
const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS. This portfolio website showcases my work and skills in web development. It features a responsive design, smooth animations, and optimized performance. The site includes an about page with a parallax effect, a projects showcase, and contact information.",
    image: "/placeholder.svg?height=600&width=1200&text=Portfolio",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "SEO"],
    dates: "January 2023 - March 2023",
  },
  {
    id: 2,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management and payment integration. This e-commerce platform provides a complete solution for online stores. It includes product management, user authentication, shopping cart functionality, and secure payment processing. Built with React for the frontend and Node.js for the backend, it offers a smooth shopping experience with real-time inventory updates and order tracking.",
    image: "/placeholder.svg?height=600&width=1200&text=E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    dates: "June 2022 - December 2022",
  },
  {
    id: 3,
    slug: "mobile-fitness-app",
    title: "Mobile Fitness App",
    description:
      "A fitness tracking application for iOS and Android with workout plans and progress tracking. This cross-platform mobile application helps users track their fitness journey. It provides workout plans, progress tracking, and nutritional guidance. Developed with React Native and Firebase, it offers a seamless experience across iOS and Android devices with real-time data synchronization.",
    image: "/placeholder.svg?height=600&width=1200&text=Fitness+App",
    technologies: ["React Native", "Firebase", "Redux", "iOS", "Android"],
    dates: "March 2022 - May 2022",
  },
  {
    id: 4,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard with location-based forecasts and interactive maps. This weather dashboard provides real-time weather information and forecasts for locations worldwide. It features interactive maps, hourly and daily forecasts, and severe weather alerts. Built with JavaScript and various weather APIs, it offers accurate and up-to-date information with a clean and intuitive user interface.",
    image: "/placeholder.svg?height=600&width=1200&text=Weather",
    technologies: ["JavaScript", "Weather API", "Chart.js", "Mapbox", "Responsive Design"],
    dates: "September 2021 - November 2021",
  },
  {
    id: 5,
    slug: "task-management-tool",
    title: "Task Management Tool",
    description:
      "A collaborative task management tool with real-time updates and team collaboration features. This task management application helps teams organize and track their work efficiently. It provides real-time collaboration, task assignment, and progress tracking. Developed with React, Socket.io, and Express, it enables seamless team collaboration with instant updates and notifications.",
    image: "/placeholder.svg?height=600&width=1200&text=Task+Manager",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Real-time"],
    dates: "April 2021 - August 2021",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <Home className="mr-2 h-4 w-4" />
            Back to About
          </Link>
        </div>

        {/* Project Name */}
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

        {/* Project Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        {/* Project Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-muted-foreground">{project.description}</p>
        </section>

        {/* Technology Used */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technology Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Project Dates */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Dates</h2>
          <p className="text-muted-foreground">{project.dates}</p>
        </section>

        <div className="flex justify-between">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Back to About
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


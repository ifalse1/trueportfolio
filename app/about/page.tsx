"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, Code, Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero section with parallax background */}
      <div ref={heroRef} className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Developer, designer, and creative problem solver passionate about building exceptional digital experiences.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Bio section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=600&width=600&text=Profile"
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Hello, I'm [Your Name]</h2>
            <p className="text-muted-foreground mb-4">
              I'm a [Your Profession] based in [Your Location] with [X] years of experience creating digital solutions
              that combine functionality with aesthetic appeal.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in tech began when [brief story about how you got started]. Since then, I've been passionate
              about [what drives you in your work].
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me [your hobbies or interests outside of work].
            </p>
          </div>
        </div>
      </div>

      {/* Skills section with parallax effect */}
      <div className="relative py-24">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            transform: `translateY(${(scrollY - 500) * 0.2}px)`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-3">
                <Code className="mr-2" />
                <h3 className="text-xl font-semibold">Development</h3>
              </div>
              <ul className="space-y-2">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>HTML / CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-3">
                <Briefcase className="mr-2" />
                <h3 className="text-xl font-semibold">Design</h3>
              </div>
              <ul className="space-y-2">
                <li>UI/UX Design</li>
                <li>Figma / Adobe XD</li>
                <li>Responsive Design</li>
                <li>Design Systems</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-3">
                <GraduationCap className="mr-2" />
                <h3 className="text-xl font-semibold">Other</h3>
              </div>
              <ul className="space-y-2">
                <li>Project Management</li>
                <li>Git / GitHub</li>
                <li>SEO Optimization</li>
                <li>Performance Optimization</li>
                <li>Agile Methodology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:text-right">
              <p className="font-semibold">2021 - Present</p>
              <p className="text-muted-foreground">Company Name</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold">Senior Developer</h3>
              <p className="text-muted-foreground mt-2">
                Led development of [project/product], resulting in [achievement]. Collaborated with cross-functional
                teams to implement [feature/technology]. Mentored junior developers and established best practices for
                the team.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:text-right">
              <p className="font-semibold">2018 - 2021</p>
              <p className="text-muted-foreground">Previous Company</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="text-muted-foreground mt-2">
                Developed and maintained [type of applications/websites] using [technologies]. Implemented responsive
                designs and ensured cross-browser compatibility. Collaborated with designers to transform mockups into
                functional interfaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:text-right">
              <p className="font-semibold">2016 - 2018</p>
              <p className="text-muted-foreground">First Company</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <p className="text-muted-foreground mt-2">
                Assisted in the development of [project/product] using [technologies]. Participated in code reviews and
                implemented feedback to improve code quality. Collaborated with the team to troubleshoot and resolve
                bugs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education section */}
      <div className="bg-muted py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <p className="text-sm text-muted-foreground">2012 - 2016</p>
              <h3 className="text-xl font-semibold mt-1">Bachelor of Science in Computer Science</h3>
              <p className="mt-2">University Name</p>
              <p className="text-muted-foreground mt-2">
                Relevant coursework: Web Development, Data Structures, Algorithms, Database Systems, User Interface
                Design
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <p className="text-sm text-muted-foreground">2020</p>
              <h3 className="text-xl font-semibold mt-1">UX Design Certification</h3>
              <p className="mt-2">Certification Provider</p>
              <p className="text-muted-foreground mt-2">
                Comprehensive program covering user research, wireframing, prototyping, and usability testing
                principles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section for Projects and Jobs */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore More</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background border rounded-lg p-8 text-center shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">View My Projects</h3>
              <p className="text-muted-foreground mb-6">
                Explore my portfolio of projects to see examples of my work and the technologies I've used.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Browse Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-background border rounded-lg p-8 text-center shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
              <p className="text-muted-foreground mb-6">
                Learn more about my professional background and the companies I've worked with throughout my career.
              </p>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                View Experience
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


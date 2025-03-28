import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample job data
const jobs = [
  {
    id: 1,
    slug: "senior-developer-tech-innovations",
    title: "Senior Developer",
    company: "Tech Innovations Inc.",
    logo: "/placeholder.svg?height=100&width=100&text=TI",
    description:
      "Led frontend development for multiple web applications using React and Next.js. Architected and implemented new features, collaborated with UX/UI designers, optimized application performance, implemented CI/CD pipelines, and mentored junior developers. Redesigned the company's flagship product, resulting in a 40% increase in user engagement. Reduced bundle size by 60% through code splitting and lazy loading techniques.",
    startDate: "January 2021",
    endDate: "Present",
  },
  {
    id: 2,
    slug: "web-developer-digital-solutions",
    title: "Web Developer",
    company: "Digital Solutions Group",
    logo: "/placeholder.svg?height=100&width=100&text=DSG",
    description:
      "Developed responsive websites and web applications for clients across various industries. Implemented frontend interfaces using React and modern JavaScript. Built RESTful APIs and backend services using Node.js and Express. Collaborated with designers to translate mockups into functional websites. Completed over 20 client projects with a 100% satisfaction rate. Reduced page load times by an average of 40% through optimization techniques.",
    startDate: "March 2018",
    endDate: "December 2020",
  },
  {
    id: 3,
    slug: "frontend-developer-creative-agency",
    title: "Frontend Developer",
    company: "Creative Agency Co.",
    logo: "/placeholder.svg?height=100&width=100&text=CA",
    description:
      "Created interactive user interfaces and implemented responsive designs for client websites and applications. Implemented pixel-perfect designs from Sketch and Figma mockups. Created animations and interactive elements using JavaScript and CSS. Optimized websites for maximum speed and scalability. Developed the frontend for an award-winning website in the travel industry. Implemented advanced animations that became a signature style for the agency.",
    startDate: "June 2016",
    endDate: "February 2018",
  },
  {
    id: 4,
    slug: "junior-developer-startup-hub",
    title: "Junior Developer",
    company: "Startup Hub",
    logo: "/placeholder.svg?height=100&width=100&text=SH",
    description:
      "Assisted in the development of web applications for multiple startup clients. Built and maintained websites using PHP, JavaScript, and MySQL. Implemented responsive designs using Bootstrap and custom CSS. Fixed bugs and improved functionality of existing applications. Developed a custom CMS that was adopted by three startup clients. Contributed to an open-source project that gained over 500 GitHub stars.",
    startDate: "August 2014",
    endDate: "May 2016",
  },
  {
    id: 5,
    slug: "web-design-intern-design-studio",
    title: "Web Design Intern",
    company: "Design Studio",
    logo: "/placeholder.svg?height=100&width=100&text=DS",
    description:
      "Assisted senior designers in creating website mockups and wireframes. Developed websites using HTML, CSS, and WordPress. Created graphics and visual elements for client websites. Optimized images and assets for web use. Designed and developed a complete website for a local non-profit organization. Created a series of banner ads that achieved a 15% higher click-through rate than previous campaigns.",
    startDate: "May 2013",
    endDate: "August 2013",
  },
]

export default function JobPage({ params }: { params: { slug: string } }) {
  const job = jobs.find((j) => j.slug === params.slug)

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/jobs" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work Experience
          </Link>

          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <Home className="mr-2 h-4 w-4" />
            Back to About
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-md border">
              <Image src={job.logo || "/placeholder.svg"} alt={`${job.company} logo`} fill className="object-cover" />
            </div>
          </div>

          <div>
            {/* Job Name */}
            <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
            <h2 className="text-2xl text-primary mb-2">{job.company}</h2>

            {/* Job Dates */}
            <p className="text-muted-foreground">
              {job.startDate} - {job.endDate}
            </p>
          </div>
        </div>

        {/* Job Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p className="text-muted-foreground whitespace-pre-line">{job.description}</p>
        </section>

        <div className="flex justify-between">
          <Button asChild>
            <Link href="/jobs">View All Experience</Link>
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


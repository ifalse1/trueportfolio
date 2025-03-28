import Link from "next/link"
import { Calendar, MapPin, Briefcase, ArrowLeft, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample work history data
const jobs = [
  {
    id: 1,
    slug: "senior-developer-tech-innovations",
    title: "Senior Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "January 2021",
    endDate: "Present",
    shortDescription:
      "Led frontend development for multiple web applications using React and Next.js, resulting in a 40% improvement in user engagement.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    slug: "web-developer-digital-solutions",
    title: "Web Developer",
    company: "Digital Solutions Group",
    location: "New York, NY",
    type: "Full-time",
    startDate: "March 2018",
    endDate: "December 2020",
    shortDescription:
      "Developed and maintained responsive websites and web applications for clients across various industries.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    slug: "frontend-developer-creative-agency",
    title: "Frontend Developer",
    company: "Creative Agency Co.",
    location: "Remote",
    type: "Full-time",
    startDate: "June 2016",
    endDate: "February 2018",
    shortDescription:
      "Created interactive user interfaces and implemented responsive designs for client websites and applications.",
    technologies: ["HTML/CSS", "JavaScript", "jQuery", "Sass"],
  },
  {
    id: 4,
    slug: "junior-developer-startup-hub",
    title: "Junior Developer",
    company: "Startup Hub",
    location: "Austin, TX",
    type: "Full-time",
    startDate: "August 2014",
    endDate: "May 2016",
    shortDescription:
      "Assisted in the development of web applications and participated in the full software development lifecycle.",
    technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 5,
    slug: "web-design-intern-design-studio",
    title: "Web Design Intern",
    company: "Design Studio",
    location: "Chicago, IL",
    type: "Internship",
    startDate: "May 2013",
    endDate: "August 2013",
    shortDescription: "Assisted in designing and developing websites for small businesses and local organizations.",
    technologies: ["HTML/CSS", "WordPress", "Photoshop", "Illustrator"],
  },
]

export default function JobsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to About
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <Link
              href={`/jobs/${job.slug}`}
              key={job.id}
              className="block border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <span className="text-lg text-primary">{job.company}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.shortDescription}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="mr-1 h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {job.startDate} - {job.endDate}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
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


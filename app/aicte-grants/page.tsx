"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const students = [
  {
    name: "YASHASVI (Young Achievers’ Scholarship & Holistic Academic Skills Venture Initiative)",
    summary:
      "Scholarship for meritorious students in core branches of engineering (UG & Diploma) to encourage technical education.",
    link: "https://www.aicte.gov.in/schemes/students-development-schemes",
  },
  {
    name: "AICTE SARSWATI SCHOLARSHIP",
    summary: "Financial aid for meritorious girl students pursuing BBA / BMS / BCA in AICTE-approved institutions.",
    link: "https://www.aicte.gov.in/schemes/students-development-schemes",
  },
  {
    name: "AICTE Post-Doctoral Fellowship (PDF)",
    summary:
      "Encourages PhD graduates to pursue regular R&D careers in engineering, applied sciences, design, etc., in AICTE-approved institutions.",
    link: "https://www.aicte.gov.in/schemes/students-development-schemes",
  },
  {
    name: "AICTE AURA (Augmenting Utilization of Research Assets)",
    summary:
      "Support (approx ₹2 lakh) to faculty and PG/PhD students to utilize public funded hardware/software R&D facilities to boost research and mobility.",
    link: "https://www.aicte.gov.in/schemes/students-development-schemes",
  },
  {
    name: "AICTE - SWANATH SCHOLARSHIP SCHEME",
    summary:
      "For students who are orphaned, lost parents due to COVID-19, or wards of armed forces martyred; support via the National Scholarship Portal.",
    link: "https://www.aicte.gov.in/schemes/students-development-schemes",
  },
  {
    name: "AICTE Doctoral Fellowship (ADF)",
    summary:
      "Fellowship to meritorious full-time PhD scholars in AICTE-approved institutions/departments in thrust areas.",
    link: "https://www.aicte.gov.in/schemes/students-development-schemes",
  },
]

const institutional = [
  {
    name: "AICTE-IDEA Lab (Idea Development, Evaluation & Application Lab)",
    summary:
      "Set up labs in AICTE-approved institutions for hands-on STEM learning, enhancing application of theory and product visualization.",
    link: "https://www.aicte.gov.in/schemes/institutional-development-schemes",
  },
  {
    name: "SPICES (Scheme for Promoting Interests, Creativity and Ethics Among Students)",
    summary:
      "Supports student clubs/chapters/societies to encourage creativity, ethics, teamwork, and management skills.",
    link: "https://www.aicte.gov.in/schemes/institutional-development-schemes",
  },
  {
    name: "Grant for Organizing Conference (GOC)",
    summary:
      "Financial assistance to institutions to organize technical education related conferences (national/international).",
    link: "https://www.aicte.gov.in/schemes/institutional-development-schemes",
  },
  {
    name: "MODROBS (Modernisation and Removal of Obsolescence)",
    summary:
      "Assists in upgrading labs/workshops/computing facilities by modernizing infrastructure and replacing obsolete equipment.",
    link: "https://www.aicte.gov.in/schemes/institutional-development-schemes",
  },
]

export default function AICTEGrantsPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f7]">
      <div className="bg-[#004aad] text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">AICTE Grants & Schemes (2025)</h1>
          <p className="mt-2 text-blue-100 max-w-3xl">
            Curated list of current AICTE student development and institutional development schemes with official links.
          </p>
          <div className="mt-4">
            <Button asChild className="bg-[#ff914d] hover:bg-orange-600">
              <a href="/">Back to MedNext 2025</a>
            </Button>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#004aad] mb-6">AICTE Student-Development Schemes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {students.map((s) => (
            <Card key={s.name} className="border-t-4 border-[#ff914d]">
              <CardHeader>
                <CardTitle className="text-[#004aad]">{s.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{s.summary}</p>
                <div className="mt-4">
                  <Button asChild className="bg-[#0276db] hover:bg-[#004aad]">
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Scheme
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#004aad] mb-6">AICTE Institutional Development Schemes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {institutional.map((s) => (
            <Card key={s.name} className="border-t-4 border-[#ff914d]">
              <CardHeader>
                <CardTitle className="text-[#004aad]">{s.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{s.summary}</p>
                <div className="mt-4">
                  <Button asChild className="bg-[#0276db] hover:bg-[#004aad]">
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Scheme
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

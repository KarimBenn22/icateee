"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import chairs from "./chairs.json"

export default function CommitteeOrganization() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Honorary Chair": true,
    "Co-Honorary Chair": true,
    "General Chair": true,
    "Organizing Committee Chair": true,
    "Scientific Committee Chair": true,
    "Finance Chairs": true,
    "Publication Chairs": true,
  })

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-2">Committee Members</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-blue-400 mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Distinguished faculty and professionals leading the International Conference on Electronics Energy and
          Measurement
        </p>
      </div>

      <div className="space-y-8">
        {chairs.committeeSections.map((section, index) => (
          <div key={index} className="bg-white shadow-md overflow-hidden border border-gray-100">
            <div
              className="bg-gradient-to-r bg-primary text-white px-6 py-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(section.title)}
            >
              <h2 className="text-xl font-bold">{section.title}</h2>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${expandedSections[section.title] ? "rotate-180" : ""}`}
              />
            </div>

            {expandedSections[section.title] && (
              <div className="divide-y divide-gray-100">
                {section.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="px-6 py-4 transition-colors duration-200 hover:bg-blue-50">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#0077cc] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {member.title} {member.name}
                            </h3>
                            <div className="text-sm text-[#003366] font-medium mt-1">{member.role}</div>
                          </div>
                          <div className="text-sm text-gray-600 mt-2 md:mt-0">{member.affiliation}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import commitee from "./commitees.json"
import Flag from "react-world-flags"
import { Search } from "lucide-react"

export default function CommitteeSection() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredResearchers = commitee.researchers.filter(
    (researcher) =>
      researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      researcher.university.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="w-full py-12 text-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-8">Committee Members</h2>

        <div className="mb-6 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name or university..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Country</th>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">University</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredResearchers.map((researcher, index) => (
                  <tr key={researcher.name + index} className={index % 2 === 0 ? "bg-[#f0f4f8]" : "bg-white"}>
                    <td className="px-6 py-4">
                      <div className="flex items-center relative group">
                        <Flag
                          code={researcher.code}
                          className="h-6 w-10 object-cover shadow-sm"
                          fallback={<span className="text-gray-400">N/A</span>}
                          title={researcher.country} // Native HTML tooltip for accessibility
                        />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                          {researcher.country}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">{researcher.name}</td>
                    <td className="px-6 py-4 text-gray-600">{researcher.university}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredResearchers.length === 0 && (
          <div className="text-center py-8 text-gray-500">No committee members found matching your search.</div>
        )}
      </div>
    </section>
  )
}


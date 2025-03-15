"use client";

import { useState } from "react";
import commitee from "./commitees.json";
import Flag from "react-world-flags";
import { Search } from "lucide-react";

export default function CommitteeSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResearchers = commitee.researchers.filter(
    (researcher) =>
      researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      researcher.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full py-8 md:py-12 text-black">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6 md:mb-8">
          Scientific Committee
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-primary"></div>
        </h2>
        <div className="mb-6 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name or university..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/80 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search committee members"
            />
          </div>
        </div>

        {/* Desktop view - Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-semibold">
                    Country
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-semibold">
                    Name
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-semibold">
                    University
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredResearchers.map((researcher, index) => (
                  <tr
                    key={researcher.name + index}
                    className={`${
                      index % 2 === 0 ? "bg-[#f0f4f8]" : "bg-white"
                    } hover:bg-gray-50 transition-colors duration-150`}
                  >
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center relative group">
                        <Flag
                          code={researcher.code}
                          className="h-5 md:h-6 w-8 md:w-10 object-cover shadow-sm rounded-sm"
                          fallback={<span className="text-gray-400">N/A</span>}
                        />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          {researcher.country}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 font-medium">
                      {researcher.name}
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-600">
                      {researcher.university}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile view - Cards */}
        <div className="md:hidden space-y-4">
          {filteredResearchers.map((researcher, index) => (
            <div
              key={researcher.name + index}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary"
            >
              <div className="flex items-center gap-3 mb-2">
                <Flag
                  code={researcher.code}
                  className="h-5 w-8 object-cover shadow-sm rounded-sm"
                  fallback={<span className="text-gray-400">N/A</span>}
                />
                <span className="text-xs text-gray-500">
                  {researcher.country}
                </span>
              </div>
              <h3 className="font-medium text-lg">{researcher.name}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {researcher.university}
              </p>
            </div>
          ))}
        </div>

        {filteredResearchers.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg shadow-md">
            <p className="text-lg">
              No committee members found matching your search.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-2 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

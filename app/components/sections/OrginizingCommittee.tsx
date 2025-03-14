"use client";

import { useState, useEffect } from "react";
import data from "./orginizers.json";

export default function OriginizingCommitee() {
  const names = data.names;
  const [sortedNames, setSortedNames] = useState<string[]>([]);

  useEffect(() => {
    // Sort names alphabetically
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    setSortedNames(sorted);
  }, [names]);

  // Group names by first letter
  const groupedNames: Record<string, string[]> = {};

  sortedNames.forEach((name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    if (!groupedNames[firstLetter]) {
      groupedNames[firstLetter] = [];
    }
    groupedNames[firstLetter].push(name);
  });

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4">
      <div className="bg-[#0a2d5e] text-white p-6 rounded-t-lg">
        <h2 className="text-2xl font-bold text-center mb-2">
          Conference Participants
        </h2>
        <p className="text-center text-gray-300 mb-0">
          Total Participants: {sortedNames.length}
        </p>
      </div>

      <div className="bg-[#f0f4f8] border border-[#d0d8e2] rounded-b-lg shadow-md p-6">
        {Object.keys(groupedNames)
          .sort()
          .map((letter) => (
            <div key={letter} className="mb-6">
              <div className="flex items-center mb-2">
                <div className="bg-[#0a2d5e] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  {letter}
                </div>
                <div className="h-px bg-[#d0d8e2] flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedNames[letter].map((name, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-md shadow-sm border border-[#e0e7ef] hover:shadow-md transition-shadow"
                  >
                    <p className="text-[#0a2d5e] font-medium">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo, SetStateAction } from "react";
import commitee from "./commitees.json";
import Flag from "react-world-flags";
import { Search, ChevronLeft, ChevronRight, Filter, X } from "lucide-react";

export default function CommitteeSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [filters, setFilters] = useState({
    country: "",
    letter: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  const countries = useMemo(() => {
    const uniqueCountries = Array.from(
      new Set(commitee.researchers.map((r) => r.country))
    ).sort();
    return ["All Countries", ...uniqueCountries];
  }, []);

  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredResearchers = useMemo(() => {
    return commitee.researchers.filter((researcher) => {
      const matchesSearch =
        researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        researcher.university.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry =
        !filters.country ||
        filters.country === "All Countries" ||
        researcher.country === filters.country;

      const firstLetter = researcher.name.charAt(0).toUpperCase();
      const matchesLetter =
        !filters.letter ||
        (filters.letter === "#" && /[^A-Za-z]/.test(firstLetter)) ||
        firstLetter === filters.letter;

      return matchesSearch && matchesCountry && matchesLetter;
    });
  }, [searchTerm, filters]);

  const totalPages = Math.ceil(filteredResearchers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResearchers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const resetFilters = () => {
    setFilters({ country: "", letter: "" });
    setCurrentPage(1);
  };

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setCurrentPage(1);
  };

  return (
    <section className="w-full py-8 md:py-12 text-black">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6 md:mb-8">
          Scientific Committee
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-primary"></div>
        </h2>

        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name or university..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/80 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                aria-label="Search committee members"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Filter Options</h3>
                {(filters.country || filters.letter) && (
                  <button
                    onClick={resetFilters}
                    className="text-sm flex items-center gap-1 text-red-500 hover:text-red-700"
                  >
                    <X size={14} /> Clear filters
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4 ">
                <div>
                  <label className="block text-sm font-medium mb-1 ">
                    Country
                  </label>
                  <select
                    value={filters.country}
                    onChange={(e) =>
                      handleFilterChange("country", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/80"
                  >
                    <option value="">All Countries</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Letter
                  </label>
                  <div className="flex flex-wrap gap-1">
                    {alphabet.map((letter) => (
                      <button
                        key={letter}
                        onClick={() =>
                          handleFilterChange(
                            "letter",
                            letter === filters.letter ? "" : letter
                          )
                        }
                        className={`w-7 h-7 flex items-center justify-center rounded ${
                          filters.letter === letter
                            ? "bg-primary text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredResearchers.length > 0 ? indexOfFirstItem + 1 : 0} -{" "}
          {Math.min(indexOfLastItem, filteredResearchers.length)} of{" "}
          {filteredResearchers.length} members
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-semibold w-[100px]">
                    Country
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-semibold w-[350px]">
                    Name
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-semibold w-[400px]">
                    University
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((researcher, index) => (
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
                    <td className="px-4 md:px-6 py-3 md:py-4 font-medium w-[350px]">
                      {researcher.name}
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-600 w-[350px]">
                      {researcher.university}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:hidden space-y-4">
          {currentItems.map((researcher, index) => (
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
              onClick={() => {
                setSearchTerm("");
                resetFilters();
              }}
              className="mt-2 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2"
            >
              Clear search
            </button>
          </div>
        )}

        {filteredResearchers.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Items per page:</label>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded p-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={`w-8 h-8 mx-1 rounded-md ${
                        currentPage === pageNum
                          ? "bg-primary text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <span className="mx-1">...</span>
                )}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <button
                    onClick={() => paginate(totalPages)}
                    className="w-8 h-8 mx-1 rounded-md border border-gray-300 hover:bg-gray-100"
                  >
                    {totalPages}
                  </button>
                )}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

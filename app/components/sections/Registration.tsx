export default function RegistrationSection() {

  const fees = [
    {
      category: "Local Participant (DZA)",
      ieeeMember: "10000 DZD",
      ieeeStudentMember: "5000 DZD",
      nonMember: "15000 DZD",
      studentNonMember: "10000 DZD",
      virtualParticipation: "15000 DZD",
    },
    {
      category: "International Participant (€)",
      ieeeMember: "100 €",
      ieeeStudentMember: "50 €",
      nonMember: "150 €",
      studentNonMember: "100 €",
      virtualParticipation: "150 €",
    },
  ];

  return (
      <div className="bg-background w-full">
        <div className="container mx-auto max-w-[1200px]">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight tracking-tighter bg-clip-text text-primary mb-10">
            Registration Fees
          </h2>

          {/* Fees Table */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                        IEEE Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                        IEEE Student Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Non-Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Student Non-Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Virtual Participation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {fees.map((fee, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                          {fee.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-black">
                          {fee.ieeeMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-black">
                          {fee.ieeeStudentMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-black">
                          {fee.nonMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-black">
                          {fee.studentNonMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-black">
                          {fee.virtualParticipation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Additional Text */}
          <div className="mt-8 text-center text-gray-600 mb-10">
            <p>
              If you have any comments or requests and for submit the full papers, contact the conference secretariat to:{" "}
              <a href="mailto:icateee2025@univ-msila.dz" className="text-primary hover:underline">
                icateee2025@univ-msila.dz
              </a>
            </p>
          </div>
        </div>
      </div>
  );
}
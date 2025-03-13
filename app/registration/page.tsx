import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function RegistrationPage() {
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
      <div className="bg-background py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-4xl mt-44">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-8">
            Registration Fees
          </h2>

          {/* Fees Table */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-bold text-primary">
                Registration Categories
              </h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IEEE Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IEEE Student Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Non-Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Non-Member
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Virtual Participation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {fees.map((fee, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {fee.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {fee.ieeeMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {fee.ieeeStudentMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {fee.nonMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {fee.studentNonMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
          <div className="mt-8 text-center text-gray-600">
            <p>
              If you have any comments or requests and for submit the full papers, contact the conference secretariat to:{" "}
              <a href="mailto:icateee2025@univ-msila.dz" className="text-primary hover:underline">
                icateee2025@univ-msila.dz
              </a>
            </p>
            <p className="mt-2">
              ICATEEE2025 website:{" "}
              <a
                href="https://www.univ-msila.dz/icateee2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.univ-msila.dz/icateee2025/
              </a>
            </p>
          </div>
        </div>
      </div>
  );
}
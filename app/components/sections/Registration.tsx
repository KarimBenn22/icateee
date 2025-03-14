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
    <section className="w-full px-[62px] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Registration Fees
          </h2>
          <p className="mt-2 text-muted-foreground text-black">
            Conference registration fees for different categories of
            participants
          </p>
        </div>

        {/* Fees Table - Desktop */}
        <div className="hidden md:block bg-primary shadow-md rounded-lg overflow-hidden border border-primary/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10">
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    IEEE Member
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    IEEE Student Member
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Non-Member
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Student Non-Member
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Virtual Participation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees.map((fee, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-foreground"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {fee.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {fee.ieeeMember}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {fee.ieeeStudentMember}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {fee.nonMember}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {fee.studentNonMember}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {fee.virtualParticipation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fees Cards - Mobile */}
        <div className="md:hidden space-y-6">
          {fees.map((fee, index) => (
            <div
              key={index}
              className="bg-foreground rounded-lg shadow-md border border-primary/20 overflow-hidden"
            >
              <div className="bg-primary px-4 py-3 ">
                <h3 className="font-medium text-foreground">{fee.category}</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    IEEE Member
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {fee.ieeeMember}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    IEEE Student Member
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {fee.ieeeStudentMember}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Non-Member
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {fee.nonMember}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Student Non-Member
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {fee.studentNonMember}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm font-medium text-gray-600">
                    Virtual Participation
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {fee.virtualParticipation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Text */}
        <div className="mt-8 text-center text-gray-600 mb-10">
          <p>
            If you have any comments or requests and for submit the full papers,
            contact the conference secretariat at:{" "}
            <a
              href="mailto:icateee2025@univ-msila.dz"
              className="text-primary hover:underline font-medium"
            >
              icateee2025@univ-msila.dz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

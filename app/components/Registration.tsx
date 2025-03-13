export default function Registration() {
  const localFees = [
    { id: 1, category: "IEEE Member", price: "10000 DZD" },
    { id: 2, category: "IEEE Student Member", price: "5000 DZD" },
    { id: 3, category: "Non-Member", price: "15000 DZD" },
    { id: 4, category: "Student Non-Member", price: "10000 DZD" },
    { id: 5, category: "Virtual Participation", price: "15000 DZD" },
  ];

  const internationalFees = [
    { id: 1, category: "IEEE Member", price: "100 €" },
    { id: 2, category: "IEEE Student Member", price: "50 €" },
    { id: 3, category: "Non-Member", price: "150 €" },
    { id: 4, category: "Student Non-Member", price: "100 €" },
    { id: 5, category: "Virtual Participation", price: "150 €" },
  ];

  
    return (
      <div className="bg-background py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight tracking-tighter
           bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-12">
            Registration Fees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-2xl overflow-hidden transform transition-all hover:scale-105
             hover:shadow-3xl ">
              <div className="bg-gradient-to-r from-primary to-primary/90 p-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  Local Participant (DZA)
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {localFees.map((fee) => (
                    <div
                      key={fee.id}
                      className="flex justify-between items-center bg-gray-50 p-4 hover:bg-gray-100 transition-colors
                       duration-300 border-l-4 border-primary">
                      <span className="text-gray-700 font-medium">
                        {fee.category}
                      </span>
                      <span className="text-primary font-bold">{fee.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  


  
            <div className="bg-white shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl">
              <div className="bg-gradient-to-r from-primary to-primary/90 p-6">
                <h3 className="text-2xl font-bold text-white text-center">
                International Participant (€)
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {internationalFees.map((fee) => (
                    <div
                      key={fee.id}
                      className="flex justify-between items-center bg-gray-50 p-4 hover:bg-gray-100 transition-colors
                       duration-300 border-l-4 border-primary">
                      <span className="text-gray-700 font-medium">
                        {fee.category}
                      </span>
                      <span className="text-primary font-bold">{fee.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
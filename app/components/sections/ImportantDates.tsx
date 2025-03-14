interface DateItem {
  event: string;
  date: string;
  month?: string;
  day?: string;
}

export default function ImportantDatesSection() {
  const dates: DateItem[] = [
    {
      event: "Deadline for Full Paper submission",
      date: "July 31, 2025",
      month: "JUL",
      day: "31",
    },
    {
      event: "Deadline for Tutorial and Workshop proposal",
      date: "July 31, 2025",
      month: "JUL",
      day: "31",
    },
    {
      event: "Notification of Acceptance",
      date: "September 15, 2025",
      month: "SEP",
      day: "15",
    },
    {
      event: "Deadline for Camera Ready",
      date: "September 30, 2025",
      month: "SEP",
      day: "30",
    },
  ];

  return (
    <section className="w-full">
      <div className="">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Important Dates
          </h2>
          <p className="mt-2 text-gray-800">
            Please note these key deadlines for your submissions
          </p>
        </div>

        <div className="mx-auto max-w-[1200px]">
          <div className="">
            {dates.map((item, index) => (
              <div
                key={index}
                className=""
              >
                <div className="ml-8 flex flex-col">
                  <div>
                    <div className="flex space-x-4 items-center justify-center bg-white border-l-4 border-l-[#1a4480] border-t border-r border-b border-[#dfe1e2] shadow-sm px-5">
                      <span className="font-medium text-[#71767a] mt-1">
                        {item.month}
                      </span>
                      <span className="text-4xl font-bold text-[#1a4480]">
                        {item.day}
                      </span>
                      <span className="text-[#71767a] mt-1">2025</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 border-l-4 border-l-[#1a4480] border-t border-r border-b border-[#dfe1e2] shadow-sm h-full">
                    <h3 className="text-xl font-semibold text-[#112244] mb-2">
                      {item.event}
                    </h3>
                    <p className="text-[#3d4551]">{item.date}</p>
                    <div className="mt-4 h-0.5 w-16 bg-[#1a4480]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

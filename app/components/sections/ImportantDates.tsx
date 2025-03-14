import { CalendarIcon } from "lucide-react";
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
    <section className="w-full py-12 md:py-16 lg:py-20 flex items-center justify-center">
      <div className="container px-24 md:px-4 md:px-6 ">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Important Dates
          </h2>
          <p className="mt-2 text-muted-foreground text-bl text-black">
            Please note these key deadlines for your submissions
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dates.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-primary/20 bg-primary shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-center bg-primary/10 p-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-[#fff]/70">
                      {item.month}
                    </span>
                    <span className="text-4xl font-bold text-[#fff] ">
                      {item.day}
                    </span>
                    <span className="text-sm text-[#fff]/70">2025</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 bg-foreground">
                  <div className="mb-2 flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm text-gray-600">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.event}
                  </h3>
                  <div className="mt-auto">
                    <div className="h-0.5 w-16 bg-primary transition-all group-hover:w-20"></div>
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

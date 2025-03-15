import Link from "next/link";
import { Mail, Calendar, MapPin } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "COMMITTEES", path: "/committees" },
    { id: 3, name: "SUBMISSION", path: "/submission" },
    { id: 4, name: "SPEAKERS", path: "/speakers" },
    { id: 5, name: "CALL FOR PAPERS", path: "/CFP_ICATEEE2025_2.pdf" },
  ];
  const dates = [
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
  const today = new Date();
  const closestDate = dates.reduce((prev, curr) => {
    const prevDate = new Date(prev.date);
    const currDate = new Date(curr.date);
    const prevDiff = Math.abs(today.getTime() - prevDate.getTime());
    const currDiff = Math.abs(today.getTime() - currDate.getTime());
    return prevDiff < currDiff ? prev : curr;
  });
  return (
    <footer className="bg-primary w-full text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="inline-block mb-6">
              <h3 className="text-2xl font-bold relative">
                ICATEEE Conference 2025
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-foreground/50 rounded-full"></span>
              </h3>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3" id="contact">
                <Mail className="h-5 w-5 mt-0.5 text-primary-foreground/70" />
                <a
                  href="mailto:icateee2025@univ-msila.dz"
                  className="text-primary-foreground"
                >
                  <span>icateee2025@univ-msila.dz</span>
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/70" />
                <a
                  href="https://www.openstreetmap.org/?mlat=35.7063&mlon=4.8667#map=16/35.713451/4.524093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <span>University of M'sila, M'sila, Algeria</span>
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <span className="block font-medium">{closestDate.date}</span>
                  <span className="text-sm text-primary-foreground/70">
                    {closestDate.event}: {closestDate.day}, {closestDate.month}
                  </span>
                </div>
              </div>

              <p className="text-primary-foreground/80 max-w-md pt-2">
                Join us for the third edition of the ICATEEE Conference 25 to
                learn more about innovation and research in the Advanced
                Technology in Electronic and Electrical Engineering field.
              </p>
            </div>
          </div>

          <div className="block md:hidden flex items-center justify-center">
            <div className="h-1 w-2/3 bg-foreground/50 rounded-full "></div>
          </div>

          <div className="md:pl-10 md:border-l md:border-primary-foreground/10">
            <div className="inline-block mb-6">
              <h3 className="text-2xl font-bold relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-foreground/50 rounded-full"></span>
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  <Link
                    href={link.path}
                    className="inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 mr-2 transition-all duration-300 group-hover:bg-primary-foreground group-hover:scale-125"></span>
                    <span className="transition-colors duration-300 group-hover:text-white text-lg">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center md:text-left text-primary-foreground/70">
            © {new Date().getFullYear()} ICATEEE Conference. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

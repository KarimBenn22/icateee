import Link from "next/link";
//
export default function Footer() {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "COMMITTEES", path: "/committees" },
    { id: 3, name: "SUBMISSION", path: "/submission" },
    { id: 4, name: "SPEAKERS", path: "/speakers" },
    { id: 5, name: "CALL FOR PAPERS", path: "/CFP_ICATEEE2025_2.pdf" },
  ];
  return (
    <footer className="bg-primary w-full">
      <div className="grid grid-cols-2 gap-8 container mx-auto px-4 py-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold ">ICATEEE Conference 2025</h3>
          <p className="text-slate-400 max-w-xs">
            Join us for the premier conference on innovation and research in our
            field.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <Link href={link.path} className="relative inline-block">
                  {link.name}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground mt-12 p-8 text-center text-foreground w-full">
        <p className="text-center">
          © {new Date().getFullYear()} Conference. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

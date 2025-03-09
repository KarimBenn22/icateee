import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { id: 1, name: "Home", path: "#" },
    { id: 2, name: "COMMITEES", path: "#" },
    { id: 3, name: "SUBMISSION", path: "#" },
    { id: 4, name: "SPEAKERS", path: "#" },
    { id: 5, name: "CALL FOR PAPERS", path: "#" },
  ];
  return (
    <footer className="bg-primary w-full ">
      <div className="grid grid-cols-2 gap-8 container mx-auto p-4">
        <div className="space-y-4">
          <h3 className="text-xl font-bold ">Conference 2025</h3>
          <p className="text-slate-400 max-w-xs">
            Join us for the premier conference on innovation and research in our
            field.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className="text-foreground inline-block py-1 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground mt-12 p-8 text-center text-foreground w-full mx-auto">
        <p className="text-center">
          © {new Date().getFullYear()} Conference 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
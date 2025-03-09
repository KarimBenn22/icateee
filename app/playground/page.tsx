import Link from "next/link"
// Todo: REFACTOR THIS LATER
export default function Playground() {
  return (
    
    <main className="flex w-screen h-screen">
      <nav className="w-full bg-primary h-40 font-semibold text-medium tracking-wider">
        <div className="w-full h-25"></div>
        <ul className="flex gap-4 w-full justify-center">
          <li className="p-2 relative group">
            <Link href={""} className="relative inline-block">
              HOME
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={""} className="relative inline-block">
              COMMITEES
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={""} className="relative inline-block">
              SUBMISSION
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={""} className="relative inline-block">
              SPEAKERS
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={""} className="relative inline-block">
              CALL FOR PAPERS
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 relative group">
            <Link href={""} className="relative inline-block">
              DISCOVER
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
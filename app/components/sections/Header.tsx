import { CalendarDays, MapPin } from "lucide-react"

export default function HeaderSection() {
  return (
    <div className="bg-background py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
          <CalendarDays className="h-4 w-4" />
          <span>December 15-18, 2025</span>
          <span className="mx-2">•</span>
          <MapPin className="h-4 w-4" />
          <span>Algeria, M'sila</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-center leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          International Conference on Electronics Energy and Measurement
        </h1>

        <p className="text-muted-foreground text-lg text-center max-w-2xl text-[#1D1D1B]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae reiciendis asperiores molestiae minima
          totam tempore consectetur labore! Aliquam error explicabo, molestiae sint maiores.
        </p>
      </div>
    </div>
  )
}


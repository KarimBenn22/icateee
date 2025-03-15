import Image from "next/image";

function SponsorsSection() {
  return (
    <div className="w-full px-[62px] pb-10">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
          Conference Sponsors
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-primary"></div>
        </h2>
        <p className="mt-2 text-muted-foreground text-bl text-black">
          Our conference is made possible thanks to the support of the following
          organizations
        </p>
      </div>
      <div className="flex flex-col gap-16 md:gap-1 py-8 items-center justify-evenly w-full md:flex-row rounded-lg border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
        <Image
          src="/uni-logo-f.png"
          alt="University of Mohammed Boudiaf - M'sila"
          width={200}
          height={200}
        />
        <Image
          src="/ieee-f.png"
          alt="IEEE - Algeria's Section"
          width={400}
          height={200}
        />
      </div>
    </div>
  );
}

export { SponsorsSection };

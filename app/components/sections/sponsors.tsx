import Image from "next/image";

function SponsorsSection() {
  return (
    <div className="w-full px-[20px] pb-10 md:px-[62px]">
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
      <div className="md:flex flex-col gap-16 md:gap-1 py-8 items-center justify-evenly w-full md:flex-row hidden">
        <p className="text-primary font-black">Financial Sponsor</p>
        <p className="text-primary font-black">Technical Sponsor</p>
      </div>
      <div className="flex flex-col gap-16 md:gap-1 py-8 items-center justify-evenly w-full md:flex-row rounded-lg border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
        <div className="space-y-4">
          <p className="text-primary font-black text-center md:hidden">
            Financial Sponsor
          </p>
          <Image
          src="/uni-logo-f.png"
          alt="University of Mohammed Boudiaf - M'sila"
          width={200}
          height={200}
        />
        </div>
        <div className="space-y-4">
          <p className="text-primary font-black text-center md:hidden">
            Technical Sponsor
          </p>
          <Image
          src="/ieee-f.png"
          alt="IEEE - Algeria's Section"
          width={400}
          height={200}
        />
        </div>
      </div>
    </div>
  );
}

export { SponsorsSection };

function SponsorsSection() {
  return (
    <div className="container mx-auto text-center space-y-10 mb-10">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
        Conference Sponsors
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-primary"></div>
      </h2>
      <div className="flex flex-col gap-16 py-8 items-center justify-evenly w-full md:flex-row rounded-lg border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
        <img
          src="/uni-logo-f.png"
          alt="University of Mohammed Boudiaf - M'sila"
        />
        <img src="/ieee-f.png" alt="IEEE - Algeria's Section" />
      </div>
    </div>
  );
}

export { SponsorsSection };

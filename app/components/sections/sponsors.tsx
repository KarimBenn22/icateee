function SponsorsSection() {
  return (
    <div className="container mx-auto text-center space-y-10 mb-10">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
        Conference Sponsors
      </h2>
      <div className="flex items-center justify-evenly w-full">
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

import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Globe,
  Lightbulb,
} from "lucide-react";

export default function Topics() {
  const signalProcessingTopics = [
    "Pattern recognition & Computer vision",
    "Radar and remote sensing",
    "Signal, image and speech processing",
    "Circuits and embedded Systems",
    "IoT & its applications",
    "Power Electronics and its applications",
    "Transmission and Distribution",
    "Telecommunication systems",
    "Antenna and Wave propagation",
    "Electrical Machine drives",
    "Fault detection & diagnosis",
  ];

  const advancedTechTopics = [
    "Electromagnetics & CND",
    "Renewable Energy Systems & environment",
    "Smart grids Technologies & Applications",
    "Microelectronics and its applications",
    "Nanotechnology and Nanomaterials",
    "Mathematical Modeling for electrical engineering",
    "Materials in electronics and electrical engineering",
    "Mobile Communication Networks & IoT Evolution",
    "Electrical networks & High voltage engineering",
    "Advanced Control, Automation & Robotics",
  ];

  return (
    <div className="flex gap-4 w-full flex-col justify-center">
      <div className="flex items-center justify-center mb-3">
        <div className="h-px w-12 bg-primary"></div>
        <h2 className="text-lg md:text-xl font-semibold mx-3 text-black">
          The main aim of the{" "}
          <span className="font-bold text-primary">ICATEEE2025</span>
        </h2>
        <div className="h-px w-12 bg-primary/70"></div>
      </div>
      <p className="text-sm md:text-base mb-4 max-w-3xl mx-auto text-primary">
        is to bring together all potential participants: from industry, experts,
        researchers, academics, manufacturers and suppliers of several countries
        to review the latest developments that achieved in these areas, and to
        exchange research ideas in Electronic and Electrical engineering and
        theirs wide applications.
      </p>

      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center bg-secondary/70 rounded-full text-primary p-2 px-4 font-medium mb-6">
          <BookOpen className="h-5 w-5 mr-2" />
          Topics of Interest
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10 w-[90%] mx-auto">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="bg-primary p-4 rounded-t-lg">
            <h3 className="font-semibold text-white flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Signal Processing & Communications
            </h3>
          </div>
          <div className="p-4 space-y-2">
            {signalProcessingTopics.map((topic, i) => (
              <p key={i} className="text-gray-700">
                • {topic}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="bg-primary p-4 rounded-t-lg">
            <h3 className="font-semibold text-white flex items-center">
              <Lightbulb className="h-5 w-5 mr-2" />
              Advanced Technologies & Applications
            </h3>
          </div>
          <div className="p-4 space-y-2">
            {advancedTechTopics.map((topic, i) => (
              <p key={i} className="text-gray-700">
                • {topic}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 w-full">
        <div className="relative group w-[300px] py-4 md:px-4 md:py-2 md:w-fit flex items-center gap-3 justify-center bg-gradient-to-br from-[#003875] to-[#013976] text-white p-2 rounded-full overflow-hidden border border-zinc-700 hover:ring-1 hover:ring-zinc-600 hover:shadow-xl duration-300">
          <div className="h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />

          <div className="text-left px-2">
            <div className="text-sm md:text-base">
              {" "}
              <Calendar className="h-5 w-5 inline mr-2" />
              15-16 December 2025
            </div>
          </div>
        </div>
        <div className="relative group w-[300px] py-4 md:px-4 md:py-2 md:w-fit  flex items-center gap-3 justify-center bg-gradient-to-br from-[#003875] to-[#013976] text-white p-2 rounded-full overflow-hidden border border-zinc-700 hover:ring-1 hover:ring-zinc-600 hover:shadow-xl duration-300">
          <div className="h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />
          <div className="text-left px-2">
            <div className="text-sm md:text-base">
              <MapPin className="h-5 w-5 inline mr-2" /> M&apos;sila, ALGERIA
            </div>
          </div>
        </div>
        <div className="relative group w-[300px] py-4 md:px-4 md:py-2 md:w-fit  flex items-center gap-3 justify-center bg-gradient-to-br from-[#003875] to-[#013976] text-white p-2 rounded-full overflow-hidden border border-zinc-700 hover:ring-1 hover:ring-zinc-600 hover:shadow-xl duration-300">
          <div className="h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />

          <div className="text-left px-2">
            <div className="text-sm md:text-base">
              {" "}
              <Users className="h-5 w-5 inline mr-2" />
              IEEE Algeria Section
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

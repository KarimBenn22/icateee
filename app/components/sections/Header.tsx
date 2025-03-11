import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Globe,
  Lightbulb,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import UnivImage from "@/public/univ-msila.jpg";

export default function ConferenceHeader() {
  return (
    <div className="relative overflow-hidden px-5">
      <div className="relative max-w-5xl mx-auto px-4 py-8 text-center">
        {/* Conference logo/icon */}
        <div className="flex justify-center mb-4">
          <div
            className="inline-flex items-center justify-center p-3 rounded-full shadow-lg"
            style={{
              backgroundColor: "var(--primary-500)",
              color: "var(--foreground)",
            }}
          >
            <Cpu className="h-8 w-8" />
          </div>
        </div>

        <div className="mb-8 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-primary">
            The 2<sup>nd</sup> International Conference of
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-primary">
            Advanced Technology in Electronic and
            <br />
            Electrical Engineering (ICATEEE2025)
          </h1>
          <div className="text-primary flex items-center justify-center space-x-2 text-lg md:text-xl font-semibold">
            <Calendar className="h-5 w-5" />
            <p>15th to 16th December 2025</p>
            <span className="mx-2">•</span>
            <MapPin className="h-5 w-5" />
            <p>M&apos;sila, ALGERIA</p>
          </div>
        </div>

        <div className="p-6  shadow-sm mb-8 bg-primary/30">
          <p className="text-sm md:text-base text-black">
            Hosted by the Faculty of Technology-M&apos;sila University, the IEEE
            Algeria Section, the{" "}
            <span className="font-medium text-primary">
              International Conference of Advanced Technology in Electronic and
              Electrical Engineering (ICATEEE2025)
            </span>{" "}
            will be held from 15th to 16th December 2025 at M&apos;sila,
            Algeria.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="h-px w-12 bg-primary"></div>
            <h2 className="text-lg md:text-xl font-semibold mx-3 text-black">
              The main aim of the{" "}
              <span className="font-bold text-primary">ICATEEE2025</span>
            </h2>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <p className="text-sm md:text-base mb-4 max-w-3xl mx-auto text-primary">
            is to bring together all potential participants: from industry,
            experts, researchers, academics, manufacturers and suppliers of
            several countries to review the latest developments that achieved in
            these areas, and to exchange research ideas in Electronic and
            Electrical engineering and theirs wide applications.
          </p>

          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center bg-primary/30 text-primary p-2  font-medium mb-6">
              <BookOpen className="h-5 w-5 mr-2" />
              Topics of Interest
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
          <div className="p-5  shadow-sm bg-foreground ">
            <h3
              className="font-semibold mb-3 flex items-center"
              style={{ color: "var(--primary-500)" }}
            >
              <Globe className="h-5 w-5 mr-2" />
              Signal Processing & Communications
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Pattern recognition & Computer vision
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Radar and remote sensing</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Signal, image and speech processing
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Circuits and embedded Systems</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">IoT & its applications</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Power Electronics and its applications
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Transmission and Distribution</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Telecommunication systems</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Antenna and Wave propagation</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Electrical Machine drives</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Fault detection & diagnosis</p>
              </div>
            </div>
          </div>
          <div className="p-5  bg-foreground shadow-sm ">
            <h3 className="font-semibold mb-3 flex items-center text-primary">
              <Lightbulb className="h-5 w-5 mr-2" />
              Advanced Technologies & Applications
            </h3>
            <div className="space-y-2">
              {" "}
              className="text-black"
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Electromagnetics & CND</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Renewable Energy Systems & environment
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Smart grids Technologies & Applications
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Microelectronics and its applications
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">Nanotechnology and Nanomaterials</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Mathematical Modeling for electrical engineering
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Materials in electronics and electrical engineering
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Mobile Communication Networks & IoT Evolution
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Electrical networks & High voltage engineering
                </p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <p className="text-black">
                  Advanced Control, Automation & Robotics
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
          <div className="flex items-center justify-center bg-primary/30 text-primary gap-2 p-4 shadow-sm ">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">
              15-16 December 2025
            </span>
          </div>
          <div className="flex items-center justify-center bg-primary/30 text-primary gap-2 p-4 shadow-sm ">
            <MapPin className="h-5 w-5" />
            <span
              className="font-medium"
              style={{ color: "var(--primary-500)" }}
            >
              M&apos;sila, ALGERIA
            </span>
          </div>
          <div className="flex items-center justify-center bg-primary/30 text-primary gap-2 p-4  shadow-sm ">
            <Users className="h-5 w-5" />
            <span className="font-medium">IEEE Algeria Section</span>
          </div>
        </div>

        {/* Image section */}
        <div className="mx-auto mb-8 flex flex-col gap-5 md:flex-row md:gap-0 justify-evenly items-center">
          <Image
            src={UnivImage}
            alt="University image"
            width={350}
            height={350}
            className="object-contain drop-shadow-2xl"
          />
          <Image
            src={UnivImage}
            alt="University image"
            width={350}
            height={350}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

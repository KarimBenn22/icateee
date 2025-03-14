import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Globe,
  Lightbulb,
} from "lucide-react";
import styles from "./carousel.module.css";

/**
 *
 * Header banner, Contains the title of the conference and other important info
 * ex(Date, Location)
 *
 */

function HeaderBanner() {
  return (
    <div className="text-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
        The 2<sup>nd</sup> International Conference of
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
        Advanced Technology in Electronic and
        <br />
        Electrical Engineering (ICATEEE2025)
      </h1>
      <div className="flex items-center justify-center space-x-2 md:text-xl font-semibold">
        <Calendar className="h-5 w-5" />
        <p>15th to 16th December 2025</p>
        <span className="mx-2">•</span>
        <MapPin className="h-5 w-5" />
        <p>M&apos;sila, ALGERIA</p>
      </div>
    </div>
  );
}

/**
 * Carousel component (Currently only supports 2 images and is CSS only)
 */

function CarouselPlayground() {
  return (
    <div
      className={styles.slider}
      style={{ "--width": "100vw", "--height": "300px" } as React.CSSProperties}
    >
      <div
        className={styles.tinter}
        style={{ "--width": "100%", "--height": "100%" } as React.CSSProperties}
      ></div>
      <div className="w-full h-full absolute z-101 flex items-center justify-center">
        <HeaderBanner></HeaderBanner>
      </div>
      <img
        src="https://www.univ-msila.dz/site/wp-content/uploads/2023/09/umbm.jpg"
        alt=""
        aria-hidden
        className=""
        style={
          {
            "--height": "100%",
            "--width": "100%",
            "--index": 0,
          } as React.CSSProperties
        }
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2b/La_facult%C3%A9_de_technologie_%28Univ-Msila%29.JPG"
        alt=""
        aria-hidden
        className=""
        style={
          {
            "--height": "100%",
            "--width": "100%",
            "--index": 1,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

/**
 *
 * Main Component
 *
 */

export default function ConferenceHeader() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="relative mx-auto text-center flex items-center justify-center flex-col">
        <CarouselPlayground />
        <div className="p-6 mb-8 text-center w-full bg-secondary">
          <p className="text-sm md:text-base mx-auto max-w-4xl text-black">
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
        <div className="flex gap-4 w-full flex-col justify-center max-w-[1200px]">
          <div className="">
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-lg md:text-xl font-semibold mx-3 text-black">
                The main aim of the{" "}
                <span className="font-bold text-primary">ICATEEE2025</span>
              </h2>
              <div className="h-px w-12 bg-primary/70"></div>
            </div>
            <p className="text-sm md:text-base mb-4 max-w-3xl mx-auto text-primary">
              is to bring together all potential participants: from industry,
              experts, researchers, academics, manufacturers and suppliers of
              several countries to review the latest developments that achieved
              in these areas, and to exchange research ideas in Electronic and
              Electrical engineering and theirs wide applications.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center bg-secondary/70 rounded-full text-primary p-2 px-4  font-medium mb-6">
              <BookOpen className="h-5 w-5 mr-2" />
              Topics of Interest
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
            <div className="shadow-sm bg-foreground">
              <div className="bg-primary p-4 flex items-center justify-center">
                <h3 className="font-semibold flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Signal Processing & Communications
                </h3>
              </div>
              <div className="space-y-2 p-4">
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
            <div className="bg-foreground shadow-sm">
              <div className="bg-primary p-4 flex items-center justify-center">
                <h3 className="font-semibold flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Advanced Technologies & Applications
                </h3>
              </div>
              <div className="space-y-2 p-4">
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
            <div className="flex items-center justify-center bg-secondary/70 text-primary gap-2 p-4 shadow-sm rounded-full">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium text-primary">
                15-16 December 2025
              </span>
            </div>
            <div className="flex items-center justify-center bg-secondary/70 text-primary gap-2 p-4 shadow-sm rounded-full">
              <MapPin className="h-5 w-5" />
              <span
                className="font-medium"
                style={{ color: "var(--primary-500)" }}
              >
                M&apos;sila, ALGERIA
              </span>
            </div>
            <div className="flex items-center justify-center bg-secondary/70 text-primary gap-2 p-4 shadow-sm rounded-full">
              <Users className="h-5 w-5" />
              <span className="font-medium">IEEE Algeria Section</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

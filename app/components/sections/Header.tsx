import {
  Calendar,
  MapPin
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
    <>
      <div className="mb-8 text-white">
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
    </>
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
        <div className="p-6 mb-8 bg-secondary">
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
      </div>
    </div>
  );
}

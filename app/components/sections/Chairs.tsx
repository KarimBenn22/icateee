"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Maximize2, Minimize2 } from "lucide-react";
import chairs from "./chairs.json";

type CommitteeMember = {
  name: string;
  title: string;
  role: string;
  affiliation: string;
};

type CommitteeSection = {
  title: string;
  members: CommitteeMember[];
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

const CustomButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1.5 h-8",
    md: "text-sm px-4 py-2 h-10",
    lg: "text-base px-6 py-3 h-12",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const MemberCard = ({ member }: { member: CommitteeMember }) => {
  return (
    <div className="px-4 sm:px-6 py-4 transition-colors duration-200 hover:bg-blue-50/50 group">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/90 to-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm group-hover:shadow transition-shadow">
          {getInitials(member.name)}
        </div>
        <div className="flex-grow w-full sm:w-auto">
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.title} {member.name}
              </h3>
              <div className="text-sm text-primary font-medium mt-1">
                {member.role}
              </div>
            </div>
            <div className="text-sm text-gray-600">{member.affiliation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommitteeSection = ({
  section,
  isExpanded,
  onToggle,
}: {
  section: CommitteeSection;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [height, setHeight] = useState<number | "auto">(0);
  const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef) {
      setHeight(isExpanded ? contentRef.scrollHeight : 0);
    }
  }, [isExpanded, contentRef, section.members.length]);

  const handleTransitionEnd = () => {
    if (isExpanded) {
      setHeight("auto");
    }
  };

  return (
    <div className="bg-white shadow-md overflow-hidden border border-gray-100 rounded-lg">
      <button
        className={cn(
          "w-full bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-4",
          "flex justify-between items-center cursor-pointer transition-colors",
          "hover:from-primary/90 hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary/10 focus:ring-offset-2"
        )}
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`section-${section.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <h2 className="text-xl font-bold">{section.title}</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 transition-transform duration-300" />
        )}
      </button>

      <div
        id={`section-${section.title.replace(/\s+/g, "-").toLowerCase()}`}
        style={{
          height: typeof height === "number" ? `${height}px` : height,
          opacity: isExpanded ? 1 : 0,
          overflow: "hidden",
          transition: "height 0.3s ease, opacity 0.3s ease",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div ref={setContentRef} className="divide-y divide-gray-100">
          {section.members.map((member, memberIndex) => (
            <MemberCard key={memberIndex} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CommitteeOrganization() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(
    chairs.committeeSections.reduce((acc, section) => {
      acc[section.title] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleAll = (expanded: boolean) => {
    const newState = chairs.committeeSections.reduce((acc, section) => {
      acc[section.title] = expanded;
      return acc;
    }, {} as Record<string, boolean>);

    setExpandedSections(newState);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">
          Committee Chairs
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-primary"></div>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Our committee chairs lead the organization of the conference, ensuring
          its success through their expertise and dedication.
        </p>
      </div>

      <div className="flex justify-end mb-4 gap-2">
        <CustomButton
          variant="outline"
          size="sm"
          onClick={() => toggleAll(true)}
          className="flex items-center gap-1"
        >
          <Maximize2 className="h-4 w-4" />
          {!isMobile && <span>Expand All</span>}
        </CustomButton>
        <CustomButton
          variant="outline"
          size="sm"
          onClick={() => toggleAll(false)}
          className="flex items-center gap-1"
        >
          <Minimize2 className="h-4 w-4" />
          {!isMobile && <span>Collapse All</span>}
        </CustomButton>
      </div>

      <div className="space-y-4">
        {chairs.committeeSections.map((section, index) => (
          <CommitteeSection
            key={index}
            section={section}
            isExpanded={!!expandedSections[section.title]}
            onToggle={() => toggleSection(section.title)}
          />
        ))}
      </div>
    </div>
  );
}

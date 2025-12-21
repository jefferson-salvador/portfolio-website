"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-[#adb7be]">
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Tailwind</li>
        <li>MSSQL/ SQL Server</li>
        <li>GoLang</li>
        <li>REST API</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-[#adb7be]">
        <li>
          <b>Technological University of the Philippines - Manila (2022)</b>
          <ul className="list-inside pl-4 text-[#adb7be]">
            <li>- Bachelor of Science in Information Technology</li>
            <li>- Cum Laude Cumulative GPA 1.51(93%)</li>
            <li>- 3rd Place in C Language Competition</li>
            <li>- Dean’s Lister/ President’s Lister (2018 - 2022)</li>
          </ul>
        </li>
        <li className="mt-2">
          <b>Asian Institute of Computer Studies – Cavite (2018)</b>
          <ul className="list-inside pl-4 text-[#adb7be]">
            <li>- Information and Communications Technology</li>
            <li>- Valedictorian Cumulative GPA: 93.51</li>
            <li>- Best in Programming</li>
            <li>- Best Thesis Awardee</li>
            <li>- Best in Social Science</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4 text-[#adb7be]">
        <li>
          <b>
            Software Algo Solutions, LLC - Lost Angeles, California (2021 -
            Present)
          </b>
          <ul className="list-inside pl-4 text-[#adb7be]">
            <li>
              - Built and maintained end-to-end web applications using Next.js,
              TypeScript, React.js, Tailwind, Angular, C#, T-SQL, Go, Protocol
              Buffers, SQL Server, and REST/GRPC APIs, delivering scalable and
              maintainable full-stack solutions
            </li>
            <li>
              - Enhanced front-end performance and user satisfaction by
              developing responsive, accessible, and intuitive UIs with
              React.js, CSS, Material UI, and Bootstrap.
            </li>
            <li>
              - Contributed directly to business growth by developing 30% of a
              crypto-based application using ReactJS, Go, REST, GRPC, and MS SQL
              Server, helping generate $500,000 in revenue within 2 months.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-2xl"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#adb7be]">
            Versatile Full Stack Developer with deep technical expertise in
            TypeScript, ReactJS, Next.js, and Go. I specialize in creating
            end-to-end solutions that are not only visually intuitive but also
            highly performant and scalable.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

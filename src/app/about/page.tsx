import Section from "@/app/components/Section";
import CertCard from "../components/CertCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-2 gap-52 mt-8 justify-items-center">
          <div>
            <p className="text-md leading-relaxed text-justify">
              I am an undergraduate student in the University of Sri
              Jayewardenepura with a strong interest in Artificial Intelligence
              and Full-Stack Development. Currently, I am working on projects
              involving Agentic AI and n8n, where I design and automate
              intelligent workflows and build AI-driven systems that can make
              decisions and interact with multiple tools. I enjoy creating
              clean, user-focused web applications and turning ideas into
              practical, real-world solutions. Through academic projects and
              hands-on experimentation, I continuously explore modern
              technologies while strengthening my problem-solving and system
              design skills.
            </p>

            <div className="mt-6 text-md font-medium">
              <p>ghvidumini@gmail.com</p>
              <p>LinkedIn</p>
            </div>
          </div>

          <div className="bg-gray-200 w-96" />
        </div>
      </Section>

      <Section title="Certifications">
        <CertCard/>
      </Section>

      <Section title="Skills">
        <div className="grid grid-cols-3 gap-4 text-sm">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border px-4 py-2 rounded-md text-center">
              Web Development
            </div>
          ))}
        </div>
      </Section>

      <Section title="Achievements">
        <div className="grid grid-cols-2 justify-between mt-8">
          <div>
            <h3 className="font-semibold text-md mb-2">
              Finalists - DHACK 24 Designathon 
            </h3>
            <p className="text-md text-gray-600 mt-4">
              Selected as finalists in the UI/UX design competition.
            </p>
          </div>
          <Image 
            src="/competition.jpeg" 
            alt="DHACK 24 Designathon" 
            width={400} 
            height={100}
            className="rounded-md object-cover"
          />
        </div>
      </Section>
    </>
  );
}

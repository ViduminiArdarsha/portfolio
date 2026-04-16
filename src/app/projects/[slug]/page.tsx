import Section from "@/app/components/Section";
import Button from "@/app/components/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import projectDetails from "@/app/projectDetails.json";

type ProjectDetail = {
  slug: string;
  project_name: string;
  subHeading: string;
  githubUrl?: string;
  documentationUrl?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  introduction?: string;
  problem?: string;
  tech_stack?: string[];
  methodology?: {
    step: string;
    explanation: string;
  }[];
  challenges?: {
    sub_topic: string;
    explanation: string;
  }[];
  future_work?: string;
  conclusion?: string;
};

export default function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = (projectDetails as ProjectDetail[]).find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">{project.project_name}</h1>
            <p className="mt-2 text-xl text-gray-600">{project.subHeading}</p>
          </div>
          <Button href={project.githubUrl}>View GitHub</Button>
        </div>
      </Section>

      <Section>
        {project.heroImage && (
          <div className="mb-6 overflow-hidden rounded-md border border-gray-300 bg-gray-100">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              width={1000}
              height={200}
              className="w-full"
              priority
            />
          </div>
        )}

        {project.introduction && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-md mt-3 leading-relaxed text-gray-700">{project.introduction}</p>
          </div>
        )}

        {project.problem && (
          <div className="mt-8">
            <h2 className="mb-2 text-2xl font-semibold">Problem</h2>
            <p className="text-md mt-3 leading-relaxed text-gray-700">{project.problem}</p>
          </div>
        )}

        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-5 text-xl font-semibold">Tech Stack</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {project.tech_stack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-center text-gray-800"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.methodology && project.methodology.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">Methodology</h2>
            <div className="space-y-4">
              {project.methodology.map((item, index) => (
                <div
                  key={item.step}
                  className="relative rounded-md border border-gray-300 bg-white p-4 pl-14"
                >
                  <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-sm bg-black text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{item.step}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">Challenges</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {project.challenges.map((item) => (
                <div key={item.sub_topic} className="rounded-md border border-gray-300 bg-gray-100 p-4">
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{item.sub_topic}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.future_work && (
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">Future Work</h2>
            <p className="text-sm leading-relaxed text-gray-700">{project.future_work}</p>
          </div>
        )}

        {project.conclusion && (
          <div>
            <h2 className="mb-2 text-xl font-semibold">Conclusion</h2>
            <p className="text-sm leading-relaxed text-gray-700">{project.conclusion}</p>
          </div>
        )}
      </Section>

      <Section>
        <div className="flex justify-center">
          {project.documentationUrl ? (
            <Button href={project.documentationUrl}>Download Documentation</Button>
          ) : (
            <Button>Download Documentation</Button>
          )}
        </div>
      </Section>
    </>
  );
}

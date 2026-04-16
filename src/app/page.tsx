import Section from "@/app/components/Section";
import Button from "@/app/components/Button";
import ProjectCard from "@/app/components/ProjectCard";
import Tool from "./components/Tool";

export default function HomePage() {
  return (
    <>
      <Section>
        <h1 className="text-4xl max-w-3xl leading-snug mt-8">
          I am a passionate Software Engineering Intern interested in AI and
          Full Stack Development.
        </h1>

        <div className="flex gap-4 mt-8">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#fafafa"
            >
              <path d="M327.69-453.85h304.62v-60H327.69v60Zm0 115.39h304.62v-60H327.69v60Zm0 115.38h184.62v-60H327.69v60ZM252.31-100Q222-100 201-121q-21-21-21-51.31v-615.38Q180-818 201-839q21-21 51.31-21H570l210 210v477.69Q780-142 759-121q-21 21-51.31 21H252.31ZM540-620v-180H252.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v615.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-620H540ZM240-800v180-180V-160v-640Z" />
            </svg>
            View CV
          </Button>
          <Button href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#0f0f0f"
            >
              <path d="M184.62-160q-27.62 0-46.12-18.5Q120-197 120-224.62v-390.76q0-27.62 18.5-46.12Q157-680 184.62-680H360v-55.39q0-27.61 18.5-46.11t46.12-18.5h110.76q27.62 0 46.12 18.5Q600-763 600-735.39V-680h175.38q27.62 0 46.12 18.5Q840-643 840-615.38v390.76q0 27.62-18.5 46.12Q803-160 775.38-160H184.62Zm0-40h590.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-390.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H184.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v390.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69ZM400-680h160v-55.39q0-9.23-7.69-16.92-7.69-7.69-16.93-7.69H424.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.92V-680ZM160-200v-440 440Z" />
            </svg>
            Go to LinkedIn
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-2 gap-6">
          <ProjectCard slug="project-1" />
          <ProjectCard slug="project-2" />
          <ProjectCard slug="project-3" />
          <ProjectCard slug="project-4" />
        </div>

        <p className="flex gap-2 text-center justify-center text-sm mt-8 cursor-pointer">
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 -960 960 960"
            width="15px"
            fill="#0f0f0f"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </p>
      </Section>

      <Section title="Technologies">
        <Tool/>
      </Section>
    </>
  );
}

// import AboutMe from "./MainComponenets/AboutMe";
// // import HeadSection from "./MainComponenets/HeadSection";
// import Projects from "./MainComponenets/Projects";

// export default function Home() {
//   return (

//     <>
//     {/* <HeadSection/> */}
//      <Projects/>
//      <AboutMe/>
//     </>

//   );
// }

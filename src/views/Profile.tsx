import { useCycle } from "framer-motion";
import { ProjectsToggle } from "../components/ProjectsToggle.tsx";

const FilmFlixTags = [
  { label: "React", colour: "text-teal-700", bg: "bg-teal-200" },
  { label: "MUI", colour: "text-sky-700", bg: "bg-sky-200" },
  { label: "TypeScript", colour: "text-blue-700", bg: "bg-blue-200" },
];

const SaturdayTags = [
  { label: "Java", colour: "text-amber-700", bg: "bg-amber-200" },
  { label: "Springboot", colour: "text-emerald-700", bg: "bg-emerald-200" },
  { label: "MySQL", colour: "text-slate-700", bg: "bg-slate-200" },
  { label: "In Development", colour: "text-red-700", bg: "bg-red-200" },
];

export default function Profile() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div>
      <div className="flex flex-col min-w-[100vw] min-h-screen justify-center items-center bg-gray-200">
        <div className="w-max flex flex-col justify-center items-center">
          <div className="hidden md:block">
            <a href="http://filmflix.joshgbrown.me">
              <div
                className="w-[18vw] h-[18vw] rounded-full bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0
            data-[open=true]:scale-100 data-[open=true]:top-[25vh] data-[open=true]:left-[20vw] transition-all duration-1000 
            flex items-center justify-center data-[open=true]:delay-0 delay-500 ease-in-out shadow-lg flex-col gap-1 bg-white-500 
            hover:-translate-y-[calc(50%+1rem)] hover:scale-110 hover:bg-gray-200 hover:brightness-105 hover:duration-300"
                data-open={isOpen}
              >
                <h1 className="font-bold text-5xl">FilmFlix</h1>
                <div className="flex flex-row gap-1">
                  {FilmFlixTags.map((each) => (
                    <div
                      key={each.label}
                      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${each.bg} ${each.colour} rounded-full`}
                    >
                      {each.label}
                    </div>
                  ))}
                </div>
                <div className="text-sm p-2">
                  Front end application for a movie database
                </div>
              </div>
            </a>
            <div
              className="w-[15vw] h-[15vw] rounded-full bg-white fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-0
            data-[open=true]:scale-100 data-[open=true]:top-[70vh] data-[open=true]:right-[20vw] transition-all duration-1000 
            flex items-center justify-center data-[open=true]:delay-0 delay-500 ease-in-out shadow-lg flex-col gap-1"
              data-open={isOpen}
            >
              <h1 className="font-bold text-3xl">Saturday</h1>
              <div className="flex flex-wrap justify-center gap-1">
                {SaturdayTags.map((each) => (
                  <div
                    key={each.label}
                    className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${each.bg} ${each.colour} rounded-full`}
                  >
                    {each.label}
                  </div>
                ))}
              </div>
              <div className="text-sm p-2 text-center">
                A better way to play sports
              </div>
            </div>
            <div
              className="w-[18vw] h-[18vw] rounded-full bg-white fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-0
            data-[open=true]:scale-100 data-[open=true]:top-[25vh] data-[open=true]:right-[25vw] transition-all duration-1000 
            flex items-center justify-center data-[open=true]:delay-0 delay-500 ease-in-out shadow-lg"
              data-open={isOpen}
            >
              this is just a cool circle
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white items-center max-w-xs p-6 shadow-xl rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 animate-drop-bounce">
            <img
              src="/joshuabrown1080x1080.png"
              alt=""
              className="w-32 h-32 mx-auto object-cover rounded-full dark:bg-gray-500 aspect-square "
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Joshua Brown
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  Software Engineering Student
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="github"
                  href="https://github.com/jbr242"
                  aria-label="GitHub"
                  className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <img
                    src="github-mark.svg"
                    className="w-4 h-4 fill-current"
                  ></img>
                </a>

                <a
                  rel="instagram"
                  href="https://www.instagram.com/joshgbrown/"
                  aria-label="Instagram"
                  className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <img
                    src="instagram.png"
                    className="w-4 h-4 fill-current"
                    alt="Instagram Icon"
                  ></img>
                </a>
                <a
                  rel="email"
                  href="mailto:joshuagbrown57@gmail.com"
                  aria-label="Email"
                  className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <img
                    src="mail.png"
                    className="w-4 h-4 fill-current"
                    alt="Email Icon"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="transition ease-in-out delay-150 w-full bg-white hover:translate-y-2 hover:scale-60 hover:bg-gray-300 duration-300 flex translate-y-3 justify-center items-center max-w-xs p-4 shadow-xl rounded-xl sm:px-8 dark:bg-gray-900 dark:text-gray-100 ">
              <ProjectsToggle toggle={() => toggleOpen()} />
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center p-6 gap-1">
          <a href="http://filmflix.joshgbrown.me">
            <div
              className="w-full h-max p-5 rounded-md bg-white scale-0
                    data-[open=true]:scale-100 
                    data-[open=true]:top-[25vh] 
                    data-[open=true]:left-[20vw] 
                    transition-all duration-1000 
                    flex
                    items-center 
                    justify-center 
                    data-[open=true]:delay-0 
                    delay-500 
                    ease-in-out 
                    shadow-lg 
                    flex-col
                    gap-1 
                    bg-white-500 
                    hover:-translate-y-[calc(50%+1rem)] 
                    hover:scale-110 hover:bg-gray-200 hover:brightness-105 hover:duration-300"
              data-open={isOpen}
            >
              <h1 className="font-bold text-1xl">FilmFlix</h1>
              <div className="flex flex-row gap-1">
                {FilmFlixTags.map((each) => (
                  <div
                    key={each.label}
                    className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${each.bg} ${each.colour} rounded-full`}
                  >
                    {each.label}
                  </div>
                ))}
              </div>
            </div>
          </a>
          <div
            className="h-max p-5 rounded-md bg-white scale-0
                    data-[open=true]:scale-100 
                    data-[open=true]:top-[25vh] 
                    data-[open=true]:left-[20vw] 
                    transition-all duration-1000 
                    flex 
                    items-center 
                    justify-center 
                    data-[open=true]:delay-0 
                    delay-500 
                    ease-in-out 
                    shadow-lg 
                    flex-col 
                    gap-1 
                    w-full
                    max-w-[16rem]
                    bg-white-500 
                    hover:-translate-y-[calc(50%+1rem)] 
                    hover:scale-110 hover:bg-gray-200 hover:brightness-105 hover:duration-300"
            data-open={isOpen}
          >
            <h1 className="font-bold text-1xl">Saturday</h1>
            <div className="flex items-center justify-center flex-wrap gap-1">
              {SaturdayTags.map((each) => (
                <div
                  key={each.label}
                  className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${each.bg} ${each.colour} rounded-full`}
                >
                  {each.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

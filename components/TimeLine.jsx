import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const TimeLine = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const data = [
    {
      id: 0,
      title:
        language === "en" ? "React Native Developer" : "Zhvillues React Native",
      duration: "Oct 2024 - Present",
      org: "IDfier",
      skills: ["React Native", "Expo Go", "TypeScript"],
      class:
        "bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    },
    {
      id: 1,
      title: "Software Developer ",
      duration: "Feb 2024 - Aug 2024",
      org: "Code Invention",
      skills: ["Asp.Net", "Angular", "Figma", "SQL", "Web API"],
      class:
        "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    },
  ];
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-10 ms-6" key={item.id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}{" "}
              {item.id === 0 && (
                <span className="bg-red-500 text-[#fff] text-sm font-medium me-2 px-2.5 py-0.5 border-sky-100 rounded ms-3">
                  {t.timeline.latest}
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            <p>{item.org}</p>
            <div className="flex flex-wrap mt-8">
              {item.skills.map((i, idx) => (
                <span key={idx} className={`${item.class}`}>
                  {i}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;

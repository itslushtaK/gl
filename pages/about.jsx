import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

import Flash from "@/public/Flash.svg";
import Hero from "@/public/hero.jpg";
import Rocket from "@/public/Rocket.svg";
import Sparkles from "@/public/Sparkles.svg";
import love_black from "@/public/love-black.svg";
import love_white from "@/public/love-white.svg";

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const { language } = useLanguage();
  const t = translations[language].about;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      `%c ${t.console} \n`,
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, [t.console]);

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>{t.title}</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="max-w-screen">
        <div className="mx-auto pt-16 -pb-10 max-w-7xl">
          <div className="mx-auto flex flex-col">
            <h1 className="mt-6 mb-12 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              {t.heading}
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8">
              <Image
                src={Hero}
                height={800}
                width={800}
                className="select-none h-40 w-40"
                alt="pranjal shikhar"
                priority
              />
            </div>
            <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              {t.subtitle}
            </p>
          </div>
          <CategoryCard />
          <div className="text-[0.92rem] text-base mx-12 font-light dark:text-white text-gray-900">
            <p className="mt-6 mb-12 font-normal">
              {t.experience.part1}{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Sparkles}
                  alt="sparkles"
                  className="self-center w-5 h-5 mx-1"
                />
              </span>{" "}
              {t.experience.part2}{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Flash}
                  alt="flash"
                  className="self-center w-5 h-5 mx-1"
                />
              </span>{" "}
              {t.experience.part3}{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Rocket}
                  alt="rocket"
                  className="self-center w-5 h-5 mx-1"
                />
              </span>
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30">
              {t.contact.heading}
            </p>

            <p className="">
              {t.contact.description} <br />
              {t.contact.emailText}{" "}
              <span className="text-red-700 font-bold">GMail</span>{" "}
              <a
                onClick={() =>
                  navigator.clipboard.writeText("gentuarlushtaku2002@gmail.com")
                }
                className="underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                href="mailto:gentuarlushtaku2002@gmail.com"
              >
                {" "}
                gentuarlushtaku@gmail.com
              </a>{" "}
              {t.contact.or}{" "}
              <span className="text-blue-700 font-bold">LinkedIn</span>{" "}
              <a
                href="https://www.linkedin.com/in/gentuar-lushtaku-02b06323b/"
                className="underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Gentuar Lushtaku{" "}
              </a>{" "}
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              getlushtaku
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width="30" className="-mt-4" />
            ) : (
              <Image src={love_black} alt="love" width="30" className="-mt-4" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

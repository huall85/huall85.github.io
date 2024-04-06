"use client"

import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import { inter, noto_sans_sc } from "./fonts";
import Nav from "./ui/nav";
import Section from "./ui/section";
import Experience from "./ui/experience";
import Projects from "./ui/projects";
import Social from "./ui/social";

const sectionIds = ["about", "experience", "projects"];

const threshold = 200;

export default function Home() {
  const [current, setCurrent] = useState("about");

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleScroll = throttle(() => {
      for (let i = 0; i < sectionIds.length; ++i) {
        const id = sectionIds[i];
        const elm = document.getElementById(id);
        const { top, bottom } = elm!.getBoundingClientRect();

        // console.log(`id: ${id}, top: ${top}, bottom: ${bottom}`);

        if ((top >= 0 && top <= threshold) || bottom >= 0) {
          setCurrent(id);
          return;
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${inter.className} ${noto_sans_sc.className} relative`}>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                <a href="/">李铧犁</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl text-secondary">前端开发工程师</h2>
              <Nav current={current}/>
            </div>
            <Social />
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Section
              id="about"
              title="关于"
            >
              <>
                <p className="mb-4 text-secondary">
                  我目前就职于
                  <a href="https://casicloud.com/" className="font-medium text-link">北京航天云路有限公司</a>
                  任前端开发工程师。在这之前我在游戏行业工作过，作为策划和Unity3D工程师参与过5款上市游戏的开发。
                  目前我专注于使用React，Vue，uniapp，React Native和WebGL等技术为我们的客户开发网页、小程序与安卓应用。
                </p>
              </>
            </Section>
            <Section
              id="experience"
              title="工作经历"
            >
              <Experience />
            </Section>
            <Section
              id="projects"
              title="项目经历"
            >
              <Projects />
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

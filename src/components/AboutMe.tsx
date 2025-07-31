import SectionSvg from "./SectionSvg";
import './styles/aboutMe.css';

interface AboutMeProps {
  title: string;
  desc: string;
  title2: string;
  tools: string;
}

const AboutMe = ({title, desc, title2, tools}:AboutMeProps) => {
  return (
    <section className="about-me">
      <div className="max-w-[1200px] mx-auto py-40 text-center flex flex-col">
        <div className="about-me-container">
          <SectionSvg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
            </svg>
          </SectionSvg>
          <h2 className="font-bold">{title}</h2>
          <p className="text-xl mt-5 p-5">
            {desc}
          </p>
        </div>
        <div className="skills-container mt-20">
          <h3 className="font-medium">{title2}</h3>
          <div className="card-skills-container grid gap-[10px] p-5">
            <div className="card-skills row-1 col-1">
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.4 2.1c-3.16-.43-6.24.6-8.47 2.83S1.67 10.25 2.1 13.4c.53 3.89 3.46 7.21 7.29 8.25.86.23 1.74.35 2.62.35h.14c1.03-.02 1.97-.55 2.52-1.43.54-.88.6-1.95.15-2.88l-.2-.42c-.45-.94-.1-1.8.39-2.28s1.34-.84 2.28-.39l.41.2c.93.45 2 .39 2.88-.15a3 3 0 0 0 1.43-2.52c.01-.92-.1-1.85-.35-2.76-1.04-3.83-4.35-6.75-8.25-7.29Zm6.12 10.86c-.3.18-.65.2-.96.05l-.41-.2a3.96 3.96 0 0 0-4.56.78 3.96 3.96 0 0 0-.78 4.56l.2.42c.15.31.13.66-.05.96-.19.3-.49.47-.84.48-.74.02-1.48-.08-2.21-.28-3.06-.83-5.4-3.48-5.83-6.59-.34-2.53.48-5 2.27-6.79a7.96 7.96 0 0 1 5.66-2.34c.37 0 .75.03 1.13.08 3.11.42 5.75 2.76 6.59 5.83.2.73.29 1.47.28 2.21 0 .35-.18.66-.48.84Z"></path>
                  <path d="M7.33 12.76a1 1 0 1 0 0 2 1 1 0 1 0 0-2M7.4 8.93a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 1 0 0-2.24M10.21 6.06a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 1 0 0-2.5M14.27 6.17a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 1 0 0-2.76"></path>
                </svg>
                <h4>FrontEnd</h4>
              </div>
              <div className="flex-2/3 flex items-center justify-center">
                <ul>
                  <li>React</li>
                  <li>Astro</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="card-skills row-2 col-1 md:row-1 md:col-2 ">
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3C7.66 3 4 4.83 4 7v10c0 2.17 3.66 4 8 4s8-1.83 8-4V7c0-2.17-3.66-4-8-4m0 2c3.68 0 5.91 1.49 6 2-.09.51-2.32 2-6 2S6.07 7.49 6 7.01C6.07 6.51 8.31 5 12 5M6 9.61c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V12c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zM12 19c-3.69 0-5.93-1.51-6-2v-2.39c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V17c-.07.5-2.31 2-6 2"></path>
                </svg>
                <h4>Backend</h4>
              </div>
              <div className="flex-2/3 flex items-center justify-center">
                <ul>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>MySql</li>
                  <li>Java</li>
                  <li>Spring</li>
                </ul>
              </div>
            </div>
            <div className="card-skills row-3 col-1  md:col-1 md:col-end-3 lg:col-3 lg:row-1">
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m22,12.5v-1h-1.03c-.04-.78-.18-1.54-.41-2.26l.95-.37-.36-.93-.95.37c-.38-.85-.89-1.62-1.5-2.3l.73-.73-.71-.71-.73.73c-.57-.51-1.2-.95-1.89-1.3l.42-.93-.91-.41-.42.94c-.84-.32-1.75-.52-2.69-.57v-1.03h-1v1.03c-.78.04-1.54.18-2.26.41l-.37-.95-.93.36.37.95c-.85.38-1.62.89-2.3,1.5l-.73-.73-.71.71.73.73c-.51.57-.95,1.2-1.3,1.89l-.93-.42-.41.91.94.42c-.32.84-.52,1.75-.57,2.69h-1.03v1h1.03c.04.78.18,1.54.41,2.26l-.95.37.36.93.95-.37c.38.85.89,1.62,1.5,2.3l-.73.73.71.71.73-.73c.57.51,1.2.95,1.89,1.3l-.42.93.91.41.42-.94c.84.32,1.75.52,2.69.57v1.03h1v-1.03c.78-.04,1.54-.18,2.26-.41l.37.95.93-.36-.37-.95c.85-.38,1.62-.89,2.3-1.5l.73.73.71-.71-.73-.73c.51-.57.95-1.2,1.3-1.89l.93.42.41-.91-.94-.42c.32-.84.52-1.75.57-2.69h1.03Zm-10-7.5c3.1,0,5.72,2.02,6.65,4.81l-4.05.71c-.52-.91-1.48-1.53-2.6-1.53-.37,0-.72.08-1.05.2l-2.64-3.14c1.07-.67,2.33-1.06,3.68-1.06Zm1,7c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1Zm-4.31,6.17c-2.2-1.18-3.69-3.5-3.69-6.17,0-1.79.68-3.42,1.79-4.66l2.64,3.14c-.26.45-.42.96-.42,1.51,0,.93.43,1.75,1.1,2.3l-1.41,3.86Zm3.31.83c-.49,0-.97-.05-1.43-.15l1.4-3.85s.02,0,.03,0c1.49,0,2.71-1.08,2.95-2.5l4.04-.71c0,.07.01.14.01.22,0,3.86-3.14,7-7,7Z"></path>
                </svg>
                <h4>{tools}</h4>
              </div>

              <div className="flex-2/3 flex items-center justify-center">
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>MySql</li>
                  <li>Vercel</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

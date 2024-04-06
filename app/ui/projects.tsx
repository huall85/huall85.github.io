import { memo } from "react";
import Image, { StaticImageData } from "next/image";
import chatPic from "../../public/chat.jpg";
import comparePic from "../../public/compare.jpg";
import enassPic from "../../public/enass.jpg";
import wxapp from "../../public/wxapp.jpg";

type ProjectType = {
  img: StaticImageData;
  title: string;
  url?: string;
  description: string;
  technologies: string[];
};

const projects: ProjectType[] = [
  {
    img: chatPic,
    title: "航天云网工业大模型智能问答",
    url: "https://ai.casicloud.com/chat/",
    description: "大模型对话应用，支持与AI助手对话生成报告目录。生成的目录可以做添加、删除、修改的操作，可根据目录生成完整的报告。",
    technologies: ["React", "Ant Design", "LangChain API"],
  },
  {
    img: comparePic,
    title: "人卫社文稿比对系统",
    description: "支持word、pdf、epub和xml文件的比对，可定位差异结果，支持两边的文档同步滚动。",
    technologies: ["React", "Ant Design"],
  },
  {
    img: comparePic,
    title: "成套装置大数据平台",
    description: "实现了从数据录入到生成报告的全流程业务，支持上传装置结构图并在图上标注兴趣点和绘制回路。",
    technologies: ["React", "Ant Design"],
  },
  {
    img: enassPic,
    title: "企业上云服务站",
    url: "https://enass.casicloud.com/serviceHome",
    description: "支持后台编辑问卷，支持问卷保存回答记录，再次登录后可继续回答上次未完成的问卷。",
    technologies: ["Vue", "Element UI"],
  },
  {
    img: wxapp,
    title: "智能制造小程序",
    description: "网站配套的小程序，实现了大部分网页应用支持的操作。",
    technologies: ["uni-app"],
  },
];

const Projects = memo(function Projects() {
  return (
    <ul className="group/list">
      {projects.map((item, index) => (
        <li key={index} className="mb-12">
          <div className="group grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                {item.url ? (
                  <a className="inline-flex items-baseline font-medium leading-tight text-primary group/link group-hover:text-link" href={item.url} target="_blank" rel="noreferrer noopener">
                    {item.title}
                    <svg role="presentation" viewBox="0 0 24 24" fill="currentcolor" className="inline-block h-4 w-4 shrink-0 transition-transform ml-1 translate-x-1 translate-y-0.5 group-hover:translate-x-2">
                      <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                    </svg>
                  </a>
                ) : <span className="font-medium leading-tight text-primary group/link group-hover:text-link">{item.title}</span>}
              </h3>
              <p className="mt-2 text-sm leading-normal">{item.description}</p>
            </div>
            <Image src={item.img} alt={item.title} className="rounded transition sm:order-1 sm:col-span-2 sm:translate-y-1" />
          </div>
        </li>
      ))}
    </ul>
  );
});

export default Projects;
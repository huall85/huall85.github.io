import { memo } from "react";

type ExperienceType = {
  period: string;
  position: string;
  company: string;
  description: string;
};

const experiences: ExperienceType[] = [
  {
    period: "2017 — 现在",
    position: "前端开发工程师",
    company: "北京航天云路有限公司",
    description: "与UI和产品经理合作为客户开发门户网站、后台管理系统、可视化大屏、小程序等多种应用，客户包括地方政府、中国特种设备检测研究院、北京建筑大学、人民卫生出版社等。作为前端骨干开发公司的组件库和项目脚手架等内部工具。",
  },
  {
    period: "2015 — 2016",
    position: "U3D开发工程师",
    company: "北京艺火网络科技有限公司",
    description: "与策划和美术合作开发PC端和移动端上的VR游戏，负责从Gameplay到UI的全部的编程工作。",
  },
  {
    period: "2010 — 2012",
    position: "游戏策划",
    company: "上海维塔士电脑软件有限公司",
    description: "参与3款主机和掌机游戏的关卡设计、战斗设计。",
  },
  {
    period: "2007 — 2009",
    position: "软件开发工程师",
    company: "日电卓越软件科技（北京）有限公司",
    description: "开发和维护日本市场占有率第一的PDM/PLM系统。",
  },
];

const Experience = memo(function Experience() {
  return (
    <ol className="group/list">
      {experiences.map((item, index) => (
        <li key={index} className="mb-12">
          <div className="group grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <header className="z-10 mb-2 mt-1 text-sm font-semibold tracking-wide text-secondary sm:col-span-2">{item.period}</header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-primary">
                {`${item.position} · ${item.company}`}
              </h3>
              <p className="mt-2 text-sm leading-normal">{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
});

export default Experience;

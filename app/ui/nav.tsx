import Link from "next/link";
import { memo } from "react";
import { LinkNode } from "./type";

interface NavProps {
  current: string;
}

const links: LinkNode[] = [
  {
    id: "about",
    title: "关于"
  },
  {
    id: "experience",
    title: "工作经历",
  },
  {
    id: "projects",
    title: "项目经历"
  }
];

const Nav = memo(function Nav({ current }: NavProps) {
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {links.map(item => (
          <li key={item.id}>
            <Link href={`#${item.id}`} className={`group flex items-center py-3 ${item.id === current ? "active" : ""}`}>
              <span className="nav-indicator mr-4 h-px w-8 bg-secondary transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none group-[.active]:bg-link"></span>
              <span className="nav-text text-base font-bold tracking-widest text-secondary group-hover:text-primary group-focus-visible:text-primary group-[.active]:text-link">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Nav;
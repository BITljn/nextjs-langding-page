import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const HeaderLinks = () => {
  const links = siteConfig.headerLinks;

  return (
    <div className="flex flex-row items-center gap-6">
      {links.map((link, index) => (
        // noopener 和 noreferrer：增加安全性和隐私保护，防止新开窗口对原窗口的潜在恶意操作，并且不传递 referrer 信息。
        // nofollow：告知搜索引擎不要追踪这个链接，不将其计入SEO排名。
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener norefferer nofollow"
          className={` flex max-w-[24px] flex-col items-center justify-center`}
        >
          {link.icon &&
            React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))}
    </div>
  );
};
export default HeaderLinks;

"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";

import { defaultLocale, localeNames } from "@/lib/i18n";

export const LangSwitcher = () => {
  const params = useParams();
  const lang = params.lang;

  // const lang = (params.lang && params.lang[0]) || defaultLocale;
  let langName =
    lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;
  const router = useRouter();

  const handleSwitchLanguage = (value: string) => {
    if (value === defaultLocale) {
      router.push("/");
      return;
    }
    router.push(value);
  };

  return (
    <Select value={langName} onValueChange={handleSwitchLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {/*在这里，Object.keys(localeNames) 是一个JavaScript内置方法，用于从给定的localeNames对象中提取所有可枚举的自有属性的键名，并返回一个包含这些键名的数组。随后，.map()方法被调用在这个数组上 */}
        {Object.keys(localeNames).map((key: string) => {
          const name = localeNames[key];
          return (
            <SelectItem className="cursor-pointer" key={key} value={key}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

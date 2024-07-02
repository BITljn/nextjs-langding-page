"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

// 通过非默认导出，使用者在导入时必须明确指定导入的名称，例如import { ThemeProvider } from './path/to/ThemeProvider'。这增加了代码的可读性和模块间的清晰度。
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

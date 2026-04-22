import type { Metadata } from "next";

import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Mobin ebrahimi | مبین ابراهیمی",
  description: "توسعه دهنده فرانت اند ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body dir="rtl" className={` antialiased  bg-black`}>
        <Suspense fallback={<div>loading..</div>}>
          <div className=" "> {children}</div>
        </Suspense>
      </body>
    </html>
  );
}

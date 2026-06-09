"use client";

import FigmaIcon from "@/components/icons/FigmaIcon";
import { AnimatedList } from "@/components/ui/animated-list";
import { DotPattern } from "@/components/ui/dot-pattern"; // ایمپورت الگوی نقطه‌ای مَجیک یو‌آی
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";
import { Framer, Settings } from "lucide-react";
import { GiPterodactylus } from "react-icons/gi";
import { PiFrameCorners } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";

export const UiUxVisual = () => {
  return (
    <div
      dir="ltr"
      className={cn(
        "relative flex h-87.5 w-full flex-col overflow-hidden rounded-2xl bg-background p-4 ",
      )}>
      {/* بک‌گراند نقطه‌ای مَجیک یو‌آی برای دادن عمق به کامپوننت */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-60 dark:opacity-40",
        )}
      />

      <div className="relative flex h-90 w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles radius={120}>
          <FigmaIcon />
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
                fill="#470137"></path>{" "}
              <path
                d="M16.6465 10.2338L13.1528 16.1482L16.8906 22.4285C16.9683 22.5709 16.8906 22.6024 16.778 22.6024H14.1108C13.9229 22.6024 13.7914 22.5956 13.7163 22.4671C13.4656 21.9662 13.2152 21.4685 12.9649 20.974C12.7143 20.4797 12.4482 19.9756 12.1667 19.4617C11.8849 18.9482 11.6063 18.4281 11.3308 17.9013C11.0802 18.4151 10.8015 18.9288 10.5325 19.4425C10.2631 19.9563 9.997 20.4668 9.73421 20.974C9.47126 21.4815 9.20203 21.9856 8.92655 22.4863C8.87636 22.6019 8.78858 22.6138 8.66353 22.6138H6.09026C5.98915 22.6138 5.97695 22.5378 6.03392 22.4478L9.65907 16.3408L6.1278 10.2145C6.06366 10.1271 6.11886 10.034 6.22174 10.0411H8.87015C8.98483 10.0347 9.08618 10.0779 9.15191 10.176C9.37732 10.6898 9.62776 11.2036 9.90323 11.7172C10.1785 12.231 10.4572 12.7384 10.7391 13.2391C11.0209 13.74 11.2995 14.2473 11.5374 14.7611C11.7877 14.2346 12.0413 13.7209 12.2981 13.2199C12.5547 12.719 12.8176 12.2149 13.087 11.7076C13.3562 11.2004 13.616 10.6963 13.8665 10.1953C13.8998 10.0854 13.9794 10.0297 14.0919 10.0411H16.5525C16.6465 10.0411 16.6853 10.1694 16.6465 10.2338Z"
                fill="#FF61F6"></path>{" "}
              <path
                d="M22.0371 22.8525C20.3806 22.8784 18.6455 22.1963 17.7733 20.6852C17.3475 19.9597 17.1346 19.0511 17.1347 17.9592C17.1276 17.075 17.3479 16.2045 17.7733 15.4355C18.871 13.4733 21.0824 12.7381 23.1829 12.9311V9.13586C23.1829 9.04615 23.2205 9.00101 23.2956 9.00101H25.6623C25.727 8.99153 25.7842 9.05023 25.775 9.11658V20.5022C25.775 20.9719 25.8216 21.44 25.8502 21.9085C25.8548 21.9885 25.8085 22.0677 25.7374 22.1012C24.5681 22.6014 23.3028 22.8467 22.0371 22.8525ZM23.1829 20.4636V15.2043C21.4673 14.7277 19.8017 16.0344 19.8019 17.8436C19.7612 19.7141 21.3736 21.0064 23.1829 20.4636Z"
                fill="#FF61F6"></path>{" "}
            </g>
          </svg>
          <GsapLogoCorrect />
        </OrbitingCircles>
        <OrbitingCircles radius={80} reverse>
          <FigmaIcon />
          <Framer className=" text-pink-600" />
          <GsapLogoCorrect />
          <RiTailwindCssFill className="text-green-700 size-28" />
        </OrbitingCircles>
      </div>

      <div className="bg-linear-to-b from-background   to-transparent w-full  top-0 left-0 h-30 z-50 absolute" />
      <div className="bg-linear-to-t from-background   to-transparent w-full from-20%  bottom-0 left-0 h-30 z-50 absolute" />
    </div>
  );
};

const GsapLogoCorrect = ({ size = 100, className = "" }) => {
  const gradientId = "gsap-gradient-new";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7fff00" /> {/* سبز روشن بالا */}
          <stop offset="100%" stopColor="#00a859" /> {/* سبز تیره/آبی پایین */}
        </linearGradient>
      </defs>

      {/* دایره بیرونی تیره */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="#1a1c22"
        stroke="#ccc"
        strokeWidth="0.5"
      />

      {/* گروه چهار دایره داخلی با اعمال شیب رنگ */}
      <g fill={`url(#${gradientId})`}>
        {/* دایره بالا چپ */}
        <circle cx="32" cy="32" r="18" />
        {/* دایره بالا راست */}
        <circle cx="68" cy="32" r="18" />
        {/* دایره پایین چپ */}
        <circle cx="32" cy="68" r="18" />
        {/* دایره پایین راست */}
        <circle cx="68" cy="68" r="18" />
      </g>
    </svg>
  );
};

export default GsapLogoCorrect;

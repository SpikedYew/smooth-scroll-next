"use client";

import { TfiGallery } from "react-icons/tfi";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SiSpacex } from "react-icons/si";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-100 flex  items-center justify-between px-6 py-3 text-white">
      <Link href="https://www.bartoszchmielecki.com/" target="_blank">
        <SiSpacex className="text-3xl" />
      </Link>
      <Link
        href="/gallery"
        //Smooth scroll in Buttons

        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        GALLERY <TfiGallery />
      </Link>
      <Link
        href="/scroll-trigger"
        //Smooth scroll in Buttons

        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        SCROLL T. BACKGROUND <TfiGallery />
      </Link>
      {pathname === "/gallery" ? (
        <Link
          href="/#launch-schedule"
          //Smooth scroll in Buttons

          className="flex items-center gap-1 text-xs text-zinc-400"
        >
          LAUNCH SCHEDULE <TfiGallery />
        </Link>
      ) : (
        <button
          //Smooth scroll in Buttons
          onClick={() => {
            document.getElementById("launch-schedule")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="flex items-center gap-1 text-xs text-zinc-400"
        >
          LAUNCH SCHEDULE <FiArrowRight />
        </button>
      )}
    </nav>
  );
}

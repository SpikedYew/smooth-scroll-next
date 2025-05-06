import InfiniteGallery from "../components/InfiniteGallery";
// import { RiArrowGoBackFill } from "react-icons/ri";
// import Link from "next/link";
// import { FiArrowRight } from "react-icons/fi";

export default function Page() {
  return (
    <>
      {/* <Nav /> */}
      <InfiniteGallery />
    </>
  );
}

// const Nav = () => {
//   return (
//     <div className="fixed px-6 py-3  left-0 top-0 w-full flex items-center justify-between">
//       <Link href="/">
//         <RiArrowGoBackFill className="text-xs gap-1" />
//       </Link>
//       <Link
//         href="/#launch-schedule"
//         //Smooth scroll in Buttons

//         className="flex items-center gap-1 flex items-center text-xs text-zinc-400"
//       >
//         LAUNCH SCHEDULE <FiArrowRight />
//       </Link>
//     </div>
//   );
// };

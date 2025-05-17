// // utils/treeData.ts
export type TreeNode = {
  name: string;
  path: string;
  //   type: "file" | "folder";
  //   children?: TreeNode[];
};

// export const projectStructure: TreeNode[] = [
//   {
//     name: "app",
//     type: "folder",
//     children: [
//       {
//         name: "api/auth/[...nextauth]",
//         type: "folder",
//         children: [{ name: "route.ts", type: "file" }],
//       },
//       { name: "components", type: "folder" },
//       { name: "gallery", type: "folder" },
//       { name: "login", type: "folder" },
//       { name: "parallax-scroll", type: "folder" },
//       { name: "scroll-trigger", type: "folder" },
//       { name: "smooth-scroll", type: "folder" },
//       { name: "test", type: "folder" },
//     ],
//   },
//   { name: "favicon.ico", type: "file" },
//   { name: "globals.css", type: "file" },
//   { name: "layout.tsx", type: "file" },
//   { name: "Navbar.tsx", type: "file" },
//   { name: "page.module.css", type: "file" },
//   { name: "page.tsx", type: "file" },
// ];

export const projectPages: TreeNode[] = [
  {
    name: "gallery",
    path: "/gallery",
  },
  {
    name: "login",
    path: "/login",
  },
  {
    name: "parallax-scroll",
    path: "/parallax-scroll",
  },
  {
    name: "scroll-trigger",
    path: "/scroll-trigger",
  },
  {
    name: "smooth-scroll",
    path: "/smooth-scroll-lenis",
  },
  {
    name: "test",
    path: "/test",
  },
];

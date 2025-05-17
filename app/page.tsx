import TreeView from "./components/TreeView";
import { projectPages } from "./utils/treeData";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Project Subpages</h1>
      <TreeView nodes={projectPages} />
      <Link
        href="https://www.bartoszchmielecki.com"
        className="hover:underline"
        target="_blank"
      >
        Creator
      </Link>
    </main>
  );
}

// components/TreeView.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export type TreeNode = {
  name: string;
  path: string;
  children?: TreeNode[];
};

const TreeView = ({ nodes }: { nodes: TreeNode[] }) => {
  return (
    <ul className="pl-4">
      {nodes.map((node) => (
        <TreeNodeItem key={node.path} node={node} />
      ))}
    </ul>
  );
};

const TreeNodeItem = ({ node }: { node: TreeNode }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children?.length;

  return (
    <li className="mb-1">
      <div
        onClick={() => hasChildren && setOpen(!open)}
        className="cursor-pointer hover:text-blue-500"
      >
        {hasChildren ? (open ? "📂" : "📁") : "📄"}{" "}
        {hasChildren ? (
          <span>{node.name}</span>
        ) : (
          <Link href={node.path} className="hover:underline">
            {node.name}
          </Link>
        )}
      </div>
      {hasChildren && open && node.children && (
        <TreeView nodes={node.children} />
      )}
    </li>
  );
};

export default TreeView;

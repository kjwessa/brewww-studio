import React, { useState, useEffect, useRef } from "react";
import { LexicalNode } from "../RichText/lexicalNodeFormat";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: LexicalNode[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  content,
}) => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = extractHeadings(content);
    setToc(headings);

    // Set up intersection observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.current?.observe(element);
    });

    return () => observer.current?.disconnect();
  }, [content]);

  const extractHeadings = (nodes: LexicalNode[]): TOCItem[] => {
    const headings: TOCItem[] = [];
    nodes.forEach((node) => {
      if (node.type === "heading") {
        headings.push({
          id: `heading-${headings.length}`,
          text: node.children[0].text,
          level: parseInt(node.tag.slice(1)),
        });
      }
    });
    return headings;
  };

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="table-of-contents">
      <h2 className="mb-2 text-lg font-bold">Table of Contents</h2>
      <ul className="space-y-1">
        {toc.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer hover:text-blue-500 ${
              activeId === item.id ? "font-bold text-blue-500" : ""
            }`}
            style={{ marginLeft: `${(item.level - 1) * 12}px` }}
            onClick={() => handleClick(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

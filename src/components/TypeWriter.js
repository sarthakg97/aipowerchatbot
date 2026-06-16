import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function TypeWriter({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text || typeof text !== "string") return;
    setDisplayed("");
    const words = text.split(" ");
    const timeouts = [];

    words.forEach((word, index) => {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + (prev ? " " : "") + word);
      }, index * 50);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
      setDisplayed("");
    };
  }, [text]);

  return (
    <ReactMarkdown
      components={{
        code: ({node, ...props}) => (
          <code className="bg-blue-800 px-1 rounded text-xs" {...props} />
        ),
        pre: ({node, ...props}) => (
          <pre className="bg-blue-800 p-2 rounded mt-2 text-xs overflow-auto" {...props} />
        ),
      }}
    >
      {displayed}
    </ReactMarkdown>
  );
}
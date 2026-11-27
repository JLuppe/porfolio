import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import resume from "./resume.md?raw";
import "./App.css";

export default function App() {
  return (
    <main className="page">
      <article className="resume">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noreferrer" />
            ),
            table: ({ node, ...props }) => (
              <div className="table-wrap">
                <table {...props} />
              </div>
            ),
          }}
        >
          {resume}
        </ReactMarkdown>
      </article>
    </main>
  );
}
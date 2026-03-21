import ReactMarkdown from "react-markdown";
import CodeBlock from "../common/CodeBlock";

type Props = {
    content: string;
};

const MarkdownRenderer = ({ content }: Props) => {
    return (
        <div className="text-sm text-slate-200">
            <ReactMarkdown
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-base font-semibold mt-6 mb-3 text-blue-300">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-base font-semibold mt-7 mb-2 text-blue-300 border-b border-slate-800 pb-1">
                            {children}
                        </h2>
                    ),
                    p: ({ children }) => <p className="leading-6 mb-3 text-slate-300">{children}</p>,
                    ul: ({ children }) => <ul className="space-y-3 mb-6">{children}</ul>,
                    li: ({ children }) => <li className="leading-6 list-disc ml-5 text-slate-300">{children}</li>,
                    code: CodeBlock,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;

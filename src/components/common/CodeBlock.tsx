import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
};

const CodeBlock = ({ inline, className, children }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const languageMatch = /language-(\w+)/.exec(className ?? "");
    const code = String(children ?? "").replace(/\n$/, "");

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    if (inline || !languageMatch) {
        return <code className="bg-slate-800 px-1.5 py-0.5 rounded text-sm">{children}</code>;
    }

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-xs bg-slate-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
            >
                {copied ? "Copied!" : "Copy"}
            </button>

            <SyntaxHighlighter
                style={vscDarkPlus}
                language={languageMatch[1]}
                PreTag="div"
                wrapLongLines
                customStyle={{
                    margin: "14px 0",
                    padding: "14px",
                    borderRadius: "10px",
                    background: "#0b1220",
                    overflowX: "auto",
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;

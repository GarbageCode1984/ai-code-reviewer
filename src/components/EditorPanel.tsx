import Editor from "@monaco-editor/react";

type Props = {
    code: string;
    setCode: (value: string) => void;
    language: string;
};

const EditorPanel = ({ code, setCode, language }: Props) => {
    return (
        <section className="flex flex-col flex-1 border-r border-slate-800 p-4 min-h-0">
            <h2 className="text-sm text-slate-400 mb-3">Code Editor</h2>

            <div className="flex-1 border border-slate-700 rounde overflow-hidden">
                <Editor
                    height="100%"
                    language={language}
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    defaultValue="// Write or paste your code here"
                    theme="vs-dark"
                />
            </div>
        </section>
    );
};

export default EditorPanel;

import { useState } from "react";
import EditorPanel from "./components/editor/EditorPanel";
import Header from "./components/common/Header";
import ReviewPanel from "./components/review/ReviewPanel";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import useReview from "./hooks/useReview";
import useModels from "./hooks/useModels";

const App = () => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");

    const { review, loading, runReview } = useReview();
    const { models, model, setModel } = useModels();

    return (
        <div className="h-screen bg-slate-950 text-white flex flex-col">
            <Header
                language={language}
                setLanguage={setLanguage}
                model={model}
                setModel={setModel}
                models={models}
                onReview={() => runReview(code, language, model)}
            />

            <PanelGroup direction="horizontal" className="flex-1 min-h-0">
                <Panel defaultSize={60} minSize={30}>
                    <EditorPanel code={code} setCode={setCode} language={language} />
                </Panel>

                <PanelResizeHandle className="w-1 bg-slate-700 hover:bg-blue-500 transition-colors" />

                <Panel defaultSize={40} minSize={20} className="flex flex-col min-h-0 overflow-auto">
                    <ReviewPanel review={review} loading={loading} />
                </Panel>
            </PanelGroup>
        </div>
    );
};

export default App;

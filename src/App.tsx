import { useState } from "react";
import EditorPanel from "./components/EditorPanel";
import Header from "./components/Header";
import ReviewPanel from "./components/ReviewPanel";

const App = () => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");

    return (
        <div className="h-screen bg-slate-950 text-white flex flex-col">
            <Header language={language} setLanguage={setLanguage} />

            <main className="flex flex-1 min-h-0">
                <EditorPanel code={code} setCode={setCode} language={language} />
                <ReviewPanel />
            </main>
        </div>
    );
};

export default App;

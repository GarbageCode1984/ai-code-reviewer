import { useState } from "react";
import EditorPanel from "./components/EditorPanel";
import Header from "./components/Header";
import ReviewPanel from "./components/ReviewPanel";
import { reviewCode } from "./services/ollama";

const App = () => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");
    const [review, setReview] = useState("");

    const handleReview = async () => {
        if (!code.trim()) {
            alert("코드를 입력하세요.");
            return;
        }

        const result = await reviewCode(code, language);
        setReview(result);
    };

    return (
        <div className="h-screen bg-slate-950 text-white flex flex-col">
            <Header language={language} setLanguage={setLanguage} onReview={handleReview} />

            <main className="flex flex-1 min-h-0">
                <EditorPanel code={code} setCode={setCode} language={language} />
                <ReviewPanel review={review} />
            </main>
        </div>
    );
};

export default App;

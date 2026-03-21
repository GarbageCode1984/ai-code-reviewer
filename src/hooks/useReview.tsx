import { useState } from "react";
import { reviewCode } from "../services/ollama";

const useReview = () => {
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    const runReview = async (code: string, language: string, model: string) => {
        if (!code.trim()) {
            alert("코드를 입력하세요.");
            return;
        }

        setLoading(true);
        setReview("");

        try {
            const result = await reviewCode(code, language, model);
            setReview(result);
        } catch {
            setReview(`❌ 모델 실행 실패

👉 모델이 설치되어 있는지 확인하세요:
ollama list

👉 설치:
ollama pull ${model}`);
        } finally {
            setLoading(false);
        }
    };

    return {
        review,
        loading,
        runReview,
    };
};

export default useReview;

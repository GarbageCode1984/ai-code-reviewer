import { useEffect, useState } from "react";
import { getModels } from "../services/ollama";

const useModels = () => {
    const [models, setModels] = useState<string[]>([]);
    const [model, setModel] = useState("");

    useEffect(() => {
        const loadModels = async () => {
            try {
                const list = await getModels();
                setModels(list);

                if (list.length > 0) {
                    setModel(list[0]);
                }
            } catch {
                console.error("모델 목록 가져오기 실패");
            }
        };

        loadModels();
    }, []);

    return { models, model, setModel };
};

export default useModels;

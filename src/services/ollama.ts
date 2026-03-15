export const reviewCode = async (code: string, language: string) => {
    const prompt = `
You are a senior software engineer.

Review the following ${language} code.

Explain potential issues and improvements.

Code:
${code}
`;

    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "qwen2.5-coder",
            prompt,
            stream: false,
        }),
    });

    const data = await response.json();

    return data.response;
};

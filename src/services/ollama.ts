export const reviewCode = async (code: string, language: string, model: string) => {
    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model,
            stream: false,
            temperature: 0.2,
            top_p: 0.9,
            max_tokens: 2000,
            frequency_penalty: 0.1,
            presence_penalty: 0,
            prompt: `
        You are a senior software engineer with more than 15 years of experience performing professional code reviews.

        Analyze the following ${language} code carefully.

        Code:
        ${code}

        Review the code based on the following criteria:

        - Bugs or potential errors
        - Performance issues
        - Security vulnerabilities
        - Code readability and maintainability
        - Best practices and coding standards
        - Unnecessary or inefficient logic
        - Scalability concerns

        Rules:

        - Your entire response MUST be written in Korean.
        - Be specific and practical.
        - Focus on actionable improvements rather than generic praise.
        - Reference line numbers when possible.
        - If there are no critical problems, still suggest improvements.

        Return the result using this exact structure:

        # 🔎 코드 문제점
        Explain problematic parts and reference line numbers when possible.

        # ⚠️ 잠재적 버그 및 위험 요소
        Describe potential bugs or logical risks.

        # ⚡ 성능 개선 제안
        Suggest ways to improve performance.

        # 🛡 보안 문제
        Mention any security concerns.

        # ✨ 개선된 코드 예시
        Provide an improved version of the code.

        \`\`\`${language}
        Improved code here
        \`\`\`

        # 🧠 추가 설명
        Explain why the improved version is better.
        `,
        }),
    });

    const data = await res.json();

    return data.response;
};

interface OllamaModel {
    name: string;
}

export const getModels = async (): Promise<string[]> => {
    const res = await fetch("http://localhost:11434/api/tags");

    if (!res.ok) {
        throw new Error("모델 목록 조회 실패");
    }

    const data = await res.json();

    return data.models.map((m: OllamaModel) => m.name);
};

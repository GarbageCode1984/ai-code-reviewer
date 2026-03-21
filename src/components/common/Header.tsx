type Props = {
    language: string;
    setLanguage: (value: string) => void;
    model: string;
    setModel: (model: string) => void;
    models: string[];
    onReview: () => void;
};

const Header = ({ language, setLanguage, onReview, model, setModel, models }: Props) => {
    return (
        <header className="border-b border-slate-800 px-6 py-4">
            <h1 className="text-lg font-semibold mb-3">AI Code Reviewer</h1>

            <div className="flex items-center gap-3">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                </select>

                <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    {models.length === 0 ? (
                        <option disabled>⚠️ 모델 없음</option>
                    ) : (
                        models.map((m) => (
                            <option key={m} value={m}>
                                {m}
                            </option>
                        ))
                    )}
                </select>

                <button
                    onClick={onReview}
                    disabled={!model}
                    className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded text-sm font-medium"
                >
                    Review Code
                </button>
            </div>
        </header>
    );
};

export default Header;

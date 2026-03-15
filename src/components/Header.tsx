type Props = {
    language: string;
    setLanguage: (value: string) => void;
    onReview: () => void;
};

const Header = ({ language, setLanguage, onReview }: Props) => {
    return (
        <header className="border-b border-slate-800 px-6 py-4">
            <h1 className="text-lg font-semibold mb-3">AI Code Reviewer</h1>

            <div className="flex items-center gap-3">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm"
                >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                </select>

                <button
                    onClick={onReview}
                    className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded text-sm font-medium"
                >
                    Review Code
                </button>
            </div>
        </header>
    );
};

export default Header;

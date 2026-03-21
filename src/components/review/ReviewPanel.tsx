import MarkdownRenderer from "./MarkdownRenderer";

type Props = {
    review: string;
    loading: boolean;
};

const LoadingDots = () => {
    return (
        <span className="inline-flex gap-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce [animation-delay:0.2s]">.</span>
            <span className="animate-bounce [animation-delay:0.4s]">.</span>
        </span>
    );
};

const ReviewPanel = ({ review, loading }: Props) => {
    return (
        <section className="h-full flex flex-col flex-1 p-4 min-h-0">
            <h2 className="text-sm text-slate-400 mb-3 shrink-0">Review Result</h2>

            <div className="flex-1 min-h-0 border border-slate-700 rounded overflow-hidden flex flex-col">
                <div className="flex-1 min-h-0 overflow-y-auto p-4 review-scroll">
                    {loading && (
                        <div className="text-slate-400">
                            Analyzing code
                            <LoadingDots />
                        </div>
                    )}

                    {!loading && review && <MarkdownRenderer content={review} />}

                    {!loading && !review && <div className="text-slate-500">리뷰 결과가 여기에 표시됩니다.</div>}
                </div>
            </div>
        </section>
    );
};

export default ReviewPanel;

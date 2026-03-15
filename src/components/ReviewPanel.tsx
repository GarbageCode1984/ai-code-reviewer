type Props = {
    review: string;
};

const ReviewPanel = ({ review }: Props) => {
    return (
        <section className="flex flex-col flex-1 p-4 min-h-0">
            <h2 className="text-sm text-slate-400 mb-3">Review Result</h2>

            <div className="flex-1 border border-slate-700 rounded bg-slate-900 flex items-center justify-center">
                AI Review Output
            </div>

            <div className="flex-1 border border-slate-700 rounded bg-slate-900 p-4 overflow-auto whitespace-pre-wrap">
                {review ? review : "리뷰 결과가 여기에 표시됩니다."}
            </div>
        </section>
    );
};

export default ReviewPanel;

const ReviewPanel = () => {
    return (
        <section className="flex flex-col flex-1 p-4 min-h-0">
            <h2 className="text-sm text-slate-400 mb-3">Review Result</h2>

            <div className="flex-1 border border-slate-700 rounded bg-slate-900 flex items-center justify-center">
                AI Review Output
            </div>
        </section>
    );
};

export default ReviewPanel;

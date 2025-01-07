const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <div className="shimmer-cards">
                {Array(10)
                    .fill("")
                    .map((e, index) => (
                        <div key={index} className="shimmer-card">
                            <div className="shimmer-img"></div>
                            <div className="shimmer-lines">
                                <div className="shimmer-line"></div>
                                <div className="shimmer-line"></div>
                                <div className="shimmer-line"></div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Shimmer;
export default function HeaderComponent({
  compareDataLength,
  setShowComparison,
}) {
  return (
    <header>
      <div className="flex justify-between items-center">
        <h2>Cars comparison dashboard</h2>
        <div>
          {compareDataLength > 0 && (
            <div className="compare-option-wrapper flex justify-between items-center">
              {compareDataLength < 3 && (
                <div className="compare-option-msg mr-4">
                  Select upto 3 car to compare
                </div>
              )}
              <button
                onClick={() => setShowComparison((prev) => !prev)}
                disabled={compareDataLength < 2}
                className={`compare-button cursor-pointer font-bold px-8 py-3 ${
                  compareDataLength < 2 ? "comapare-button-disabled" : ""
                }`}
              >
                Compare {compareDataLength}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

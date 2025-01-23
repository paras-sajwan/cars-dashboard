export default function ComparisonComponent({
  parameters,
  data,
  setShowComparison,
}) {
  return (
    <div className="comparison-popup w-full flex items-center justify-center">
      <div className="px-5 w-full">
        <table className="w-full mb-20">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {parameters &&
              parameters.map((parameter, pIndex) => (
                <tr key={pIndex}>
                  <td className="font-bold capitalize">{parameter}</td>
                  {data.map((car, carIndex) => (
                    <td key={carIndex}>
                      {typeof car[parameter] === "object"
                        ? car[parameter]["average_rating"]
                        : car[parameter]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <div className="w-full text-center">
          <button
            className="close-popup-button px-12 py-3 font-bold text-base cursor-pointer"
            onClick={() => setShowComparison((prev) => !prev)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

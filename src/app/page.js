import TableContainer from "./components/TableContainerComponent";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div>
        <h2>Cars comparison dashboard</h2>
      </div>
      <TableContainer />
    </div>
  );
}

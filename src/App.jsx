import Read from "./Componats/Read";
import Create from "./Componats/Create";

const App = () => {
  return (
    <div className="p-5 flex  justify-between gap-10 w-screen h-screen bg-zinc-900 text-white">
      <Create />
      <Read />
    </div>
  );
};

export default App;

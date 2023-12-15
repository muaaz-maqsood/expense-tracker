import Expense from "./Expense";
import Income from "./Income";
import Main from "./Main";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-[50px] px-5 md:px-10 border-2 border-black">
      <Income />
      <Main />
      <Expense />
    </div>
  );
}

export default App;

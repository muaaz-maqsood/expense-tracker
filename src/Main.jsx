import React,{useState} from 'react'
import { useCreateIncomeMutation,useCreateExpenseMutation,useGetIncomeQuery, useGetExpenseQuery } from './Slice/apiSlice';


const Main = () => {
    const [createIncome, resIncomeInfo] = useCreateIncomeMutation();
    const [createExpense, resExpenseInfo] = useCreateExpenseMutation();
    const {data:incomeData} = useGetIncomeQuery()
    const {data:expenseData} = useGetExpenseQuery()
    console.log(incomeData,"hi");
    console.log(resIncomeInfo,"income info");
    console.log(resExpenseInfo,"expense info");

    const ExpenseTotal = expenseData?.reduce((total , ele) => total+ +ele.amount,0)
    const IncomeTotal = incomeData?.reduce((total , ele) => total+ +ele.amount,0)

    const total = IncomeTotal-ExpenseTotal

    const getCurrentDate=()=> {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${day}-${month}-${year}`;
      }
    const [values, setValues] = useState({
        type: "Income",
        category: "",
        amount: "",
        date: getCurrentDate()
      });
      console.log(values);

      const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const handleAddTransaction = () => {
        if(values.type === "Income"){
        createIncome(values)
        }else if(values.type === "Expense"){
        createExpense(values)
        }
      }

  return (
    <div className="w-full md:w-[40%] px-5 py-2 rounded-[10px] bg-yellow-500/20 mt-20">
    <h1 className="text-3xl font-semibold tracking-[2px] text-white bg-transparent text-center">Expense Tracker</h1>
    <h1 className=" pt-2 text-gray-300 text-center bg-transparent">Sb kuch milta ha yahn pa</h1>
    <h1 className="text-xl font-semibold mt-5 text-center text-white  bg-transparent">
      Total Balance: <span className="text-2xl font-bold text-blue-600 bg-transparent">$ {total}</span>
    </h1>

    <div className="pt-10 flex gap-10 bg-transparent">
      <select
        name="type"
        id="type"
        className="w-6/12 bg-white outline-none py-2 rounded-[6px]"
        value={values.type}
        onChange={handleInputChange}
      >
        <option value="Income" className='text-white'>Income</option>
        <option value="Expense" className='text-white'>Expense</option>
      </select>

      <input
        name="category"
        id="category"
        className="w-6/12 bg-white outline-none py-2 rounded-[6px]"
        value={values.category}
        onChange={handleInputChange}
        placeholder='Category'
      />
        
    </div>

    <div className="pt-10 flex gap-10 bg-transparent">
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        className="w-6/12 bg-white outline-none py-2 rounded-[6px]"
        value={values.amount}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        className="w-6/12 bg-white outline-none py-2 rounded-[6px]"
        value={values.date}
        onChange={handleInputChange}
      />
    </div>

    <button
      className="bg-orange-500 rounded-[7px] block mx-auto mb-5 px-6 py-1 text-white mt-10 outline-none text-lg font-semibold"
      onClick={handleAddTransaction}
    >
      Create
    </button>
  </div>
);
}

export default Main
 
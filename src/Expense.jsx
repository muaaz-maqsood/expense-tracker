import React from 'react'
import { useGetExpenseQuery, useDeleteExpenseMutation } from './Slice/apiSlice';

const Expense = () => {
  const {data} = useGetExpenseQuery()
  console.log(data);
  const [deleteExpense] = useDeleteExpenseMutation()

  const handelDelete = (id) => {
    console.log(id,"ghffhg");
    deleteExpense(id)
}
  return (
    <div className='flex flex-col w-[25%]'>
    <h1 className='text-2xl text-center pb-4 font-bold text-white'>Expense</h1>
    <div className='flex flex-col gap-y-[20px]'>
      {data?.map((ele,i)=>(
          <div key={i} className='flex justify-evenly text-white'>
              <h2>{ele.amount}</h2>
              <h2>{ele.category}</h2>
              <h2>{ele.date}</h2>
            <button className='bg-red-500 rounded-[5px] py-1 px-2 text-white' onClick={()=>handelDelete(ele.id)}>Delete</button>
          </div>
      ))}
    </div>
  </div>
  )
}

export default Expense

import React from 'react'
import { useGetIncomeQuery, useDeleteIncomeMutation } from './Slice/apiSlice';


const Income = () => {
    const {data} = useGetIncomeQuery()
    console.log(data , 'get data');
    const [deleteIncome] = useDeleteIncomeMutation()

    const handelDelete = (id) => {
        console.log(id,"ghffhg");
        deleteIncome(id)
    }
  return (
    <div className='flex flex-col border-2 border-black w-1/4'>
      <h1 className='text-2xl text-center pb-4 text-white'>Income</h1>
      <div className='flex flex-col gap-y-[20px]'>
        {data?.map((ele,i)=>(
            <div key={i} className='flex justify-evenly text-white'>
            <h2>{ele.amount}</h2>
            <h2>{ele.category}</h2>
            <h2>{ele.date}</h2>
            <button className='py-1 bg-red-500 rounded-[5px] px-2 text-white' onClick={() => handelDelete(ele.id)}>Delete</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Income

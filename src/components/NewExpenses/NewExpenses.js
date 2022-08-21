import React from 'react'
import'./NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {

const saveexpensedatahandlar = (enterexpensedata) => {

const expensesData = {
  ...enterexpensedata,
  id : Math.random().toString()
}



props.cat(expensesData);



  console.log(expensesData);
};

  return (
    <div className='new expenses'>
      
       <ExpenseForm  onsaveexpensedata ={saveexpensedatahandlar}/>


    </div>
  )
}

export default NewExpenses

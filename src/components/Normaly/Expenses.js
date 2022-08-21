import'./Expenses.css';

import React from "react";
import ExpenseItem from './ExpenseItem';
// import Card from '../UI/card';

 const Expenses=(props)=>{
  return(
    <div className='expenses'>

      {
        props.item.map(

          expens => (
            
             <ExpenseItem
       date={expens.date}
      title={expens.title}
      amount={ expens.amount}/>
  

        )
        )
      }
      
       
        

    </div>
)

}

export default Expenses;
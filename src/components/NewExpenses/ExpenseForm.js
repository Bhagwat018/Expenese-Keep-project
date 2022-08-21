
import './ExpenseForm.css'
import React, {useState} from 'react'


const ExpenseForm = (props) => {


    const [enteredtitle, setenteredtitle] = useState('')  
    const [enteredamout, setenteredamout] = useState('')  
    const [entereddate, setentereddate] = useState('')   

 const titlechangehandlar = (event) => {

                    
    setenteredtitle(event.target.value);
 };
 const titleamouthandlar = (event) => {

  setenteredamout(event.target.value);

};




const submithandler = (event) => {
           event.preventDefault();
           
      const expensedata = {
          title : enteredtitle,
          amount : enteredamout,
        //   date : new Date(entereddate)
      }  
          props.onsaveexpensedata(expensedata);

           

       

       setenteredtitle("");
       setenteredamout("");
       setentereddate("")
 };








  return (
   
    <form onSubmit={submithandler}>

        <div className='new-expense_controls'>
           <div className='new-expense_control '>
            <label htmlFor="Title">Title</label>
            <input type="text"  value={enteredtitle} onChange={titlechangehandlar} name="" id="" />

           </div>
           <div className='new-expense_control '>
            <label htmlFor="Amount">Amount</label>
            <input type="text" value={enteredamout} onChange={titleamouthandlar } name="" id="" />

           </div>
           {/* <div className='new-expense_control '>
            <label htmlFor="Date">Date</label>
            <input type="date"  value={entereddate} onChange={titledatehandlar} name="" id="" />

           </div> */}
                
        </div>
        <div className='new-expense_actions '>
            <button type='submit'>ADD EXPENSES </button>
        </div>
    </form>
  )
}

export default ExpenseForm

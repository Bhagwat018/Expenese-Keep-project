import './ExpenseItem.css';

function ExpenseItem(props){
  



  
return(
<div   className='expense-item'>
  
    <div>{props.date}</div>
    <div className='expense-item_description'><h2>{ props.title}</h2></div>
    <div className='expense-item_price'>{props.amount}</div>


</div>
);
}

export default ExpenseItem;
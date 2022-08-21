 

import React, {useState} from "react";
import Expenses from "./components/Normaly/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import './App.css'

let Dummyexpense=[

  {
    id : 'e1',
    title : 'School Fee',
    amount : 5500,
    
  },
  {
   id : 'e2',
   title : 'Books',
   amount:1200,
  
 },
 {
   id : 'e3',
   title : 'Ticket',
   amount:1660,
    
 },
 {
   id : 'e4',
   title : 'Rent',
   amount:1000,
    
 }
];


const App = () =>{
      
  



const [expenses, setexpenses] = useState(Dummyexpense);



const addExpenseHandler =(expense)=>{

 const updExpenses=[expense,...expenses]
  setexpenses(updExpenses)
}
    
    


    return(
        <div><p id="rama">Created by : Gopal Bhagwat (v8)</p>
          <NewExpenses cat={ addExpenseHandler }/>
          <Expenses item={ expenses}/>
      </div>
    );
}



export default App;

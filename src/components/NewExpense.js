import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense=({newvalue})=>{
    const[state,setstate]=useState('')
const ex=(tryy)=>{
setstate(tryy)
newvalue(tryy)
}

    return(
        <div className="new-expense">

<ExpenseForm send={ex} ></ExpenseForm>
        </div>
    )
}

export default NewExpense
import react from 'react'
import Label from './Label'
import "./Expenses.css"
const Expenses=({expenses})=>{

    return(
        <div className='expenses'>
<Label  expenses={expenses}></Label>
        </div>
    )
}
export default Expenses
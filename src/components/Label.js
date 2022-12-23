import react,{useState} from "react";
import "./Label.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter"
const Label = ({ expenses }) => {
  const [filteryear,setfilterd]=useState('2020')
const getyear=(year)=>{
setfilterd(year)
}
const filterd= expenses.filter((expense)=>{
  return expense.date.getFullYear().toString()==filteryear
})
    const total = filterd.map((expense,index) => {
   
      return (
        <div className="expense-item" key={index}>
        <ExpenseDate date={expense.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">{expense.amount}$</div>
        </div>
      </div>
    );
  });
  
  return (<div>
    <ExpenseFilter year={getyear}></ExpenseFilter>
    {total}</div>);

};
export default Label;

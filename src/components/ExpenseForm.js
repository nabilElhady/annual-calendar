import React, { useState } from "react";
import "./ExpenseForm.css";
import { css, cx } from "@emotion/css";

const ExpenseForm = ({ send }) => {
  const [title1, settitle] = useState("");
  const [amount1, setamount] = useState("");
  const [date1, setdate] = useState("");
  const clicked = (e) => {
    e.preventDefault();
    const data = {
      title: title1,
      amount: amount1,
      date: new Date(date1),
    };
    setcolor(!color);

    settitle("");
    setamount("");
    setdate("");
    send(data);
  };
  const titlechange = (e) => {
    settitle(e.target.value);
  };
  const amountchange = (e) => {
    setamount(e.target.value);
  };
  const datechange = (e) => {
    setdate(e.target.value);
  };
  const [color, setcolor] = useState("black");
  const clicked2 = (e) => {
    e.preventDefault();
    setcolor(!color);
  };
  const clicked3 = (e) => {
    e.preventDefault();
    setcolor(!color);
  };
  let btn = color ? "black" : "white";
  return (
    <form>
      <div className={btn}>
        <div className="new-expense__controls ">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title1} onChange={titlechange}></input>
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input
              type="number"
              value={amount1}
              min="0.01"
              step={"0.01"}
              onChange={amountchange}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>date</label>
            <input
              type="date"
              value={date1}
              min="2019-01-01"
              max="2022-7-15"
              onChange={datechange}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={clicked}>
            add expense
          </button>
          <button type="submit" onClick={clicked2}>
            exit
          </button>
        </div>
      </div>
      <button type="submit" onClick={clicked3}>
        add new expense
      </button>
    </form>
  );
};
export default ExpenseForm;

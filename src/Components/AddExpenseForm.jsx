import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSES',
      payload: expense,
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input type="text" required className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input type="text" required className="form-control" id="name" value={cost} onChange={(event) => setCost(event.target.value)} />
        </div>
        <div className="col-sm">
          <button typeof="submit" className="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
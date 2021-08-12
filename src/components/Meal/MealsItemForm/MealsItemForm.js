import React from "react";
import Input from "../../UI/Card/Input/Input";
import classes from "./MealsItemForm.module.css";

const MealsItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          max: "10",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;

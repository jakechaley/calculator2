import React from "react";
import { CalculatorKey } from "./CalculatorKey";
import "./Calculator.css";

export function Calculator() {

  return (
    <div className="calculator">
      <div className="calculatorInput">
        <div className="result"> {result} </div>
      </div>
      <div className="calculatorKeypad">
        <div className="keysFunction">
          <CalculatorKey keyValue={'c'} onClick={handleOperation} />
          <CalculatorKey keyValue={'\xB1'} onClick={handleOperation} />
          <CalculatorKey keyValue={'%'} onClick={handleOperation} />
        </div>
        <div className="keysOperators">
        <CalculatorKey keyValue={'+'} onClick={handleOperation} />
        <CalculatorKey keyValue={'-'} onClick={handleOperation} />
        <CalculatorKey keyValue={'*'} onClick={handleOperation} />
        <CalculatorKey keyValue={'/'} onClick={handleOperation} />
        <CalculatorKey keyValue={'='} onClick={handleOperation} />
        </div>
        <div className="keysNumbers">
        <CalculatorKey keyValue={9} onClick={handleOperation} />
        <CalculatorKey keyValue={8} onClick={handleOperation} />
        <CalculatorKey keyValue={7} onClick={handleOperation} />
        <CalculatorKey keyValue={6} onClick={handleOperation} />
        <CalculatorKey keyValue={5} onClick={handleOperation} />
        <CalculatorKey keyValue={4} onClick={handleOperation} />
        <CalculatorKey keyValue={3} onClick={handleOperation} />
        <CalculatorKey keyValue={2} onClick={handleOperation} />
        <CalculatorKey keyValue={1} onClick={handleOperation} />
        <CalculatorKey
          className="keyDot"
          keyValue={'.'} 
          onClick={handleOperation} 
        />
        <CalculatorKey 
          className="keyZero"
          keyValue={0} 
          onClick={handleOperation} 
        />
        </div>
      </div>
    </div>
  );
}

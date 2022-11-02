import React from 'react'
import { useState } from 'react';
import Operator from './Operator';
import Number from './Number';
import Result from './Result';
const Main = () => {
    const [step, setStep] = useState(0)
    const [operator, setOperator] = useState({
        opt: "",
        num1: 0,
        num2: 0,
        res: 0,
    })

    const selectOpt = (e) => {
        let value = e.target.value
        setOperator({
            ...operator,
            opt: `${value}`,
        })
        console.log(operator);
    }
    const valType = (e) => {
        let value = +e.target.value
        if (e.target.id === "numOne") {
            setOperator({
                ...operator,
                num1: value,
            })
        } else {
            setOperator({
                ...operator,
                num2: value,
            })
        }
        console.log(operator);
    }

    const stepper = () => {
        if (step === 0) {
            setStep(1)
        } else {
            setStep(step + 1)
        }


    }
    const resultF = () => {
        setStep(2)

        switch (operator.opt) {
            case "+":
                setOperator({
                    ...operator,
                    res: operator.num1 + operator.num2,
                })
                break;
            case "-":
                setOperator({
                    ...operator,
                    res: operator.num1 - operator.num2,
                })
                break;
            case "/":
                setOperator({
                    ...operator,
                    res: operator.num1 / operator.num2,
                })
                break;
            case "*":
                setOperator({
                    ...operator,
                    res: operator.num1 * operator.num2,
                })
                break;
            default:
                break;
        }

    }

    return (
        <div>
            <div className="container mt-5 ">
                <div className="container mt-5 border rounded-5 shadow-sm mb-5 p-3">
                    {step === 0 ? <Operator clickHandler={selectOpt} stepHandler={stepper} /> : " "}
                    {step === 1 ? <Number TypeHandler={valType} stepHandler={resultF} opt={operator.opt} /> : " "}
                    {step === 2 ? <Result result={operator.res} /> : " "}
                </div>
            </div>
        </div>
    )
}

export default Main
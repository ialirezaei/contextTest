import React, { useState, createContext, useMemo } from 'react'

const StepContext = createContext(
  {
    step: 0,
    operator: {
    },
    handleSteps: () => { },
    handleOperatorChange: () => { },
    handleChangeInput: () => { },
    handleCalculateResult: () => { },
  }
)

export const AllContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [operator, setOperator] = useState({
    opt: "",
    res: 0,
  });
  const handleSteps = () => {
    if (step === 0 && operator.opt !== "") {
      setStep(step + 1)
    } else {
      alert("something")
    }
  }
  // const stepper = () => {
  //   if (step === 0) {
  //     if (operator.opt === "") {
  //       alert('لطفا یک عملگر را انتخاب کنید')
  //     } else {
  //       setStep(1)
  //     }
  //   } else {
  //     setStep(step + 1)
  //   }
  // }{}
  const handleOperatorChange = (e) => {
    let value = e.target.value
    setOperator({
      ...operator,
      opt: `${value}`,
    })


  }
  const handleChangeInput = (e) => {
    const newData = {
      ...operator,
      [e.target.name]: +e.target.value
    };

    setOperator(newData)

    // let value = +e.target.value
    // if (e.target.id === "numOne") {
    //   setOperator({
    //     ...operator,
    //     num1: value,
    //   })
    // } else {
    //   setOperator({
    //     ...operator,
    //     num2: value,
    //   })
    // }
  }

  console.log(operator);

  const handleCalculateResult = () => {
    setStep(step + 1)
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
  // const value = useMemo(() => ({
  //   step, operator,
  //   handleSteps, handleOperatorChange, handleChangeInput, handleCalculateResult
  // }), [])
  return (
    <StepContext.Provider
      value={{
        step, operator,
        handleSteps, handleOperatorChange, handleChangeInput, handleCalculateResult
      }}
    >
      {children}
    </StepContext.Provider>
  )
}

export default StepContext
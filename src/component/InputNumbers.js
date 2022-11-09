import React, { useContext } from 'react'
import AllContext from '../context/all-context';

const InputNumbers = () => {
    const { handleChangeInput, handleCalculateResult, operator } = useContext(AllContext)
    return (
        <div>
            <div className="row w-50 form-control mx-auto text-center mt-5 mb-5">
                <p>
                    لطفا عدد خود را وارد نمایید
                </p>
            </div>
            <div className='d-flex justify-content-evenly align-items-center text-center'>
                <div className='d-flex flex-column form-control-lg'>
                    <label>
                        عدد خود را وارد نمایید
                    </label>
                    <input type="number" name="num1" className='form-control' onChange={handleChangeInput} required='required' />
                </div>
                <div className='display-5'>
                    {operator.opt}
                </div>
                <div className='d-flex flex-column form-control-lg'>
                    <label>
                        عدد خود را وارد نمایید
                    </label>
                    <input type="number" name="num2" className='form-control' onChange={handleChangeInput} />
                </div>
            </div>
            <div>
                <button className='btn btn-outline-primary' onClick={handleCalculateResult}>
                    مرحله بعد
                </button>
            </div>
        </div>
    )
}

export default InputNumbers
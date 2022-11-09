import React, { useContext } from 'react'
import StepContext from '../context/all-context';
const SelectOperator = () => {
    const { handleOperatorChange, handleSteps } = useContext(StepContext)
    return (
        <div >
            <div className="row w-50 form-control mx-auto text-center mt-5 mb-5">
                <p>
                    لطفا یکی از عملگر های اصلی را انتخاب بفرمائید
                </p>
            </div>
            <div className='text-center mb-5'>
                <select className='w-50 form-select mx-auto d-flex' onChange={handleOperatorChange} required>
                    <option>انتخاب کنید</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div>
                <button className='btn btn-outline-primary' onClick={handleSteps}>
                    مرحله بعد
                </button>
            </div>
        </div>
    )
}

export default SelectOperator
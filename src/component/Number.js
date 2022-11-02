import React from 'react'

const Number = ({ stepHandler, opt, TypeHandler }) => {
    return (
        <div>
            <div className="row w-50 form-control  mx-auto text-center  mt-5 mb-5">
                <p>
                    لطفا عدد خود را وارد نمایید
                </p>
            </div>
            <div className='d-flex justify-content-evenly align-items-center text-center'>
                <div className='d-flex flex-column form-control-lg'>
                    <label>
                        عدد خود را وارد نمایید
                    </label>
                    <input type="number" id="numOne" className='form-control' onChange={TypeHandler}></input>
                </div>
                <div className='display-5'>
                    {opt}
                </div>
                <div className='d-flex flex-column form-control-lg'>
                    <label>
                        عدد خود را وارد نمایید
                    </label>
                    <input type="number" id="numTwo" className='form-control' onChange={TypeHandler}></input>
                </div>
            </div>
            <div>
                <button className='btn btn-outline-primary' onClick={stepHandler}>
                    مرحله بعد
                </button>
            </div>
        </div>
    )
}

export default Number
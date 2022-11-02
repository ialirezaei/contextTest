import React from 'react'
import { useState } from 'react'
const Operator = ({ clickHandler, stepHandler }) => {



    return (
        <div >

            <div className="row w-50 form-control  mx-auto text-center  mt-5 mb-5">
                <p>
                    لطفا یکی از عملگر های اصلی را انتخاب بفرمائید
                </p>
            </div>
            <div className=' text-center   mb-5'>
                <select className='w-50 form-select mx-auto d-flex' onClick={clickHandler}  >
                    <option className='' value="+">+</option>
                    <option className='' value="-">-</option>
                    <option className='' value="*">*</option>
                    <option className='' value="/">/</option>
                </select>
            </div>
            <div>
                <button className='btn btn-outline-primary' onClick={stepHandler}>
                    مرحله بعد
                </button>
            </div>
        </div >

    )
}

export default Operator
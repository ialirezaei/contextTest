import React, { useContext } from 'react'
import SelectOperator from './SelectOperator';
import InputNumbers from './InputNumbers';
import ShowResult from './ShowResult';
import StepContext from '../context/all-context';
import { SideBars } from './CustomComponent/SideBar';

const Main = () => {

    const { step, operator } = useContext(StepContext)
    return (
        <div>
            <div className="container mt-5 ">
                <div className="container mt-5 border rounded-5 shadow-sm mb-5 p-3">
                    <SideBars />
                    {step === 0 && <SelectOperator />}
                    {step === 1 && <InputNumbers />}
                    {step === 2 && <ShowResult result={operator.res} />}
                </div>
            </div>
        </div>
    )
}

export default Main
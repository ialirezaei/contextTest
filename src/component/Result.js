import React from 'react'

const Result = ({ result }) => {
    return (
        <div className='text-center'>
            نتیجه :
            <div className='display-1 alert alert-succuss'>
                {result}
            </div>
        </div>
    )
}

export default Result
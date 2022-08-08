
import React from 'react';
import Data from './Data';

const TaskDetails = (prop) => {
    return (
        <section className='taskData pt-5'>
            <div className="row" >
            {
                prop.data.map((v,i)=>{
                        return <Data data={v} show={prop.show} delete={prop.delete} i={i} key={i} />
                })
            }
            </div>
        </section>
    )
}

export default TaskDetails

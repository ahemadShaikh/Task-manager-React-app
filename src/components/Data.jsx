
import { MdDelete } from "react-icons/md";
import { MdOutlineCenterFocusStrong } from "react-icons/md";


const Data = (prop) => {

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="data mt-4">
                    <div className="row">
                        <div className="col-12">
                            <h6>Task Detail💠:</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className='textData'>{prop.data}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex align-center justify-content-between">
                            <div className="action d-flex">
                                <abbr title="Delete"><div onClick={() => prop.delete(prop.i)} className="delete"><MdDelete /></div></abbr>
                                <abbr title="show"><div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => prop.show(prop.i)} className="showData"><MdOutlineCenterFocusStrong /></div></abbr>

                                {/* edit button for editing the data */}
                                {/* <abbr title="Edit"><div onClick={()=>prop.edit(prop.i)} className="edit"><MdCreate /></div></abbr> */}
                            </div>

                            {/* we can assin date of adding task here  */}
                            {/* <p className='createdAt'><span>{new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()} 🌐</span></p> */}
                            <p><span>🖥️</span></p>

                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Data
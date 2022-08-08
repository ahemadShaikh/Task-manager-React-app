import React, { useEffect, useState } from 'react';
import { MdOutlineAdd } from "react-icons/md";
import ModalShow from './ModalShow';
import TaskDetails from './TaskDetails';

const localStorageData = () => {
  let data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(localStorage.getItem('data'));
  }
  else {
    return [];
  }
}

const InputTask = () => {
  const [data, changeData] = useState('');
  let [dataList, changeDataList] = useState(localStorageData());
  const [modal,cModal] = useState('');
  const getData = (e) => {
    changeData(e.target.value);
  }

  const addData = () => {
    changeDataList(prev => {
      return [...prev, data]
    })
    changeData('');
  }

  const Delete = (index) => {
    changeDataList(prev => {
      return prev.filter((v, i) => i !== index)
    })
  }

  const showData = (e) => {
    const D = dataList.find((v,i)=>i===e);
    // console.log(D);
    cModal(D);
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(dataList));
  }, [dataList])


  return (
    <>
      <section className='inputTask pt-5'>
        <div className="row d-flex align-center justify-content-center">
          <div className="col-11 d-flex align-center justify-content-between col-sm-8 col-md-6 col-lg-4">
            <input name='data' onChange={getData} value={data} type="text" />
            <abbr title="Add"><MdOutlineAdd onClick={addData} className='addInputData' /></abbr>
          </div>
        </div>
      </section>
      <TaskDetails delete={Delete} show={showData}  data={dataList} />
      <ModalShow modalData={modal} />
    </>
  )
}

export default InputTask
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editData, updateData } from '../Action/PassengerAction';
import TableData from './TableData'

const ModalBox = ({ showModal, setShowModal ,Id ,index}) => {
    const dispatch = useDispatch();
    const mainData = useSelector(state => state.passenger.passengerData.data)
    const editD = useSelector(state => state.passenger.EditData)

    const [enterData, setenterData] = useState({
        name: "", trips: "", country: "", airline_name: ""
    })
    useEffect(() => {
        console.log("mainData ", mainData);
    }, [])
    console.log("Edit Data ", editD);
    const handleInputChange = (e) => { 
        {e.target.name==="name"?enterData.name=e.target.value:e.target.name==="trips"?enterData.trips=e.target.value:e.target.name==="aCountry"?enterData.country=e.target.value:enterData.airline_name=e.target.value}
        console.log("Enter Data is ",enterData);
    }
    // console.log("ID from Modal Box ",Id);
    return (
        <div>
            <div>
                {console.log(showModal)}
                {showModal ? <div>
                    <input type="text" name="name" placeholder={editD.data[0].name} onChange={handleInputChange}/>
                    <br></br>
                    <input type="number" min="1" name="trips" placeholder={editD.data[0].trips} onChange={handleInputChange}/>
                    <br></br>
                    <input type="text" name="aCountry" placeholder={editD.data[0].airline.country} onChange={handleInputChange} />
                    <br></br>
                    <input type="text" name="aName" placeholder={editD.data[0].airline.name} onChange={handleInputChange}/>
                    <br></br>
                    <input type="button" value="Update" className="btn-primary" onClick={()=>{
                        dispatch(updateData(enterData,Id,index));
                        setShowModal(pre => !pre)
                    }} />
                    <input className="btn-warning" type="button" value="Close" onClick={() => {
                        setShowModal(pre => !pre)
                        console.log(setShowModal)
                    }} />
                </div> : null}
            </div>
        </div>

    )
}

export default ModalBox
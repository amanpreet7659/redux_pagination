import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editData } from '../Action/PassengerAction';
import TableData from './TableData'

const ModalBox = ({ showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const mainData=useSelector(state => state.passenger.passengerData.data)
    const editD=useSelector(state=>state)

    useEffect(()=>{
        console.log("Edit Data ",editD);
        console.log("mainData ",mainData);
    },[])
    return (
        <div>

            <div style={{}}>
                {console.log(showModal)}
                {showModal ? <div>
                    <input type="text" placeholder="Enter something" />
                    <br></br>
                    <input type="text" placeholder="Enter trips" />
                    <br></br>
                    <input type="text" placeholder="Enter Airline Country" />
                    <br></br>
                    <input type="text" placeholder="Enter Airline Name" />
                    <br></br>
                    <input type="button" value="Update" className="btn-primary" />
                    <br></br>
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
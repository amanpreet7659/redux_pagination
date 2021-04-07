import { Drawer, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { ModalBody } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delt, editData, fetchApi } from '../Action/PassengerAction'
import Example from './Example'
import ModalBox from './ModalBox'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'

function TableData(props) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.passenger.passengerData.data)
    const page = useSelector(state => state.passenger.passengerData);
    const [cp, setcp] = useState(1);
    const [pageData, setPageData] = useState([])
    const [EditClick, setEditClick] = useState(false);
    useEffect(() => {
        dispatch(fetchApi(1));
    }, [])
    // console.log('data', data)
    // console.log('page', page)
    const handleChangePage = (event, newPage) => {
        // setCurrentPage(newPage);
        // FetchApi(newPage);
        dispatch(fetchApi(newPage))
        setcp(newPage)
    };
    useEffect(() => {
        if (data) {
            setPageData(data)
        } else {
            setPageData([])
        }
    }, [data])

    const handleEditButton = (e, j) => {
        e.preventDefault();
        console.log("j=", j);
        setEditClick(pre => !pre)
    }
    return (<div className="">
        <div className="" style={{ border: "2px green solid" }}>
            <ModalBox showModal={EditClick} setShowModal={setEditClick} />

            {/* <span style={{ position: "fixed" }}>page : {cp}</span> */}
            {!EditClick && <table>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Name</th>
                        <th>Trips</th>
                        <th>Airline.Country</th>
                        <th>Airline.Name</th>
                        <th>Airline-ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pageData.map((i, j) => {
                        return (<tr key={j}>
                            <td>{j + 1}</td>
                            <td>{i.name}</td>
                            <td>{i.trips}</td>
                            <td>{i.airline.country}</td>
                            <td>{i.airline.name}</td>
                            <td>{i._id}</td>
                            <td><button className="btn-primary" onClick={(e) => {
                                e.preventDefault();
                                console.log("j=", i._id);
                                dispatch(editData(i._id))
                                setEditClick(pre => !pre)
                            }} >Edit</button></td>
                            <td><button className="btn-danger" onClick={() => {
                                dispatch(delt(i._id))
                                // setPageData(data)
                            }} >Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>}
            {!EditClick && <Pagination count={page.totalPages} onChange={handleChangePage} color="primary"></Pagination>}
            {/* <SwipeableTemporaryDrawer/> */}
        </div>
    </div>
    )
}

export default TableData





import { Drawer, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { ModalBody } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delt, editData, fetchApi, } from '../Action/PassengerAction'
import Example from './Example'
import ModalBox from './ModalBox'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'
import './index.css'

function TableData(props) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.passenger.passengerData.data)
    const page = useSelector(state => state.passenger.pageD);
    const serData = useSelector(state => state.passenger.SearchData)
    const [cp, setcp] = useState(1);
    const [pageData, setPageData] = useState([])
    const [EditClick, setEditClick] = useState(false);
    const [ID, setID] = useState();
    const [index, setIndex] = useState();
    const [textval, setTextVal] = useState();

    const sdata = pageData.filter((i) => { return (i.name.toLowerCase().includes(textval)) })

    const searchEvent = () => { }

    useEffect(() => {
        setPageData(serData)
    }, [serData])

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
    const handelInput = (e) => {
        setTextVal(e.target.value.toLowerCase());
        console.log("textval", textval);
    }
    useEffect(() => {
        if (data) {
            setPageData(data)
        } else {
            setPageData([])
        }
    }, [data])

    useEffect(() => {
        if (textval == "") {
            setPageData(data)
        }
        else {
            setPageData(sdata)
        }
    }, [textval])
    // const handleEditButton = (e, j) => {
    //     e.preventDefault();
    //     console.log("j=", j);
    //     setEditClick(pre => !pre)
    // }
    return (<div style={{ position: 'relative' }} className="    ">
        <div className="formdiv"></div>
        <h1>Pagination Through React Redux</h1>
        <ModalBox showModal={EditClick} setShowModal={setEditClick} Id={ID} index={index} />
        {!EditClick && <div >
            <input type="search" autoComplete="off" placeholder="Enter name to Search" className="search"
                onChange={handelInput}
                name="search"
            />

            {/* <span style={{ position: "fixed" }}>page : {cp}</span> */}
            <TableContainer className="table">
                <Table>
                    <TableHead>
                        <TableRow className="Header">
                            <TableCell className="row">SNo.</TableCell>
                            <TableCell className="row">Name</TableCell>
                            <TableCell className="row">Trips</TableCell>
                            <TableCell className="row">Airline.Country</TableCell>
                            <TableCell className="row">Airline.Name</TableCell>
                            <TableCell className="row">Airline-Logo</TableCell>
                            <TableCell colSpan="2" className="row">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pageData.map((i, j) => {
                            return (<TableRow key={j}>
                                <TableCell className="cell" >{j + 1}</TableCell>
                                <TableCell className="cell" >{i.name}</TableCell>
                                <TableCell className="cell" >{i.trips}</TableCell>
                                <TableCell className="cell" >{i.airline.country}</TableCell>
                                <TableCell className="cell" >{i.airline.name}</TableCell>
                                <TableCell className="cell"><a target="_blank" href={`https://${i.airline.website}`}><img src={i.airline.logo} /></a></TableCell>
                                <TableCell className="cell"><button className="btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    setID(i._id);
                                    dispatch(editData(i._id))
                                    setEditClick(pre => !pre)
                                    setIndex(j)
                                }} >Edit</button></TableCell>
                                <TableCell className="cell"><button className="btn-danger" onClick={() => {
                                    dispatch(delt(i._id))
                                    // setPageData(data)
                                }} >Delete</button></TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div id="rowperpage">
                <div><Pagination count={page} onChange={handleChangePage} color="primary"></Pagination></div>
                <div>
                    <label>Rows Per Page</label>
                    <select>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                        <option>60</option>
                        <option>70</option>
                        <option>80</option>
                        <option>90</option>
                        <option>100</option>
                    </select>
                </div>
            </div>



        </div>
        }
    </div>
    )
}

export default TableData





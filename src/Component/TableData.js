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
    return (<div className="maindiv">
        <div className="formdiv"></div>
        <div >
            <h1>Pagination Through React Redux</h1>
            <input type="search" autoComplete="off" placeholder="Enter name to Search" className="search"
                onChange={handelInput}
                name="search"
            />
            <ModalBox showModal={EditClick} setShowModal={setEditClick} Id={ID} index={index} />

            {/* <span style={{ position: "fixed" }}>page : {cp}</span> */}
            {!EditClick && <TableContainer className="table">
                <Table>
                    <TableHead>
                        <TableRow className="Header">
                            <TableCell className="row">SNo.</TableCell>
                            <TableCell className="row">Name</TableCell>
                            <TableCell className="row">Trips</TableCell>
                            <TableCell className="row">Airline.Country</TableCell>
                            <TableCell className="row">Airline.Name</TableCell>
                            {/* <TableCell className="row">Airline-ID</TableCell> */}
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
                                <TableCell className="cell" ><a href={`https://${i.airline.website}`} style={{ color: "black", textDecoration: "none" }} target="_blank">{i.airline.name}</a></TableCell>
                                {/* <TableCell className="cell">{i._id}</TableCell> */}
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
            </TableContainer>}
            {!EditClick && <Pagination id="pagination" count={page} onChange={handleChangePage} color="primary"></Pagination>}
            {/* <SwipeableTemporaryDrawer/> */}
        </div>
    </div>
    )
}

export default TableData





import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatus } from '../redux/StudentsChart'
import { searchByName } from '../redux/StudentsChart'
// style
import "../styles/checkboxtable.css"
export default function CheckBoxTable() {
    const status = useSelector(state => state.students.status.checked)
    const dispatch = useDispatch()

    return (
        <fieldset>
            <legend>Do you want to see students on table?</legend>
            <form id="sent" onSubmit={(e) => dispatch(searchByName(e.target.id))}>
                <input type="checkbox" name="table" id="table" onChange={(e) => dispatch(changeStatus(e.target.checked))} />
                <label htmlFor="table">Yes , I want</label>
                <label className='marginLeft' htmlFor="search">Search : </label>
                <input disabled={!status} value={!status ? "" : ""} type="search" onChange={(e) => dispatch(searchByName(e.target.value))} name="search" id="search" />
                <abbr className='emoj' title='Search by name of student'> 💡</abbr>

            </form>
        </fieldset>
    )
}

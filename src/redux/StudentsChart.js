import { createSlice } from "@reduxjs/toolkit";
import { dataStudents } from "../dataStudents";

export const StudentsChart = createSlice({
    name: "studentChart",
    initialState: {
        students: [],
        studentDetiels: [],
        funOrDiffcult: [
            { name: "fun", checked: false },
            { name: "difficult", checked: false },
        ],
        status: { checked: false },
        filteredArray: [],
        dataStudents,

    },

    reducers: {
        getStudents: (state, action) => {
            state.students = action.payload

        },
        ChangeCheckBox: (state, action) => {
            if (action.payload.checked === true) {
                let newArray = state.students.filter(student => student["Wie ben je?"] === action.payload.name)
                state.studentDetiels.push(...newArray)
            } else if (action.payload.checked === false) {
                let newArray = state.studentDetiels.filter(student => student["Wie ben je?"] !== action.payload.name)
                state.studentDetiels = newArray
            }
        },
        funOfDif: (state, action) => {

            if (state.funOrDiffcult.findIndex(item => item.name === action.payload.name) === -1) {
                state.funOrDiffcult.push(action.payload)

            } else {
                let index = state.funOrDiffcult.findIndex(item => item.name === action.payload.name);
                state.funOrDiffcult[index].checked = !state.funOrDiffcult[index].checked
            }


        },
        changeStatus: (state, action) => {

            state.status.checked = action.payload

        },
        searchByName: (state, action) => {
            let searchName = action.payload;
            // let array = [{ name: "a" }, { name: "b" }, { name: "cae" }]
            let newArray = state.students.filter(item => item["Wie ben je?"].toLowerCase().startsWith(searchName.toLowerCase()))
            state.filteredArray = newArray




            // let newArray = state.students.indexOf(item => item["Wie ben je?"] === searchName.)
            // let filteredArray = state.students.findIndex(item => item["Wie ben je?"].includes(searchName.toLowerCase()))
            // let str = "COOeL"
            // let searchStr = "es"

            // console.log(state.students.filter(item => item["Wie ben je?"].includes(searchName.toLowerCase())))
            // console.log(str.includes(searchStr))
        }



    }
})

export const { getStudents, ChangeCheckBox, funOfDif, changeStatus, searchByName } = StudentsChart.actions
export default StudentsChart.reducer
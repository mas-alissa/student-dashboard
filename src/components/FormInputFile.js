import React from 'react'

export default function FormInputFile({ parseFile }) {
    return (
        <div>
            <form>
                <input type="file" onChange={(e) => parseFile(e)} />
            </form>
            {/* <button onClick={() => dispatch(addNewObj({ name: "asim" }))}>add</button> */}
        </div>
    )
}

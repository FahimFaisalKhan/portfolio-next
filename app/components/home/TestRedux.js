"use client"
import { decrement, increment } from "@/redux/slieces/counterSlice"
import { setData } from "@/redux/slieces/dataSlice"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const TestRedux = () => {
    const count = useSelector((state) => state.counter.value)

    const demoData = useSelector((state) => state.data.demoData)
    // useEffect(() => {

    // }, [demoData]);
    return (
        <section aria-hidden="true" id="test-1" className="section">
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </section>
    )
}

export default TestRedux

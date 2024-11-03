"use client"

// import { ArrowDropDownCircleTwoTone } from "@mui/icons-material"
// import React from "react"
// import FaqItem from "./kids/FaqItem"

// const Faq = ({ data }) => {
//     return (
//         <div className="faq">
//             {/* <Academic data={academic} />
//     <Courses data={courses} />
//     <Professional data={professional} /> */}
//             {data.map(({ ques, ans, id }) => (
//                 <FaqItem key={id} id={id} ques={ques}>
//                     {ans}
//                 </FaqItem>
//             ))}
//         </div>
//     )
// }

// export default Faq
import { ArrowDropDownCircleTwoTone } from "@mui/icons-material"
import React, { useState } from "react"
import FaqItem from "./kids/FaqItem"

const Faq = ({ data }) => {
    const [faqOpen, setFaqOpen] = useState(null) // Track the currently open FAQ item

    return (
        <div className="faq">
            {data.map(({ ques, ans, id }) => (
                <FaqItem
                    key={id}
                    id={id}
                    ques={ques}
                    faqOpen={faqOpen}
                    setFaqOpen={setFaqOpen}
                >
                    {ans}
                </FaqItem>
            ))}
        </div>
    )
}

export default Faq

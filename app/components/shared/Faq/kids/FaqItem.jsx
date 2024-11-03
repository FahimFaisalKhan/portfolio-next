"use client"
// import { ArrowDropDownCircleTwoTone } from "@mui/icons-material"
// import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone"
// import React, { useState } from "react"

// const FaqItem = ({ ques, id, children }) => {
//     const [faqOPen, setFaqOpen] = useState(false)
//     return (
//         <div
//             className={`faq-item ${
//                 faqOPen === id ? "faq-item-open" : "faq-item-close"
//             } `}
//         >
//             <h3
//                 onClick={() => setFaqOpen(id)}
//                 className={`faq-item-heading ${
//                     faqOPen === id
//                         ? "faq-item-heading-open"
//                         : "faq-item-heading-close"
//                 }`}
//             >
//                 <span className="faq-item-heading-text">{ques}</span>
//                 <span className="faq-item-heading-icon">
//                     {faqOPen === id ? (
//                         <ArrowDropUpTwoToneIcon fontSize="inherit" />
//                     ) : (
//                         <ArrowDropDownCircleTwoTone fontSize="inherit" />
//                     )}
//                 </span>
//             </h3>
//             <div
//                 className={`faq-item-details  ${
//                     faqOPen ? "faq-item-details-open" : "faq-item-details-close"
//                 }`}
//             >
//                 {children}
//             </div>
//         </div>
//     )
// }

// export default FaqItem

import { ArrowDropDownCircleTwoTone } from "@mui/icons-material"
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone"
import React from "react"

const FaqItem = ({ ques, id, faqOpen, setFaqOpen, children }) => {
    const isOpen = faqOpen === id

    return (
        <div
            className={`faq-item ${
                isOpen ? "faq-item-open" : "faq-item-close"
            }`}
        >
            <h3
                onClick={() => setFaqOpen(isOpen ? null : id)}
                className={`faq-item-heading ${
                    isOpen ? "faq-item-heading-open" : "faq-item-heading-close"
                }`}
            >
                <span className="faq-item-heading-text">{ques}</span>
                <span className="faq-item-heading-icon">
                    {isOpen ? (
                        <ArrowDropUpTwoToneIcon fontSize="inherit" />
                    ) : (
                        <ArrowDropDownCircleTwoTone fontSize="inherit" />
                    )}
                </span>
            </h3>
            <div
                className={`faq-item-details ${
                    isOpen ? "faq-item-details-open" : "faq-item-details-close"
                }`}
            >
                {children}
            </div>
        </div>
    )
}

export default FaqItem

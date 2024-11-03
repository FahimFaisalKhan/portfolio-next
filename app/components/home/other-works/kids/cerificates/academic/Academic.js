import React from "react"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import Link from "next/link"
export default function Academic({ data }) {
    return (
        <div className="certificate">
            {/* <h3 className="certificate-title">Academic</h3> */}
            <div>
                <ul className="certificate-list">
                    {data.map(
                        ({
                            name,
                            institution,
                            major,
                            CGPA,
                            passedOn,
                            link,
                        }) => (
                            <li className="certificate-list-item" key={name}>
                                <p className="certificate-list-item-name">
                                    <span style={{ display: "inline-block" }}>
                                        {" "}
                                        {name}
                                    </span>
                                    <span
                                        style={{
                                            display: "inline-block",
                                            marginRight: "0.5rem",
                                        }}
                                    >
                                        {" "}
                                        {link && (
                                            <Link href={link} target="_blank">
                                                <RemoveRedEyeIcon
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    fontSize="small"
                                                />
                                            </Link>
                                        )}
                                    </span>
                                </p>
                                <p className="certificate-list-item-details">
                                    <span className="certificate-list-item-details-title">
                                        {" "}
                                        Major:
                                    </span>
                                    {major}
                                </p>
                                <p className="certificate-list-item-details">
                                    <span className="certificate-list-item-details-title">
                                        {" "}
                                        Institution:
                                    </span>
                                    {institution}
                                </p>
                                <p className="certificate-list-item-details">
                                    <span className="certificate-list-item-details-title">
                                        {" "}
                                        Passed on:
                                    </span>
                                    {passedOn < 0
                                        ? "Currently enrolled"
                                        : passedOn}
                                </p>
                                <p className="certificate-list-item-details">
                                    <span className="certificate-list-item-details-title">
                                        {" "}
                                        GPA:
                                    </span>
                                    {CGPA}
                                </p>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}

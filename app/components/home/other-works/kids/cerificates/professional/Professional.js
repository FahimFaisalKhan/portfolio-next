import Link from "next/link"
import React from "react"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
export default function Professional({ data }) {
    return (
        <div className="certificate">
            {/* <h3 className="certificate-title">Professional</h3> */}
            <div>
                <ul className="certificate-list">
                    {data.map(({ name, company, designation, link }) => (
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
                                    Company:
                                </span>
                                {company}
                            </p>
                            <p className="certificate-list-item-details">
                                <span className="certificate-list-item-details-title">
                                    {" "}
                                    Designation:
                                </span>
                                {designation}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

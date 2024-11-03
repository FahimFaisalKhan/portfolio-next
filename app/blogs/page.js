import React from "react"

const page = () => {
    return (
        <div style={{ background: "var(--base)" }}>
            {" "}
            <section
                aria-hidden="true"
                className="section width-control"
                id="blogs"
            >
                {" "}
                <div
                    style={{
                        minHeight: "60vh",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",

                        rowGap: "1rem",
                        padding: "0 1rem",
                    }}
                >
                    {" "}
                    <p style={{ fontSize: "var(--font-xl)" }}>
                        Still Cooking...
                    </p>
                    <button style={{ display: "block" }} className="btn-round">
                        Back To Home
                    </button>
                </div>
            </section>
        </div>
    )
}

export default page

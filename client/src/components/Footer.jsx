import React from "react";

const Footer = () => {
    return (
        <div className="container my-5">
            <footer className="text-center text-white" style={{ backgroundColor: "#112D4E" }}>
                <div className="container">
                    <section className="mt-5">
                    </section>
                    <hr className="my-5" />

                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
                <div
                    className="text-center p-3"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    SAD-PROJECT
                </div>
            </footer>
        </div>
    );
}

export default Footer
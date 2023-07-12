import React from 'react'
// import './header.css'


function HeaderSection() {
    return (
        <>



            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="w-100 mx-3 p-5 my-5 mt-5 d-flex flex-column justify-content-center">
                            <h1 className="mt-5 mx-5">Transform your Business with<span className="font-weight-bold text-capitalize text-primary"> e-commerce</span> sellonline!</h1>
                            <p className="px-2 mx-5">E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business</p>
                            <button type="button" className="btn btn-primary w-40 px-10 my-10">Shop Online!</button>
                        </div>
                    </div>
                    <div className="col-md-6 m-15 p-10">
                        <img className="h-100 w-100 rounded" src="https://c8.alamy.com/comp/2GG006E/online-library-e-book-reading-concept-vector-illustration-virtual-library-on-a-mobile-app-applications-for-reading-and-downloading-books-audiobooks-isolated-background-flat-style-2GG006E.jpg" alt="loading" />
                    </div>
                </div>


            </div>





        </>


    )
}

export default HeaderSection
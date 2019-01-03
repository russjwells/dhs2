import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/space07.jpg'

const Success = (props) => (
    <Layout>
        <Helmet>
            <title>Message Sent!</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Message Sent!</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Thank you for contacting us!</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default Success
import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/space01.jpg'
import pic02 from '../assets/images/space02.jpg'
import pic03 from '../assets/images/space03.jpg'
import pic04 from '../assets/images/space04.jpg'
import pic05 from '../assets/images/space05.jpg'
import pic06 from '../assets/images/space06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Digital Hyperspace"
                    meta={[
                        { name: 'description', content: 'Design Media Technology' },
                        { name: 'keywords', content: 'software, design' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Mobile Apps</h3>
                                <p>native applications for iOS & Android</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Brand Identity</h3>
                                <p>Let's Make your offering shine</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Motion Graphics, Video & Film</h3>
                                <p>Stand out with our stellar Media production Team</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Web Applications</h3>
                                <p>custom boutique web solutions</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Websites</h3>
                                <p>Personal, Services, Brands, ecommerce</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Virtual Reality, Augmented Reality & Games</h3>
                                <p>Another world is on its way</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>A Full Service Digital Agency</h2>
                            </header>
                            <p>Digital Hyperspace is a design, media, and technology company that exists to facilitate the expansion of consciousness on Earth. <br />We create experiences that uplift, inspire, and evolve life.</p>
                            <ul className="actions">
                                <li><a href="#contact" className="button next scrolly">Get Started</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
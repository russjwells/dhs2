import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field half first">
                        <label htmlFor="budget">Budget</label>
                        <input type="text" name="budget" id="budget" />
                    </div>
                    <div className="field half">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" />
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Connect" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">digitalhyperspace369@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Instagram</h3>
                        <span>@hyperspace.im</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Location</h3>
                        <span>
                        Portland, Oregon<br />
                        United States of America</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

import React from "react"
import contact from "../assets/images/contact.gif"
const Contact = () => {
    return (

        <>
            <div className="container ">
                <div className="row content ">
                    <div className="col-md-6 ">
                        <img className="img-fluid image-size" src={contact} alt="" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4 className="login-text mb-3 navbar-brand">Contact Me</h4>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="name" name="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Title</label>
                                <input type="title" name="title" className="form-control" />
                            </div>
                            <div class="mb-3">
                                <label htmlfor="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <button className="btn btn-class color-lightgreen">SEND</button>
                        </form>
                        <div className="follow-me  ">
                            <div className="social">
                                <a href="https://github.com/rishavchanda"><img src="https://rishavchanda.github.io/images/github.svg" alt="" /></a>
                                <a href="https://www.facebook.com/rishav.chanda.165/"><img src="https://rishavchanda.github.io/images/facebook.svg" alt="" /></a>
                                <a href="https://twitter.com/RishavChanda"><img src="https://rishavchanda.github.io/images/twitter.svg" alt="" /></a>
                                <a href="https://www.instagram.com/rishav_chanda/"><img src="https://rishavchanda.github.io/images/instagram.svg" alt="" /></a>
                                <a href="https://www.youtube.com/channel/UCJUjsHRpys-5h7zfTLbBdgQ"><img src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/youtube.svg?alt=media&token=921c54e6-31f9-4439-8840-5313628345a2" alt="" /></a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>

    );
};

export default Contact;
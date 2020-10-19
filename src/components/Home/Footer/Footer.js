import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <main className="row d-flex align-items-center main-header col-12">
                <div className="col-md-4 col-sm-4 offset-md-1">
                    <h1 style={{ color: '#111430' }}>Let us handle your <br />project, professionally</h1>
                    <p>With well writen codes, we build amazing apps for all platfoms, mobile and web apps in general</p>
                </div>
                <div className="col-md-6 col-12">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control text-muted" placeholder="Your name / company's name" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" cols="30" rows="10" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="button" className="px-5 btn btn-dark">Send</button>
                        </div>
                    </form>
                    <footer className="pt-5">copyright Orange labs {(new Date()).getFullYear()}</footer>
                </div>
            </main>
        </div>
    );
};

export default Footer;
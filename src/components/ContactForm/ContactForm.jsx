import React from 'react';
import './contactForm.css';

const ContactForm = () => {
    return (
        <>
            <div className='contactForm'>
                <h3>Get in Touch</h3>
                <form className='mt-3'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Your Name</label>
                        <input type="email" class="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Your Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="subject" />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Your Message</label>
                        <textarea class="form-control" id="floatingTextarea2" style={{ height: "150px" }}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
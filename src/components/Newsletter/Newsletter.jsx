import React from 'react'
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className='newsleeter text-center'>
            <div className="container">
                <h2>Newsletter</h2>
                <p>Get timely updates from your favorite products.</p>
                <form>
                    <div class="mb-3">
                        <input type="email" class="w-50 d-inline" placeholder="Your Email" />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Newsletter
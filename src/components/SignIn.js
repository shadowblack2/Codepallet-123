import React, { useState } from 'react'; // Import useState dari modul React

function SignIn() {
    
    return (
        <div className="container daftar">
            <div className="popup">
                <span className="close-btn">&times;</span>
                <div className="popup-content">
                    <div className="popup-image">
                    <img src="/images/gambarsign.png" alt="Gambar" /> 
                    </div>
                    <div className="popup-text">
                        <h3>Join <span className="bold">ArtsyMe</span></h3>
                        <button className="btn btn-block">
                        <img src="/logo/googleicon.png" alt="Google" /> Continue with Google
                        </button>
    
                        <button className="btn btn-block">
                        <img src="/logo/appleicon.png" /> Continue with Apple
                        </button>
    
                        <button className="btn btn-block">
                        <img src="/logo/facebookicon.png" alt="Facebook" /> Continue with Facebook
                        </button>
                        <hr style={{ borderColor: 'white', width: '90%', display: 'inline-block', marginRight: '90px' }} />
    
                        <div className="form-group">
                            <label htmlFor="email" className="bold">Add your email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="bold">Create a Password</label>
                            <input type="password" className="form-control" id="password" />
                            <small className="form-text text-muted">Min.6 characters, numbers & letters</small>
                        </div>
                        {/* Tombol "Join" */}
                        <button className="joinBtn" id="joinBtn">Join</button>
                        <div class = "text">

                        <p>Already have an account? <a href="#" className="text-purple">Log In</a></p>
                        <p>By joining this website, I confirm that I have read and agree to join website <a href="#" className="text-white text-underline">Terms of Service</a>, <a href="#" className="text-white text-underline">Privacy Policy</a>, and to receive emails and updates.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
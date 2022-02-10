import React from 'react'
import Footer from './Footer'

const Contact = () => {
    return (
        <>
            <img className='contact-img' src='./image/D.jpg'></img>
            <section className='Contactus-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='container-leftside col-12 col-lg-5'>
                                    <h1 className='main heading'>Connect With your sales team.</h1>
                                    <p className='main-hero-para-two'>
                                        AnyTXT Searcher is a free powerful local document &
                                        text application,and much faster
                                    </p>
                                    <figure>
                                        <img src='./image/A.jpg' alt='contastUs img' className='img-fluid' />
                                    </figure>
                                </div>
                                {/* -------right side------------ */}
                                <div className='container-rightside col-12 col-lg-7'>
                                    <form method='POST'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    type='text'
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Fast Name' ></input>
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    type='text'
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Last Name' ></input>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    type='text'
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Phone Number' ></input>
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    type='text'
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Email Id' ></input>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-feild'>
                                                <input
                                                    type='text'
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Add Address' ></input>
                                            </div>
                                            <div className='col-12'>
                                                <input
                                                    type='text'
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Enter your Message' ></input>
                                            </div>
                                        </div>
                                        <div class="form-check from-checkbox-style">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked" />
                                            <label className='main-hero-para-1'>
                                                AnyTXT Searcher is a free powerful local document &
                                                text application,and much faster
                                            </label>
                                        </div>
                                        <button type='submit'
                                            className='btn btn-style w-100'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Footer /> */}
                </div>
            </section>
        </>
    )
}

export default Contact

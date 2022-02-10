import React from 'react';

const register = () => {
  return (
    <>
      <img className='register-img' src='./image/D.jpg'></img>
      <section className='register'>
        <div className='main-container'>
          <h2>Registration From</h2>
          <form method='POST'>
            <div className='row'>
              <div className='col-12 col-lg-6 register-input-feild'>
                Fast Name
                <input
                  type='text'
                  name=''
                  id=''
                  className='form-control'></input>
              </div>
              <div className='col-12 col-lg-6 register-input-feild'>
                Last Name
                <input
                  type='text'
                  name=''
                  id=''
                  className='form-control'></input>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-6 register-input-feild'>
                Birthdate
                <input
                  type='text'
                  name=''
                  id=''
                  className='form-control' ></input>
              </div>
              <div className='col-12 col-lg-3 register-input-feild'>
                <p>Gender</p>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked">
                </input> Male
              </div>
              <div className='col-12 col-lg-3 register-input-feild'>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked">
                </input> Female
              </div>
              <div className='col-12 col-lg-6 register-input-feild'>
                Email
                <input
                  type='text'
                  name=''
                  id=''
                  className='form-control'></input>
              </div>
              <div className='col-12 col-lg-6 register-input-feild'>
                Phone Number
                <input
                  type='text'
                  name=''
                  id=''
                  className='form-control'></input>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 register-input-feild'>
                Subject
                <input
                  type='text'
                  name=''
                  id=''
                  className='form-control'></input>
              </div>
            </div>
            <button type='submit'
              className='btn btn-style w-100'>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
};

export default register;

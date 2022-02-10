import React from 'react';

const login = () => {
  return (
    <>
      <img src='./image/D.jpg' alt='contastUs img' className='img-login' />
      <div className='container-login'>
        <div className='login'>
          <h2>Login</h2>
          <h3>Have an account</h3>
          <form method='POST'>
            <div className='login-from'>
              <input
                type='text'
                name=''
                id=''
                className='form-control'
                placeholder='E-mail' ></input>
              <input
                type='text'
                name=''
                id=''
                className='form-control'
                placeholder='Password' ></input>
              <button type='submit'
                className='btn btn-style w-100'>SING IN</button>
              <div class="form-check from-checkbox-style">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked" />
                <label className='para'>Remember Me
                </label>
              </div>
            </div>
          </form>
          <div className='fac-twi'>
          {/* <a className='btn-forgate'>Forgate Password</a> */}
          <h5>--Or Sing In With--</h5>
            <button type='submit'
              className='btn btn-style '>Facbook</button>
            <button type='submit'
              className='btn btn-style '>Twitter</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default login;

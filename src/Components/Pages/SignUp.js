import React from 'react'
import './Sign.css'

export default function SignUp() {
  return (
    <div className='mainbody'>
    <div class="main">
    <header>Login Form</header>
    <form>
          <div className='inputs'>
            <input type="email" required/>
            <label>Email or Username</label>
            </div>
            <div className='inputs'>
            <input class="pswrd" type="password" required/>
            <span class="show">SHOW</span>
            <label>password</label>
            </div>
        <div class="button">
            <div class="inner">
                <button>LOGIN</button> 
            </div>
        </div>
        <div class="auth">Or  Login with</div>
        <div class="links">
            <div class="facebook">
                <i class="fa fa-facebook-square"><span>Facebook</span></i>
            </div>
            <div class="google">
                <i class="fa fa-google-plus-square"><span>Google</span></i>
            </div>
        </div>
        <div class="signup">
            Not A Member? <a href="#">Signup now</a>
        </div>



    </form>

</div>
</div>
  )
}

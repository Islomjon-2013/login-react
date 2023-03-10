import React from "react";
import "../login/login.css";
const Sign = () => {
  return (
    <div>
      <div className="section">
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2>SIGN-UP</h2>

              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" placeholder="Enter your email" />
                <label for="">Email</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label for="">Password</label>
              </div>

              <button>Sign-up</button>
              <div class="register">
                <p>if you already have an account? </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;

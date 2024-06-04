import React from "react";

function LoginPage() {
  return (
    <div className="login-page">
      <h1>groqcloud</h1>
      <form className="login-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login with Email</button>
      </form>
      <div className="login-options">
        <span>OR</span>
        <button>Continue with Google</button>
        <button>Continue with GitHub</button>
      </div>
      <p>Experience the fastest inference in the world</p>
      <a href="#">Create account</a>
    </div>
  );
}

export default LoginPage;

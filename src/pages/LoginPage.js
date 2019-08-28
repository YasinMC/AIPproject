import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => (
<>
<div class="login-card">
    <h1>Log-in</h1><br/>
  <form>
    <input type="text" name="user" placeholder="Username"/>
    <input type="password" name="pass" placeholder="Password"/>
    <input type="submit" name="login" class="login login-submit" value="login"/>
  </form>

  <div class="login-help">
    <Link to="/register">Register</Link> 
  </div> 
</div>
  </>
);

export default LoginPage;

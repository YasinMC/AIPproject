import React from 'react';

const RegisterPage = () => (
<>
<div class="login-card">

    <h1>Register</h1><br/>

  <form>
    <input type="text" name="user" placeholder="Username"/>
    <input type="password" name="pass" placeholder="Password"/>
    <input type="submit" name="login" class="login login-submit" value="login"/>
  </form>

  </div>
  </>
);

export default RegisterPage;

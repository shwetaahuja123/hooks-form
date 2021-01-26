import React from 'react';
import useSignUpForm from './CustomHooks';

const Signup = () => {

  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstname} ${inputs.secondname}
           Email: ${inputs.email}`);
  }
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm( signup);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type='text' name='firstname' onChange={handleInputChange} value={inputs.firstname} required />
        <label>Second Name</label>
        <input type='text' name='secondname' onChange={handleInputChange} value={inputs.secondname} required />
      </div>
      <div>
        <label>Email Address</label>
        <input type='email' name='email' onChange={handleInputChange} value={inputs.email} required />
      </div>
      <div>
        <label>Password</label>
        <input type='password' name='password1' onChange={handleInputChange} value={inputs.password1} required />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type='password' name='password2' onChange={handleInputChange} value={inputs.password2} required />
      </div>
      <button type='submit'>Signup</button>
    </form>
  );
}

export default Signup;
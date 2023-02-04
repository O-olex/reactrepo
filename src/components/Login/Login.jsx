import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/Validators/validators';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Input} validate={[required]} name="login" placeholder="Login" /></div>
      <div><Field component={Input} validate={[required]} name="password" placeholder="Password" /></div>
      <div><Field component={Input} name="rememberMe" type="checkbox" />Remember me</div>
      <div><button>Submit</button></div>
    </form>
  )
}

const LoginReduxForm = reduxForm(
  {
    form: 'login'
  }
)(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </>
}

export default Login;
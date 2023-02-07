import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { required } from "../../utils/Validators/validators";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import cl from "../common/FormControls/FormControls.module.css"


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Input} validate={[required]} name="email" placeholder="Email" /></div>
      <div><Field component={Input} validate={[required]} name="password" type="password" placeholder="Password" /></div>
      <div><Field component={Input} name="rememberMe" type="checkbox" />Remember me</div>
      { props.error && <div className={cl.formError}>{props.error}</div>}
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
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
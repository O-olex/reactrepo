import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/Login' />

        return <Component {...props} />
    }

   
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    
    return ConnectedAuthRedirectComponent;
}

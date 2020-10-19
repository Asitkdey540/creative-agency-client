import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    // const [signedInUser, setSignedInUser] = useContext(UserContext);
    // console.log(signedInUser)
    let user = {
        email: ''
    }

    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finelUser = { ...user, ...newUser }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                finelUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
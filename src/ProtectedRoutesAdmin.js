import React from 'react';
import { Route,Redirect } from 'react-router-dom';

const ProtectedRoutesAdmin = ({isAuth,component:Component,role,...rest}) => {
    return (
        <>
        <Route
            {...rest}
            render={(props)=>{
                if(isAuth && role ==="admin"){
                    return (
                        <>
                       { console.log("roleeeeee" ,role)}
                       <Component/>
                        </>
                    )
                }
                else {
                    return (
                        <Redirect to={{ pathname:"/",state:{from:props.location} }}/>
                    );
                }
            }

            }
        />
            
        </>
    )
}

export default ProtectedRoutesAdmin

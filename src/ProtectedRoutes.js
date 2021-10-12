import React from 'react'
import { Redirect,Route} from 'react-router';

const ProtectedRoutes = ({auth,component:Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props)=>{
                    if(auth) return <Component {...rest}/>;
                    if(!auth) 
                   return(
                       <Redirect to={{path:"/", state:{ from :props.location}}}/>
                   )

                    
            }}
        />
    )
}

export default ProtectedRoutes;

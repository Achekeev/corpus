import {Route, Switch} from "react-router-dom";
import React from "react";
import routes from "router/routes";

const Routes = () => {
    return (
        <Switch>
            {routes.map(
                (props) =>
                    <Route {...props} key={props.path}/>
            )}
        </Switch>
    );
};

export default Routes;
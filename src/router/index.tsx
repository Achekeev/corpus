import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import routes from "router/routes";

const Routes = () => {
    return (
            <Switch>
                {routes.map(
                    ({component, ...rest}) =>
                        <Route {...rest} children={component}/>
                )}
            </Switch>
    );
};

export default Routes;
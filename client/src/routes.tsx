import Loading from 'pages/commonPage/loading';
import HomePage from 'pages/homePage';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RenderRoutesProps, Routes } from './common/types/types';

const ROUTES = [{ path: '/', key: 'ROOT', exact: true, component: 'homePage' }] as Routes[];

export function RenderRoutes(props: RenderRoutesProps) {
  const routes = props.routes as Array<any>;
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </Suspense>
  );
}

function RouteWithSubRoutes(route: Routes) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => {
        const Component = lazy(() => import(`pages/${route.component}`))
        return <Component {...props} routes={route.routes}></Component>
      }}
    />
  );
}

export default ROUTES;

import { Box } from '@mui/material';
import bodyBackground from 'assets/images/body-bg.png';
import React from 'react';
import './App.css';
import ROUTES, { RenderRoutes } from './routes';

function App() {
  return (
    <Box sx={{ background: `url(${bodyBackground}) no-repeat center` }}>
      <RenderRoutes routes={ROUTES} />
    </Box>
  );
}

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
// function displayRouteMenu(routes: Array<any>) {
//   /**
//    * Render a single route as a list item link to the config's pathname
//    */
//   function singleRoute(route: any) {
//     return (
//       <li key={route.key}>
//         <Link to={route.path}>
//           {route.key} ({route.path})
//         </Link>
//       </li>
//     );
//   }

//   // loop through the array of routes and generate an unordered list
//   return (
//     <ul>
//       {routes.map((route) => {
//         // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
//         if (route.routes) {
//           return (
//             <React.Fragment key={route.key}>
//               {singleRoute(route)}
//               {displayRouteMenu(route.routes)}
//             </React.Fragment>
//           );
//         }

//         // no nested routes, so just render a single route
//         return singleRoute(route);
//       })}
//     </ul>
//   );
// }

export default App;

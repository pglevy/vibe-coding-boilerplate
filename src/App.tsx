import { useState, useEffect } from 'react';
import './App.css'
import { Switch, Route } from 'wouter'
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"

// Using Vite's glob import - updated to include subdirectories with **
const pages = import.meta.glob('@/pages/**/*.{js,jsx,ts,tsx}');

function Router() {
  const [routes, setRoutes] = useState([] as any[]);

  useEffect(() => {
    // Load all page components
    Promise.all(
      Object.entries(pages).map(async ([path, importFunc]) => {
        const module = await importFunc() as any;
        
        // Skip the main home and not-found pages as they're imported directly
        if (path.endsWith('/home.tsx') || path.endsWith('/not-found.tsx')) {
          return null;
        }
        
        // Convert file path to route path
        // For example: '@/pages/company/about.tsx' -> '/company/about'
        const routePath = '/' + path
          .replace(/^.*\/pages\//, '')  // Remove everything before /pages/
          .replace(/\.(js|jsx|ts|tsx)$/, '') // Remove file extension
          .toLowerCase();
          
        return {
          path: routePath,
          component: module.default
        };
      })
    ).then(loadedRoutes => {
      // Filter out null routes (the ones we skipped)
      setRoutes(loadedRoutes.filter(route => route !== null));
    });
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path}>
          {(params) => <Component {...params} />}
        </Route>
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router />
  )
}

export default App

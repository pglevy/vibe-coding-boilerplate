import { useState, useEffect } from 'react';
import './App.css'
import { Switch, Route } from 'wouter'
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"

// Using Vite's glob import
const pages = import.meta.glob('@/pages/*.{js,jsx,ts,tsx}');

function Router() {
  const [routes, setRoutes] = useState([] as any[]);

  useEffect(() => {
    // Load all page components
    Promise.all(
      Object.entries(pages).map(async ([path, importFunc]) => {
        const module = await importFunc() as any;
        // Convert file path to route path
        // For example: '@/pages/About.jsx' -> '/about'
        const routePath = '/' + path
          .replace(/^.*\/pages\//, '')
          .replace(/\.(js|jsx|ts|tsx)$/, '')
          .toLowerCase();
          
        return {
          path: routePath,
          component: module.default
        };
      })
    ).then(loadedRoutes => {
      setRoutes(loadedRoutes);
    });
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} component={Component} />
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

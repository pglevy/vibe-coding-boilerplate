import './App.css'
import { Switch, Route } from 'wouter'
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
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

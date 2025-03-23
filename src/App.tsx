import './App.css'
import { Switch, Route } from 'wouter'
import Home from "@/pages/home"
import ButtonDemo from "@/pages/button-demo"
import FormDemo from "@/pages/form-demo-page"
import NotFound from "@/pages/not-found"

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="button-demo" component={ButtonDemo} />
      <Route path="form-demo" component={FormDemo} />
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

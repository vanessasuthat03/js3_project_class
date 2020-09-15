import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import LoginPage from "./pages/LoginPage"
import EventListPage from "./pages/EventListPage"
import DetailPage from "./pages/DetailPage"

function App() {
  return (
    <div className="App">
      <h1>Hej från App</h1>
      <Switch>
        <Route path="/event/:slug" component={DetailPage} />
        <Route path="/event-list">
          <EventListPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App

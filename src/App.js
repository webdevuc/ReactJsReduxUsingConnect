import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/addUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addUser" component={AddPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

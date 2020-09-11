import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from './nav';
import { ThemeProvider } from './theme'
import FormBuah from "../tugas-9/tugas9";
import HargaBuah from "../tugas-10/tugas10";
import Timer from "../tugas-11/timer";
import BuahBuahan from "../tugas-12/input";
import BuahBuahan2 from "../tugas-13/axios";
import Buah from "../tugas-14";
import Tugas15 from "./tugas15";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <Switch>
          <Route exact path="/">
            <FormBuah/>
          </Route>

          <Route path="/tugas10">
            <HargaBuah/>
          </Route>

          <Route path="/tugas11">
            <Timer/>
          </Route>

          <Route path="/tugas12">
            <BuahBuahan/>
          </Route>

          <Route path="/tugas13">
            <BuahBuahan2/>
          </Route>

          <Route path="/tugas14">
            <Buah/>
          </Route>

          <Route path="/tugas15">
            <Tugas15/>
          </Route>



        </Switch>
      </ThemeProvider>
    </>
  );
}
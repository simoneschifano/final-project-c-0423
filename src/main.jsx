import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import GlobalState from "./pages/GlobalState";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetail";
import MovieBooking from "./pages/MovieBooking";
import TicketBuy from "./pages/TicketBuy";
import Layout from "./components/layout";
import "./index.css";
import CardPromo from "./pages/CardPromo";
import TopRated from "./pages/TopRated";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/ticket/:id/booking" element={<MovieBooking />} />
      <Route path="/ticket/:id/payment" element={<TicketBuy />} />
      <Route path="/cardPromo" element={<CardPromo />} />
      <Route path="/movie/top_rated" element={<TopRated />} />
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <GlobalState>
      <RouterProvider router={router} />
    </GlobalState>
  </React.StrictMode>
);

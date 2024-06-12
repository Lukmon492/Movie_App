import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import TvSeries from "./pages/tv-series";
import Movies from "./pages/movie";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/movie", element: <Movies />, errorElement: <Error /> },
  { path: "/tv-series", element: <TvSeries />, errorElement: <Error /> },
  { path: "/bookmark", element: <Bookmark />, errorElement: <Error /> },
]);

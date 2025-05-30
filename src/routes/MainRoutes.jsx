import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import TvShowsPage from "../pages/TvShowsPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../components/ProtectedRoute";

const mainRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/movies", element: <MoviePage /> },
  { path: "/shows", element: <TvShowsPage /> },
  { path: "/profile", element: 
  <ProtectedRoute>
    <ProfilePage /> 
  </ProtectedRoute> 
},
];

export default mainRoutes;

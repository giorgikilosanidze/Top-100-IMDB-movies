import routes from "../constants/routes";
import AuthGuard from "../guards/AuthGuard";
import DetailsPage from "../pages/DetailsPage";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

const appRoutes = [
  { path: routes.home, Component: Home },
  { path: routes.signUp, Component: SignUp },
  { path: routes.logIn, Component: LogIn },
  { path: routes.movies, Component: Movies, Guard: AuthGuard },
  { path: routes.favorites, Component: Favorites, Guard: AuthGuard },
  { path: routes.detailsPage, Component: DetailsPage, Guard: AuthGuard },
  { path: routes.notFound, Component: NotFound },
];

export default appRoutes;

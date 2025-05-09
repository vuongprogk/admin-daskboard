import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
export default [
  layout("routes/home.tsx", [index("components/Daskboard/Daskboard.tsx")]),
  layout("routes/auth.tsx", [
    route("login", "components/Auth/Login.tsx"),
    route("register", "components/Auth/Register.tsx"),
  ]),
] satisfies RouteConfig;

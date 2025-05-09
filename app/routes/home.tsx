import Sidebar from "~/components/Sideboard/Sidebar";
import type { Route } from "./+types/home";
import Daskboard from "~/components/Daskboard/Daskboard";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <main className="grid p-4 gap-4 grid-cols-[279px_1fr]">
      <Sidebar />
      <Outlet />
    </main>
  )
}

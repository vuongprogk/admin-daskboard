import type { IconType } from "react-icons";
import { FiHome, FiPaperclip } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";

const RouteSelect = () => {
  const location = useLocation()

const routes = [
    { title: "Dashboard", icon: FiHome, path: "/" },
    { title: "Invoices", icon: FiPaperclip, path: "/invoices" },
  ];

  return (
    <div className="space-y-1">
      {routes.map((route) => (
        <Route
          key={route.path}
          Icon={route.icon}
          title={route.title}
          path={route.path}
          selected={location.pathname === route.path}
        />
      ))}
    </div>
  );
};
const Route = ({
  selected,
  Icon,
  title,
  path,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  path: string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};

export default RouteSelect;

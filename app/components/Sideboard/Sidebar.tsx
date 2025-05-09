import AccountToggle from "./AccountToggle";
import RouteSelect from "./RouteSelect";

const Sidebar = () => {
  return (
    <div className="overflow-y-scroll sticky top-0 h-[calc(100vh-64px)]">
      <AccountToggle />
      <RouteSelect />
    </div>
  );
};

export default Sidebar;

import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router";

const AccountToggle = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <div
      className="relative border-b mb-4 mt-2 pb-4 border-stone-300"
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center"
      >
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold block">Admin</span>
        </div>
      </button>

      <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      {open && (
        <div className="absolute mt-2 right-0 bg-white border border-stone-300 rounded shadow-md w-40 z-10">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-stone-100 text-sm rounded-2xl"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountToggle;

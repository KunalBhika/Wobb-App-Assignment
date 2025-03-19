import React from "react";
import { LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

function Navbar() {
  const { authUser , logout } = useAuthStore();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="flex items-center" onClick={logout}>
              <a className="font-medium text-sm">
                Logout
                <LogOut size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <a
        href="/"
        aria-current="page"
        className="flex justify-center items-center"
      >
        <img
          width="35"
          sizes="35px"
          alt="A photo of Wobb's logo"
          src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6716c18e45760446b740a3b6_logo%20final%20one%205.png"
          loading="lazy"
        />
        <h3
          data-words="Wobb"
          data-delay="150"
          className="text-xl font-bold ml-2"
        >
          Wobb
        </h3>
      </a>

      <div className="navbar-end">
        <h3 className="text-base font-medium">
          {authUser?.fullName != null ? `Hi, ${authUser?.fullName}` : ""}
        </h3>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

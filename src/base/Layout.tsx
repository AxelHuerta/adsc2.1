import React from "react";
import NavElement from "../components/NavElement";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineBell,
} from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1em 0",
          maxHeight: "100vh",
          textDecoration: "none",
          background: "var(--lightColor)",
          minWidth: "15em",
        }}
      >
        <div>logo</div>
        <NavElement
          text="página principal"
          to={"/"}
          icon={<AiOutlineHome style={{ fontSize: "1.4em" }} />}
        />
        <NavElement
          text="pacientes"
          to={"/Patients"}
          icon={<HiOutlineUserGroup style={{ fontSize: "1.4em" }} />}
        />
        <NavElement
          text="citas"
          to={"/Appointments"}
          icon={<AiOutlineCalendar style={{ fontSize: "1.4em" }} />}
        />
        <NavElement
          text="solicitudes de cita"
          to={"/Requests"}
          icon={<AiOutlineBell style={{ fontSize: "1.4em" }} />}
        />
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;

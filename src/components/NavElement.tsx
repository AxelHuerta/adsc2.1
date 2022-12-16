import { NavLink, To } from "react-router-dom";
import { ReactElement } from "react";

type Props = {
  text: string;
  to: To;
  icon: ReactElement;
};

function NavElement(props: Props) {
  return (
    <NavLink
      to={props.to}
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".8em 2em",
        listStyle: "none",
        textDecoration: "none",
        textTransform: "capitalize",
        width: "100%",
        color: "var(--darkColor)",
        fontWeight: "600",
      }}
    >
      {props.icon}
      <li style={{ paddingLeft: ".8em" }}>{props.text}</li>
    </NavLink>
  );
}

export default NavElement;

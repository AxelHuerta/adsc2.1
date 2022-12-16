import React, { ReactElement } from "react";

type Props = {
  title: string;
  btn: ReactElement;
};

function Header(props: Props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1em",
        }}
      >
        <div className="text-2xl font-bold">{props.title}</div>
        <div>{props.btn}</div>
      </div>
      <hr />
    </>
  );
}

export default Header;

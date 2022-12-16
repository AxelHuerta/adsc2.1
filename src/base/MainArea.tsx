import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainArea(props: Props) {
  return (
    <div
      style={{
        background: "var(--bg)",
        overflow: "auto",
        textTransform: "capitalize",
        width: "100%",
        padding: "1em 2em",
      }}
    >
      {props.children}
    </div>
  );
}

export default MainArea;

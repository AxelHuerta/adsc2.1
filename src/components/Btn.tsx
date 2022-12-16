import React, { ReactElement } from "react";

type Props = {
  text: string;
  icon: ReactElement;
};

function Btn(props: Props) {
  return (
    <button
      className="outline rounded-full px-4 py-2 text-white capitalize"
      style={{
        display: "flex",
        alignItems: "center",
        background: "var(--primary)",
      }}
    >
      {props.icon} {props.text}
    </button>
  );
}

export default Btn;

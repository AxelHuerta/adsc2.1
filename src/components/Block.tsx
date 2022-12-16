import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Block(props: Props) {
  return (
    <div className="bg-white m-5 rounded-md drop-shadow-md p-5">
      {props.children}
    </div>
  );
}

export default Block;

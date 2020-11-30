import React, { useRef } from "react";

export default function RefSample() {
  const id = useRef(1);

  const setId = (n) => {
    id.current = n;
  };
  const prindId = () => {
    console.log(id.current);
  };

  return <div>refSample</div>;
}

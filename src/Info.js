import React, { useReducer } from "react";
import useInputs from "./useInputs";

export default function Info() {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChange} name="name" />
        <input
          type="text"
          value={nickname}
          onChange={onChange}
          name="nickname"
        />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
}

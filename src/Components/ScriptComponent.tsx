import React, { useState } from "react";
import styled from "styled-components/macro";

const ScriptContainer = styled.div``;

export const ToggleButton = styled.button`
  width: 200px;
  height: 100px;
  background-color: ${(p) => p.theme.salmonPink};
  cursor: pointer;
  border: 2px solid grey;
  border-radius: 4px;
`;

const ScriptComponent = (): JSX.Element => {
  const [value, setValue] = useState("");
  const [array, setArray] = useState<string[]>([""]);

  const handleEnter = (): void => {
    if (array[0] === "") setArray([value]);
    else setArray((array) => [...array, value]);
  };

  return (
    <ScriptContainer>
      <h1>This is the Script page</h1>
      <input
        value={value}
        onKeyPress={(e) => e.key === "Enter" && handleEnter()}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <div style={{ backgroundColor: "lightgray" }}>
        {array.map((e, i) => {
          return (
            <span
              key={i}
              style={{ border: "1px solid black", margin: "5px", height: "10px", minWidth: "30px" }}
            >
              {e}
            </span>
          );
        })}
      </div>
      <ToggleButton>Turn on</ToggleButton>
    </ScriptContainer>
  );
};

export default ScriptComponent;

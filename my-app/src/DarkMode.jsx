import React, { useState } from "react";

function DarkMode() {
  const [first, setfirst] = useState(false);

  return (
    <>
      {first ? (
        <div style={{ backgroundColor: "white", height: "739px" }}>
          <button
            onClick={() => {
              setfirst(!first);
            }}
          >
           
            {first ? "Dark" : "light"}
          </button>
        </div>
      ) : (
        <div style={{ backgroundColor: "black", height: "739px" }}>
          <button
            onClick={() => {
              setfirst(!first);
            }}
          >
           
            {first ? "Dark" : "light"}
          </button>
        </div>
      )}
    </>
  );
}

export default DarkMode;

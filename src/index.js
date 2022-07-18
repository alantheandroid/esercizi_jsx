import React from "react";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#root");
const root = createRoot(container);

const sum = (a, b) => {
  return (
    <h2>
      {a} + {b} = {a + b}
    </h2>
  );
};

root.render(sum(1, 2));

"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import { useCounterStore } from "../../providers/ZustandStore";
import { useShallow } from "zustand/react/shallow";

const Todo = () => {
  const { count } = useCounterStore(useShallow((s) => ({ count: s.count })));
  console.log("Todo render");

  return (
    // Provide the context value to the components within the context provider
    <div>
      Count: {count}
      <div className="flex gap-2">
        {/* Pass only the increment function to Increment component */}
        <Increment />
        {/* Pass only the decrement function to Decrement component */}
        <Decrement />
      </div>
    </div>
  );
};

export default Todo;

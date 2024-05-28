import React, { memo, use, useContext } from "react";
import { useCounterStore } from "../../providers/ZustandStore";
import { useShallow } from "zustand/react/shallow";

// define function

// call function
const Increment = () => {
  // const count2 = useCounterStore((s) => s.count2);
  // const incrementByTwo = useCounterStore((s) => s.incrementByTwo);
  const { count2, incrementByTwo } = useCounterStore(
    useShallow((s) => ({ count2: s.count2, incrementByTwo: s.incrementByTwo }))
  );

  console.log("Increment render");

  return (
    <div>
      Increment{" "}
      <button
        type="button"
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={incrementByTwo}
      >
        Increase {count2}
      </button>
    </div>
  );
};
export default memo(Increment);

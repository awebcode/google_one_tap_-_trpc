import React, { memo, useContext } from "react";
import { useCounterStore } from "../../providers/ZustandStore";

const Decrement = () => {
  const count = useCounterStore((s) => s.count);
  const decrement = useCounterStore((s) => s.decrement);
  console.log("Decrement   render");

  return (
    <div>
      Deccrement{" "}
      <button
        type="button"
        className="px-4 py-2 bg-rose-500 text-white rounded"
        onClick={decrement}
      >
        Decrease
        {count}
      </button>
    </div>
  );
};

export default memo(Decrement);

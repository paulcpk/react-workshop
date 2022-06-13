import { useEffect, useState } from "react";

function Btn() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Functional");
    console.log("count", count);
  }, [count]);

  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ display: "block", marginBottom: "1rem" }}
    >
      Count: {count}
    </button>
  );
}

export default Btn;

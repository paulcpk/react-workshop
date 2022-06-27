import { useEffect, useState } from "react";

function Btn() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    console.log("Functional");
  }, []);

  useEffect(() => {
    console.log("Functional");
    console.log("count", count);
  }, [count, status, color]);

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

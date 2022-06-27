// A mock function to mimic making an async post of data
export function postOrder(products) {
  console.log("POST products:", products);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: "success" }), 500)
  );
}

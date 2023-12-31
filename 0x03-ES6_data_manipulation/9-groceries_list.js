// A function named groceriesList that returns a map of groceries with the following
// items(name, quantity):
export default function groceriesList() {
  const groceryList = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  return new Map(groceryList);
}

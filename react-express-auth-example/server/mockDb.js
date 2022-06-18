
// mock DB
export const USER_DATA = [
    // This user is added to the array to avoid creating new user on each restart
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      password: "Test123",
      dateOfBirth: "02-02-1990",
      orders: [1, 2, 4],
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@gmail.com",
      password: "Foobar123",
      dateOfBirth: "15-10-1985",
      orders: [2, 3, 4],
    },
  ];
  
  export const ORDER_DATA = [
    // This user is added to the array to avoid creating new user on each restart
    {
      id: 1,
      name: "iPhone 11 64GB",
      price: "649 USD",
      date: "01-02-2022",
    },
    {
      id: 2,
      name: "Samsung Galaxy 10S 128GB",
      price: "550 USD",
      date: "05-05-2022",
    },
    {
      id: 3,
      name: "TOSHIBA USB Drive 256GB",
      price: "34 USD",
      date: "01-02-2022",
    },
    {
      id: 4,
      name: "Netgear Router",
      price: "135 USD",
      date: "21-03-2022",
    },
  ];
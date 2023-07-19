// restaurantData.js

const restaurantData = [
    {
      id: 1,
      name: "Restaurant A",
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      menu: [
        {
          id: 1,
          name: "Pizza",
          image: "https://i.ibb.co/wWSBDpX/high-angle-pakistan-meal-composition.jpg", // Add the image for the "Pizza" menu item
          categories: [
            { id: 1, name: "Small", price: 200 },
            { id: 2, name: "Medium", price: 300 },
            { id: 3, name: "Large", price: 400 },
          ],
        },
        // Add more menu items for Restaurant A
      ],
    },
    {
      id: 2,
      name: "Restaurant B",
      image: "https://media.istockphoto.com/id/1159992039/photo/cozy-restaurant-for-gathering-with-friends.jpg?s=1024x1024&w=is&k=20&c=SsrW7bOxbbPMxC1WcOeeqxHHdecUrJAJglKE-LcJIPM=",
      menu: [
        {
          id: 1,
          name: "Burger",
          image: "https://i.ibb.co/dfHYgj6/top-view-table-full-delicious-food-composition.jpg",
          categories: [
            { id: 1, name: "Regular", price: 150 },
            { id: 2, name: "Cheeseburger", price: 180 },
          ],
        },
        // Add more menu items for Restaurant B
      ],
    },
    {
      id: 3,
      name: "Restaurant C",
      image: "https://images.pexels.com/photos/5985418/pexels-photo-5985418.jpeg?auto=compress&cs=tinysrgb&w=600",
      menu: [
        {
          id: 1,
          name: "Pasta",
          image: "https://i.ibb.co/zRXJ53p/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg",
          categories: [
            { id: 1, name: "Regular", price: 150 },
            { id: 2, name: "Cheeseburger", price: 180 },
          ],
        },
        // Add more menu items for Restaurant B
      ],
    },
    // Add more restaurants as needed
  ];
  
  export default restaurantData;
  
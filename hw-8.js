const orders = [
  { id: 1, item: "Laptop", paid: true },
  { id: 2, item: "Phone", paid: false },
  { id: 3, item: "Tablet", paid: true },
];

const deliveryData = {
  1: "Delivered in 3 days",
  3: "Delivered in 5 days",
};

function fetchDeliveryInfo(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
    }, 1000);
  });
}

function processOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, 2000);
  })
    .then((receivedOrders) => {
      const paidOrders = receivedOrders.filter((order) => order.paid);

      const deliveryPromises = paidOrders.map((order) =>
        fetchDeliveryInfo(order.id)
      );

      return Promise.all(deliveryPromises).then((deliveryInfos) => {
        return paidOrders.map((order, index) => ({
          ...order,
          deliveryTime: deliveryInfos[index].deliveryTime,
        }));
      });
    })
    .then((finalOrders) => {
      console.log("Final orders with delivery info:", finalOrders);
      return finalOrders;
    })
    .catch((error) => {
      console.error("An error occurred:", error.message);
      throw error;
    });
}

processOrder();

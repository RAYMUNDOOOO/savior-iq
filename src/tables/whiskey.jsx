const generateRandomData = () => {
  const randomData = [];
  for (let i = 0; i < 7; i++) {
    randomData.push(Math.floor(Math.random() * 101)); // Generates random number between 0 and 100
  }
  return randomData;
};

const data = [
  {
    //0
    labels: ["Sweet", "Smokey", "Floral", "Fruity", "Spicy", "Herbal", "Peaty"],
    datasets: [
      {
        label: "Bottle 0",
        data: generateRandomData(),
        fill: true,
        backgroundColor: "rgba(215, 130, 90, 0.5)",
        borderColor: "rgb(215, 130, 90)",
        pointBackgroundColor: "rgb(150, 65, 10)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      //       {
      //         label: "My Second Dataset",
      //         data: [28, 48, 40, 19, 96, 27, 100],
      //         fill: true,
      //         backgroundColor: "rgba(54, 162, 235, 0.2)",
      //         borderColor: "rgb(54, 162, 235)",
      //         pointBackgroundColor: "rgb(54, 162, 235)",
      //         pointBorderColor: "#fff",
      //         pointHoverBackgroundColor: "#fff",
      //         pointHoverBorderColor: "rgb(54, 162, 235)",
      //       },
    ],
  },
  {
    //1
    labels: ["Sweet", "Smokey", "Floral", "Fruity", "Spicy", "Herbal", "Peaty"],
    datasets: [
      {
        label: "Bottle 1",
        data: [5, 90, 40, 60, 20, 15, 30],
        fill: true,
        backgroundColor: "rgba(215, 130, 90, 0.5)",
        borderColor: "rgb(215, 130, 90)",
        pointBackgroundColor: "rgb(150, 65, 10)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  },
  {
    //2
    labels: ["Sweet", "Smokey", "Floral", "Fruity", "Spicy", "Herbal", "Peaty"],
    datasets: [
      {
        label: "Bottle 2",
        data: generateRandomData(),
        fill: true,
        backgroundColor: "rgba(215, 130, 90, 0.5)",
        borderColor: "rgb(215, 130, 90)",
        pointBackgroundColor: "rgb(150, 65, 10)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  },
  {
    //3
    labels: ["Sweet", "Smokey", "Floral", "Fruity", "Spicy", "Herbal", "Peaty"],
    datasets: [
      {
        label: "Bottle 3",
        data: generateRandomData(),
        fill: true,
        backgroundColor: "rgba(215, 130, 90, 0.5)",
        borderColor: "rgb(215, 130, 90)",
        pointBackgroundColor: "rgb(150, 65, 10)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  },
  {
    //4
    labels: ["Sweet", "Smokey", "Floral", "Fruity", "Spicy", "Herbal", "Peaty"],
    datasets: [
      {
        label: "Bottle 4",
        data: generateRandomData(),
        fill: true,
        backgroundColor: "rgba(215, 130, 90, 0.5)",
        borderColor: "rgb(215, 130, 90)",
        pointBackgroundColor: "rgb(150, 65, 10)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  },
];

const getData = () => {
  return data;
};

export { getData };

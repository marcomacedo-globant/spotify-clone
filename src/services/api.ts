import { Library } from "../types/global";

type DataResponse = {
  data: {
    library: Library;
  };
};

export const initializeApp = () => {
  return new Promise<DataResponse>((resolve) => {
    const response: DataResponse = {
      data: {
        library: [
          {
            name: "Ride The Ligthning",
            credits: "Metallica",
            cover:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/RIDE_THE_LIGHTNING_remake.png/900px-RIDE_THE_LIGHTNING_remake.png",
          },
        ],
      },
    };

    setTimeout(() => resolve(response), 500);
  });
};

import { Library, AudioItem } from "../types/global";

type DataResponse = {
  data: {
    library: Library;
    recommendations: {
      shorcuts: Array<AudioItem>;
      playlists: Array<AudioItem>;
    };
  };
};

const MOCKED_AUDIO_ITEMS: AudioItem[] = [
  {
    name: "Dear John C.",
    credits: "Elvin Jones",
    cover: "https://upload.wikimedia.org/wikipedia/en/c/c5/Dear_John_C.jpg",
  },
  {
    name: "Kind of Blue",
    credits: "Miles Davis",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg",
  },
  {
    name: "The Archer",
    credits: "Alexandra Savior",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/Alexandra_Savior_-_The_Archer.png",
  },

  {
    name: "Ride The Ligthning",
    credits: "Metallica",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/RIDE_THE_LIGHTNING_remake.png/900px-RIDE_THE_LIGHTNING_remake.png",
  },
  {
    name: "Dear John C.",
    credits: "Elvin Jones",
    cover: "https://upload.wikimedia.org/wikipedia/en/c/c5/Dear_John_C.jpg",
  },
  {
    name: "Kind of Blue",
    credits: "Miles Davis",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg",
  },
];

export const initializeApp = () => {
  return new Promise<DataResponse>((resolve) => {
    const response: DataResponse = {
      data: {
        library: MOCKED_AUDIO_ITEMS,
        recommendations: {
          shorcuts: MOCKED_AUDIO_ITEMS,
          playlists: MOCKED_AUDIO_ITEMS,
        },
      },
    };

    setTimeout(() => resolve(response), 500);
  });
};

type Response<D> = {
  status: number;
  data: D;
};
type UserLibraryResponse = Response<AudioItem[]>;

export const fetchUserLibrary = () => {
  return new Promise<UserLibraryResponse>((resolve) => {
    const response: UserLibraryResponse = {
      status: 200,
      data: MOCKED_AUDIO_ITEMS,
    };

    setTimeout(() => resolve(response), 6000);
  });
};

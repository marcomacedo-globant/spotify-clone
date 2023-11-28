export type Library = Array<AudioItem>;

export type AudioItem = {
  name: string;
  credits: string;
  cover: string;
};

export type AsyncItem<Item> = {
  data: Item;
  status: AsyncItemStatus;
};

export type AsyncItemStatus = {
  current: "loading" | "success" | "error" | "unset";
  details: string;
};

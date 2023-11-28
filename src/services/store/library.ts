import { useReducer } from "react";
import { AudioItem, AsyncItem, AsyncItemStatus } from "../../types/global";
import { fetchUserLibrary } from "../api";

type LibraryState = {
  selectedRecord: AudioItem | null;
  selectedRecordStatus: "selected" | "playing" | "none";
  records: AsyncItem<AudioItem[]>;
  playlists: AudioItem[];
  status: AsyncItemStatus;
};

const initialState: LibraryState = {
  selectedRecord: null,
  selectedRecordStatus: "none",
  status: { current: "unset", details: "" },
  playlists: [],
  records: {
    data: [],
    status: { current: "unset", details: "" },
  },
};

type LoadUserLibrary = {
  type: "userLibrary.LOADING";
};

type SetUserLibrary = {
  type: "userLibrary.SET";
  payload: AsyncItem<AudioItem[]>;
};

type LibraryActions = LoadUserLibrary | SetUserLibrary;

function reducer(state: LibraryState, action: LibraryActions): LibraryState {
  switch (action.type) {
    case "userLibrary.LOADING":
      return {
        ...state,
        status: {
          current: "loading",
          details: "",
        },
      };
    case "userLibrary.SET":
      return {
        ...state,
        status: action.payload.status,
        records: {
          data: action.payload.data,
          status: action.payload.status,
        },
      };
    default:
      return state;
  }
}

export function useLibrary() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    ...state,
    getLibrary: async () => {
      dispatch({
        type: "userLibrary.LOADING",
      });
      try {
        const response = await fetchUserLibrary();
        dispatch({
          type: "userLibrary.SET",
          payload: {
            data: response.data,
            status: {
              current: "success",
              details: "",
            },
          },
        });
      } catch (error) {
        dispatch({
          type: "userLibrary.SET",
          payload: {
            data: [],
            status: {
              current: "error",
              details: "",
            },
          },
        });
      }
    },
  };
}

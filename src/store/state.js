import { createContext } from "react";

export const Context = createContext({});

export const initialState = {
  movieListData: [],
  //! aggiunto
  genreList: [],
  iconPush: {
    burger: false,
    search: false,
    user: false,
  },
  modalContent: null,
  visible: false,
};

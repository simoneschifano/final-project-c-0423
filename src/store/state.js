import { createContext } from "react";

export const Context = createContext({});

export const initialState = {
  movieListData: [],
  genreList: [],
  iconPush: {
    burger: false,
    search: false,
    user: false,
  },
  modalContent: null,
  visible: false,
  ticketData: {
    title: "",
    date: "",
    hour: "",
    seat: [],
  },
  paymentModalVisible: false,
};

export const initRegisteredUsers = {
  users: [
    {
      username: "Valerio",
      password: "vale02",
      nome: "Valerio",
      cognome: "La Venuta",
      email: "eeeee@gmail.com",
    },
    {
      username: "Chiara",
      password: "chianico",
      nome: "Chiara",
      cognome: "Nicoletti",
      email: "eeeee@gmail.com",
    },
    {
      username: "Mattia",
      password: "mattinini",
      nome: "Mattia",
      cognome: "Nini",
      email: "eeeee@gmail.com",
    },
    {
      username: "Valentina",
      password: "valeurzi",
      nome: "Valentina",
      cognome: "Urzi",
      email: "eeeee@gmail.com",
    },
    {
      username: "Erica",
      password: "ericandi",
      nome: "Erica",
      cognome: "Candido",
      email: "eeeee@gmail.com",
    },
  ],
  protoUser: {
    username: "",
    password: "",
    nome: "",
    cognome: "",
    email: "",
  },
};

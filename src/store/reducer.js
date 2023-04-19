export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return {
        ...state,
        movieListData: action.payload,
      };
    case "SET_GENRE_LIST":
      return {
        ...state,
        genreList: action.payload,
      };
    case "SET_MODAL_CONTENT_USER":
      document.body.classList.add("noscroll");
      return {
        ...state,
        iconPush: { search: false, burger: false, user: true },
        modalContent: action.payload,
      };
    case "SET_MODAL_CONTENT_BURGER":
      document.body.classList.add("noscroll");
      return {
        ...state,
        iconPush: { search: false, user: false, burger: true },
        modalContent: action.payload,
      };
    case "SET_MODAL_CONTENT_SEARCH":
      document.body.classList.add("noscroll");
      return {
        ...state,
        iconPush: { search: true, user: false, burger: false },
        modalContent: action.payload,
      };

    case "SET_MODAL_CLOSE":
      document.body.classList.remove("noscroll");
      return {
        ...state,
        visible: false,
      };
    case "SET_MODAL_OPEN":
      return {
        ...state,
        visible: true,
      };
    case "CREATE_NEW_USER":
      console.log(state.users);

      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SET_TR_MOVIE_LIST":
      return {
        ...state,
        trListData: action.payload,
      };
    case "SET_TICKET_MOVIE_TITLE":
      return {
        ...state,
        ticketData: [{ ...state.ticketData, title: state.payload }],
      };

    case "SET_TICKET_DATE":
      return {
        ...state,
        ticketData: [{ ...state.ticketData, date: state.payload }],
      };
    case "SET_TICKET_HOUR":
      return {
        ...state,
        ticketData: [{ ...state.ticketData, hour: state.payload }],
      };
    case "SET_TICKET_SEAT":
      return {
        ...state,
        ticketData: [{ ...state.ticketData, seat: state.payload }],
      };
  }
};

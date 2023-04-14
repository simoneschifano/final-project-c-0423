import AccModal from "../components/accModal/AccModal";
export const mainReducer = (state, action) => {
	switch (action.type) {
		case "SET_MOVIE_LIST":
			return {
				...state,
				movieListData: action.payload,
			};

		case "SET_MODAL_CONTENT_USER":
			return {
				...state,
				iconPush: { search: false, burger: false, user: true },
				modalContent: action.payload,
			};
		case "SET_MODAL_CONTENT_BURGER":
			return {
				...state,
				iconPush: { search: false, user: false, burger: true },
				modalContent: action.payload,
			};
		case "SET_MODAL_CONTENT_SEARCH":
			return {
				...state,
				iconPush: { search: true, user: false, burger: false },
				modalContent: action.payload,
			};
	}
};

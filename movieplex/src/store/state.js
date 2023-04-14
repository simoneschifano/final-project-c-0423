import { createContext } from "react";

export const Context = createContext({});

export const initialState = {
	movieListData: [],
	iconPush: {
		burger: false,
		search: false,
		user: false,
	},
	modalContent: null,
	visible: false,
};

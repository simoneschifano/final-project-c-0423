import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	env: {
		REACT_PUBLIC_API_URL:
			"https://api.themoviedb.org/3/movie/upcoming?api_key=3952ada8611fe5cc504d6b498fdac98d&language=it-IT",
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "./src/styles/_variables.scss";
        `,
			},
		},
	},
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { alias } from "./configs/viteConfig";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), alias([{"~~":"src"}])],
});

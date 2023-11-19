import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "/",
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_APP_PORT) || 3000,
    },
    host: true,
    strictPort: true,
    publicDir: "./public",
  };
});

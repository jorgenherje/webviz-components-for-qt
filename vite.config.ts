import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const define = {
      "process.env": {},
  };

  // In order to polyfill "global" for older packages
  // Only in dev since "@loaders.gl" is already exporting "window" and would cause a duplicate export
  if (mode === "development") {
      define["global"] = "window";
  }

  return {
      plugins: [react()],
      define: define,
  }
});

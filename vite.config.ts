import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
	react(),
	dts({
	    insertTypesEntry: true
	})
    ],
    /*
    build: {
	lib: {
	    entry: path.resolve(__dirname, 'src/components/index.tsx'),
	    name: 'frg',
	    formats: [
		'es',
		'umd'
	    ],
	    fileName: (format) => `frg.${format}.js`
	},
	rollupOptions: {
	    external: [
		'react',
		'react-dom',
	    ],
	    output: {
		globals: {
		    react: 'React',
		    'react-dom': 'ReactDom'
		}
	    }
	}
    }
    */
})

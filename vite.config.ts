import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@app': path.resolve(__dirname, './src/app'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@features': path.resolve(__dirname, './src/features'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@processes': path.resolve(__dirname, './src/processes'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@services': path.resolve(__dirname, './src/services'),
			'@config': path.resolve(__dirname, './src/config'),
		},
	},
})

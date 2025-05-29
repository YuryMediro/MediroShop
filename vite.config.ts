import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@app': '/src/app',
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@features': '/src/features',
			'@hooks': '/src/hooks',
			'@pages': '/src/pages',
			'@processes': '/src/processes',
			'@shared': '/src/shared',
			'@utils': '/src/utils',
			'@widgets': '/src/widgets',
			'@services': '/src/services/',
			'@config': '/src/config/',
		},
	},
})

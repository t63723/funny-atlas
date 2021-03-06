import App from './App.svelte';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then(registration => {
			console.log('SW registered: ', registration);
		}).catch(registrationError => {
			console.log('SW registration failed: ', registrationError);
		});
	});
}

const app = new App({
	target: document.body,
	props: {
		ready: false
	}
});

window.initMap = function ready() {
	app.$set({ready: true});
};

window.app = app;

export default app;

import './styles/global.scss';  //import all global styles here. It will be packet in bandle.
import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		name: 'myapp'
	}
});

window.app = app;

export default app;
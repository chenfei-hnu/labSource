const Enzyme = require('enzyme');
// TODO: Start using the official adapter when it is finalized
// https://github.com/enzymejs/enzyme/issues/2429#issuecomment-679265564
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({
	adapter: new Adapter(),
});

global.shallow = Enzyme.shallow;
global.render = Enzyme.render;
global.mount = Enzyme.mount;

jest.mock('history', () => ({
	createBrowserHistory: jest.fn(),
}));

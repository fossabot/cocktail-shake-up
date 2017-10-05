import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

// mocks
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

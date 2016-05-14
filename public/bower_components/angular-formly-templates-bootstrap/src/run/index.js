import addons from './addons';
import description from './description';

export default ngModule => {
  addons(ngModule);
  description(ngModule);
};

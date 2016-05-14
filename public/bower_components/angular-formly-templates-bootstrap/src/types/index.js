export default ngModule => {
  require('./checkbox')(ngModule);
  require('./multiCheckbox')(ngModule);
  require('./input')(ngModule);
  require('./radio')(ngModule);
  require('./select')(ngModule);
  require('./textarea')(ngModule);
};

export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'checkbox',
      template: require('./checkbox.html'),
      wrapper: ['bootstrapHasError'],
      apiCheck: check => ({
        templateOptions: {
        	label: check.string
        }
      })
    });
  }
};

export default  ngModule => {
  ngModule.config(addTextareaType);

  function addTextareaType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'textarea',
      template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        ngModelAttrs: {
          rows: {attribute: 'rows'},
          cols: {attribute: 'cols'}
        }
      },
      apiCheck: check => ({
        templateOptions: {
          rows: check.number.optional,
          cols: check.number.optional
        }
      })
    });
  }
};

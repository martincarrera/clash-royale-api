export default ngModule => {
  ngModule.run(addAddonsManipulator);

  function addAddonsManipulator(formlyConfig, formlyBootstrapApiCheck) {
    var addonTemplate = require('./addons.html');
    const addonChecker = formlyBootstrapApiCheck.shape({
      class: formlyBootstrapApiCheck.string.optional,
      text: formlyBootstrapApiCheck.string.optional,
      onClick: formlyBootstrapApiCheck.func.optional
    }).strict.optional;
    const api = formlyBootstrapApiCheck.shape({
      templateOptions: formlyBootstrapApiCheck.shape({
        addonLeft: addonChecker,
        addonRight: addonChecker
      })
    });
    formlyConfig.templateManipulators.preWrapper.push(function(template, options) {
      if (!options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
        return template;
      }
      formlyBootstrapApiCheck.warn([api], [options]);
      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
    });
  }
};

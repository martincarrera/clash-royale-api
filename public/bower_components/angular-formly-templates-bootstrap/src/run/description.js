export default ngModule => {
  ngModule.run(addDescriptionManipulator);

  function addDescriptionManipulator(formlyConfig) {
    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
      if (angular.isDefined(options.templateOptions.description)) {
        var el = document.createElement('div');
        el.appendChild(angular.element(template)[0]);
        el.appendChild(angular.element(
          '<p id="' + scope.id + '_description"' +
          'class="help-block"' +
          'ng-if="to.description">' +
          '{{to.description}}' +
          '</p>'
        )[0]);
        var modelEls = angular.element(el.querySelectorAll('[ng-model]'));
        if (modelEls) {
          modelEls.attr('aria-describedby', scope.id + '_description');
        }
        return el.innerHTML;
      } else {
        return template;
      }
    });
  }
};

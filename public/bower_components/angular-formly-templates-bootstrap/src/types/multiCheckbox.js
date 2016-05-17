export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'multiCheckbox',
      template: require('./multiCheckbox.html'),
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          labelProp: check.string.optional,
          valueProp: check.string.optional
        }
      }),
      defaultOptions: {
        noFormControl: false,
        ngModelAttrs: {
          required: {
            attribute: '',
            bound: ''
          }
        }
      },
      controller: /* @ngInject */ function($scope) {
        const to = $scope.to;
        const opts = $scope.options;
        $scope.multiCheckbox = {
          checked: [],
          change: setModel
        };

        // initialize the checkboxes check property
        $scope.$watch('model', function modelWatcher(newModelValue) {
          var modelValue, valueProp;

          if (Object.keys(newModelValue).length) {
            modelValue = newModelValue[opts.key];

            $scope.$watch('to.options', function optionsWatcher(newOptionsValues) {
              if (newOptionsValues && Array.isArray(newOptionsValues) && Array.isArray(modelValue)) {
                valueProp = to.valueProp || 'value';
                for (var index = 0; index < newOptionsValues.length; index++) {
                  $scope.multiCheckbox.checked[index] = modelValue.indexOf(newOptionsValues[index][valueProp]) !== -1;
                }
              }
            });
          }
        }, true);

        function checkValidity(expressionValue) {
          var valid;

          if ($scope.to.required) {
            valid = angular.isArray($scope.model[opts.key]) &&
              $scope.model[opts.key].length > 0 &&
              expressionValue;

            $scope.fc.$setValidity('required', valid);
          }
        }

        function setModel() {
          $scope.model[opts.key] = [];
          angular.forEach($scope.multiCheckbox.checked, (checkbox, index) => {
            if (checkbox) {
              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
            }
          });

          // Must make sure we mark as touched because only the last checkbox due to a bug in angular.
          $scope.fc.$setTouched();
          checkValidity(true);
          
          if ($scope.to.onChange) {
            $scope.to.onChange();
          }
        }

        if (opts.expressionProperties && opts.expressionProperties['templateOptions.required']) {
          $scope.$watch(function() {
            return $scope.to.required;
          }, function(newValue) {
            checkValidity(newValue);
          });
        }

        if ($scope.to.required) {
          var unwatchFormControl = $scope.$watch('fc', function(newValue) {
            if (!newValue) {
              return;
            }
            checkValidity(true);
            unwatchFormControl();
          });
        }
      }
    });
  }

};

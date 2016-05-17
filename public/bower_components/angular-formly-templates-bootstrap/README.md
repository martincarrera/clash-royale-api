# angular-formly: Bootstrap Template

Status:
[![npm version](https://img.shields.io/npm/v/angular-formly-templates-bootstrap.svg?style=flat-square)](https://www.npmjs.org/package/angular-formly-templates-bootstrap)
[![npm downloads](https://img.shields.io/npm/dm/angular-formly-templates-bootstrap.svg?style=flat-square)](http://npm-stat.com/charts.html?package=angular-formly-templates-bootstrap&from=2015-09-01)
[![Build Status](https://img.shields.io/travis/formly-js/angular-formly-templates-bootstrap.svg?style=flat-square)](https://travis-ci.org/formly-js/angular-formly-templates-bootstrap)

This is a template for angular-formly which adds templates with classes specific to bootstrap. Each field is wrapped in a div. This library is not standalone and requires angular-formly to be present and loaded.

### Demo http://angular-formly.com

## Dependencies
- Required to use these templates:
 - angular
 - angular-formly
 - api-check

- Dev dependencies to build Formly
 - npm


## Install in your project
- Install [angular-formly](https://github.com/formly-js/angular-formly)

- Install angular-formly: Bootstrap Templates
 `$ bower install angular-formly angular-formly-templates-bootstrap --save`

 or

 `$ npm install angular-formly angular-formly-templates-bootstrap --save`

- Include the javascript file in your index.html, Formly comes in the following flavors:
 `<script src="bower_components/angular-formly/dist/formly.min.js"></script>`
 `<script src="bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js"></script>`

 and

 `angular.module('yourModule', ['formly', 'formlyBootstrap']);`

 or

 `angular.module('yourModule', [require('angular-formly'), require('angular-formly-templates-bootstrap')]);`

## Documentation

See [angular-formly](http://docs.angular-formly.com) for formly core documentation.

### Common Properties

NOTE: All of these properties will be under the `templateOptions` property as of angular-formly 3.0.0

---
##### label (string)
>`label` is used to add an html label to each field.

###### Default
>`undefined`

---
##### labelSrOnly (boolean)
>`labelSrOnly` is used to add the sr-only class to a label so it will hide on non-screen-readers

###### Default
>`undefined`

---
##### required (boolean)
>`required` is used to add the required attribute to a form field.

###### Default
>`undefined`

---
##### disabled (boolean)
>`disabled` is used to add the disabled attribute to a form field.

###### Default
>`undefined`

---
##### placeholder (string)
>`placeholder` is used to add placeholder text to some inputs.

###### Default
>`undefined`

---
##### description (string)
>`description` is used to add descriptive text to all inputs.

###### Default
>`undefined`

---
##### addonLeft (object)
>`addonLeft` is used to add an add-on on the left of a field. The object accepts three properties: `text` that sets a simple text, `onClick` will add a `cursor:pointer` and an ng-click to the addon (invoked with the options and scope), and `class` that sets classes to the add-on.

###### Default
>`undefined`

---
##### addonRight (object)
>`addonRight` is used to add an add-on on the right of a field. The object accepts three properties: `text` that sets a simple text, `onClick` will add a `cursor:pointer` and an ng-click to the addon (invoked with the options and scope), and `class` that sets classes to the add-on.

###### Default
>`undefined`

### Fields

### Form Fields

Below is a detailed description of each form fields and its custom properties.

#### Input form field
>The input uses the <input> element and allows you to specify it's type via the type property

_Example text field_
```javascript
{
  "type": "input",
  "key": "firstName",
  "templateOptions": {
    "type": "email", // or url, or text, etc.
    "placeholder": "jane doe",
    "label": "First name"
  }
}
```

---
#### Textarea form field
>The textarea field creates multiline input with a textarea element.

##### lines (number, optional)
>`lines` sets the rows attribute for the textarea element.

_Example textarea field_
```json
{
  "type": "textarea",
  "key": "about",
  "templateOptions": {
    "placeholder": "I like puppies",
    "label": "Tell me about yourself",
    "rows": 4,
    "cols": 15
  }
}
```

---
#### Checkbox form field
>The checkbox field allows checkbox input with a input element set to `type='checkbox'`. It doesn't have any custom properties.

_Example checkbox field_
```json
{
  "type": "checkbox",
  "key": "checkThis",
  "templateOptions": {
    "label": "Check this box"
  }
}
```

---
#### multiCheckbox form field
>The multiCheckbox field allows to have a set of checkboxes which will be bind to a provided model value.

##### options (array, required)
>`options` is an array of options for the multiCheckbox form field to display. Each option should be an object.

##### labelProp (string, optional)
>`labelProp` is what is used for what is shown to the user. Defaults to `name`

##### valueProp (string, optional)
>`valueProp` is what is used for the value assigned to the model. Defaults to `value`

_Example multiCheckbox field_
```javascript
{
  key: 'roles',
  type: 'multiCheckbox',
  templateOptions: {
    label: 'Roles',
    options: [{id: 1, title : "Administrator"}, {id: 2, title : "User"}],
    valueProp: 'id',
    labelProp: 'title'
  }
}
```

_Example multiCheckbox field with async options_
```javascript
{
  key: 'roles',
  type: 'multiCheckbox',
  templateOptions: {
    label: 'Roles',
    options: [],
    valueProp: 'id',
    labelProp: 'title'
  },
  controller: function($scope, DataService) {
    DataService.getRoles().then(function(roles){
      // roles: [{id: 1, title : "Administrator"}, {id: 2, title : "User"}]
       $scope.to.options = roles;
    });
  }
}
```
---
#### Radio form field
>The radio field allows multiple choice input with a series of linked inputs, with `type='radio'`.

##### options (array, required)
>`options` is an array of options for the radio form field to display. Each option should be an object with a `name`(string) and `value`(string or number).

_Example radio field_
```json
{
  "key": "triedEmber",
  "type": "radio",
  "templateOptions": {
    "label": "Have you tried EmberJs yet?",
    "options": [
      {
        "name": "Yes, and I love it!",
        "value": "yesyes"
      },
      {
        "name": "Yes, but I'm not a fan...",
        "value": "yesno"
      },
      {
        "name": "Nope",
        "value": "no"
      }
    ]
  }
}
```

---
#### Select form field
>The select field allows selection via dropdown using the select element.

##### options (array, required)
>`options` is an array of options for the select form field to display. Each option should be an object with a `name`(string). You may optionally add a `group` to some or all of your options.

##### labelProp (string, optional)
>`labelProp` is what is used for what is shown to the user. Defaults to `name`

##### valueProp (string, optional)
>`valueProp` is what is used for the value assigned to the model. Defaults to `value`

##### groupProp (string, optional)
>`groupProp` is what is used to group the options

##### optionsAttr (string, optional)
>`optionsAttr` is what is used as the attribute ngOptions will be applied to. Defaults to `ng-options`

##### ngOptions (string, optional)
>If provided, this is used instead of the default `ng-options` giving you full control (and rendering the other options uncessisary.

[Example](http://angular-formly.com/#/example/bootstrap-formly/select)

_Example select field_
```json
{
  "key": "transportation",
  "type": "select",
  "templateOptions": {
    "label": "How do you get around in the city",
    "valueProp": "name",
    "options": [
      {
        "name": "Car"
      },
      {
        "name": "Helicopter"
      },
      {
        "name": "Sport Utility Vehicle"
      },
      {
        "name": "Bicycle",
        "group": "low emissions"
      },
      {
        "name": "Skateboard",
        "group": "low emissions"
      },
      {
        "name": "Walk",
        "group": "low emissions"
      },
      {
        "name": "Bus",
        "group": "low emissions"
      },
      {
        "name": "Scooter",
        "group": "low emissions"
      },
      {
        "name": "Train",
        "group": "low emissions"
      },
      {
        "name": "Hot Air Baloon",
        "group": "low emissions"
      }
    ]
  }
}
```

## Contributing

Please see the [CONTRIBUTING Guidelines](CONTRIBUTING.md).

## Thanks

A special thanks to [Nimbly](http://gonimbly.com) for creating/sponsoring angular-formly's development.
Thanks to [Kent C. Dodds](https://github.com/kentcdodds) for his continued support on the project.

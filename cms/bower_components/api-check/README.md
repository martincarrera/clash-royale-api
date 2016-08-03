# api-check

[![bower version](https://img.shields.io/bower/v/api-check.svg?style=flat-square)](https://www.npmjs.org/package/angular-formly)
[![npm version](https://img.shields.io/npm/v/api-check.svg?style=flat-square)](https://www.npmjs.org/package/angular-formly)
[![npm downloads](https://img.shields.io/npm/dm/api-check.svg?style=flat-square)](http://npm-stat.com/charts.html?package=api-check)
[![Build Status](https://img.shields.io/travis/kentcdodds/api-check.svg?style=flat-square)](https://travis-ci.org/kentcdodds/api-check)
[![Code Coverage](https://img.shields.io/codecov/c/github/kentcdodds/api-check.svg?style=flat-square)](https://codecov.io/github/kentcdodds/api-check)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kentcdodds/api-check?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

*If that build is ever red or the coverage is ever less than 100% then I want you to
[flame me on twitter (@kentcdodds)](https://twitter.com/kentcdodds) and be sure to mention how disappointed
[@josepheames](https://twitter.com/josepheames) would be in me*

It's like [ReactJS `propTypes`](http://facebook.github.io/react/docs/reusable-components.html) without React. Actually,
it's very heavily inspired by this concept. It's purpose is for normal JavaScript functions rather than just React
Components.

[![Demo Screenshot](other/screenshot.png)](http://jsbin.com/hibocu/edit?js,console,output)

## Installation

`$ npm i -S api-check` or `$bower i -S api-check`

api-check utilizes [UMD](https://github.com/umdjs/umd), so you can:

`var apiCheck = require('api-check')(/* your custom options, checkers*/);`

Also available as an AMD module or as `apiCheck` on global

## Example

Note, there are a bunch of tests. Those should be instructive as well.

```javascript
var myApiCheck = require('api-check')({
  /* config options */
  output: {
    prefix: 'app/lib Name',
    suffix: 'Good luck!',
    docsBaseUrl: 'http://www.example.com/error-docs#'
  },
  verbose: false
}, {
  /* custom checkers if you wanna */
});

// given we have a function like this:
function foo(bar, foobar) {
  // we can define our api as the first argument to myApiCheck.warn
  myApiCheck.warn([myApiCheck.number, myApiCheck.arrayOf(myApiCheck.string)], arguments);
  // do stuff
}
// the function above can be called like so:
foo(3, ['a','b','c']);

// if it were called like so, a descriptive warning would be logged to the console
foo('whatever', false);


// here's something a little more complex (this is what's in the screenshot and [the demo](http://jsbin.com/hibocu/edit?js,console,output))
var myCheck = require('api-check')({
  output: {
    prefix: 'myApp',
    suffix: 'see docs -->',
    docsBaseUrl: 'http://example.com/error-descriptions#'
  }
});
function doSomething(person, options, callback) {
  myCheck.warn([ // you can also do myCheck.throw to throw an exception
    myCheck.shape({
      name: myCheck.shape({
        first: myCheck.string,
        last: myCheck.string
      }),
      age: myCheck.number,
      isOld: myCheck.bool,
      walk: myCheck.func,
      ipAddress: function(val, name, location) {
        if (!/(\d{1,3}\.){3}\d{1,3}/.test(val)) {
          return myCheck.utils.getError(name, location, 'ipAddress');
        }
      },
      childrenNames: myCheck.arrayOf(myCheck.string).optional
    }),
    myCheck.any.optional,
    myCheck.func
  ], arguments, {
    prefix: 'doSomething',
    suffix: 'Good luck!',
    urlSuffix: 'dosomething-api-check-failure'
  });

  // do stuff
}

var person = {
  name: {
    first: 'Matt',
    last: 'Meese'
  },
  age: 27,
  isOld: false,
  ipAddress: '127.0.0.1',
  walk: function() {}
};
function callback() {}
var options = 'whatever I want because it is an "any" type';

console.log('Successful call');
doSomething(person, options, callback);

console.log('Successful call (without options)');
doSomething(person, callback); // <-- options is optional

console.log('Failed call (without person)');
doSomething(callback); // <-- this would fail because person is not optional

person.ipAddress = 'Invalid IP Address!!!';

console.log('Failed call (invalid ip address)');
doSomething(person, options, callback); // <-- this would fail because the ipAddress checker would fail

// if you only wish to check the first argument to a function, you don't need to supply an array.

var libCheck = apiCheck(); // you don't HAVE to pass anything if you don't want to.
function bar(a) {
  var errorMessage = libCheck(apiCheck.string, arguments);
  if (!errorMessage) {
    // success
  } else if (typeof errorMessage === 'string') {
    // there was a problem and errorMessage would like to tell you about it
  }
}
bar('hello!'); // <-- success!
```

## Differences from React's propTypes

Differences in [Supported Types](#supported-types) noted below with a *

- All types are required by default, to set something as optional, append `.optional`
- checkApi.js does not support `element` and `node` types
- checkApi.js supports a few additional types
- `object` fails on null. Use `object.nullOk` if you don't want that

## Similarities to React's propTypes

This project was totally written from scratch, but it (should) support the same api as React's `propTypes` (with the
noted difference above). If you notice something that functions differently, please file an issue.

## apiCheck(), apiCheck.warn(), and apiCheck.throw()

These functions do the same thing, with minor differences. In both the `warn` and `throw` case, a message is generated
based on the arguments that the function was received and the api that was defined to describe what was wrong with the
invocation.

In all cases, an object is returned with the following properties:

### argTypes (arrayOf[Object])

This is an array of objects representing the types of the arguments passed.

### apiTypes (arrayOf[Object])

This is an object representing the types of the api. It's a whole language of its own that you'll hopefully get after
looking at it for a while.

### failed (boolean)

Will be false when the check passes, and true when it fails

### passed (boolean)

Will be true when the check passes, and false when it fails

### message (string)

If the check failed, this will be a useful message for display to the user. If it passed, this will be an empty string

Also note that if you only have one argument, then the first argument to the `apiCheck` function can simply be the
checker function. For example:

```javascript
apiCheck(apiCheck.bool, arguments);
```

The second argument can either be an arguments-like object or an array.

## Supported types

### array

```javascript
apiCheck.array([]); // <-- pass
apiCheck.array(23); // <-- fail
```

### bool

```javascript
apiCheck.bool(false); // <-- pass
apiCheck.bool('me bool too?'); // <-- fail
```

### func

```javascript
apiCheck.func(function() {}); // <-- pass
apiCheck.func(new RegExp()); // <-- fail
```

### func.withProperties *

*Not available in React's `propTypes`*

```javascript
var checker = apiCheck.func.withProperties({
  type: apiCheck.oneOfType([apiCheck.object, apiCheck.string]),
  help: apiCheck.string.optional
});
function winning(){}
winning.type = 'awesomeness';
checker(winning); // <--pass

function losing(){}
checker(losing); // <-- fail
```

### number

```javascript
apiCheck.number(423.32); // <-- pass
apiCheck.number({}); // <-- fail
```

### object *

`null` fails, use [`object.nullOk`](#objectnullok-) to allow null to pass

```javascript
apiCheck.object({}); // <-- pass
apiCheck.object([]); // <-- fail
apiCheck.object(null); // <-- fail
```

#### object.nullOk *

*Not available in React's `propTypes`*

``` javascript
apiCheck.object.nullOk({}); // <-- pass
apiCheck.object.nullOk([]); // <--- false
apiCheck.object.nullOk(null); // <-- pass
```

### string

```javascript
apiCheck.string('I am a string!'); // <-- pass
apiCheck.string([]); // <-- fail
```

### range

```javascript
apiCheck.range(0, 10)(4); // <-- pass
apiCheck.rang(-100, 100)(500); // <-- fail
```

### greaterThan

```javascript
apiCheck.greaterThan(100)(200); // <-- pass
apiCheck.greaterThan(-10)(-20); // <-- fail
apiCheck.greaterThan(50)('Frogs!'); // <-- fail
```

### lessThan

```javascript
apiCheck.lessThan(100)(50); // <-- pass
apiCheck.lessThan(-10)(0); // <-- fail
apiCheck.lessThan(50)('Frogs!'); // <-- fail
```

### instanceOf

```javascript
apiCheck.instanceOf(RegExp)(new RegExp); // <-- pass
apiCheck.instanceOf(Date)('wanna go on a date?'); // <-- fail
```

### oneOf

```javascript
apiCheck.oneOf(['Treek', ' Wicket Wystri Warrick'])('Treek'); // <-- pass
apiCheck.oneOf(['Chewbacca', 'Snoova'])('Snoova'); // <-- fail
```

### oneOfType

```javascript
apiCheck.oneOfType([apiCheck.string, apiCheck.object])({}); // <-- pass
apiCheck.oneOfType([apiCheck.array, apiCheck.bool])('Kess'); // <-- fail
```

### arrayOf

```javascript
apiCheck.arrayOf(apiCheck.string)(['Huraga', 'Japar', 'Kahless']); // <-- pass
apiCheck.arrayOf(
  apiCheck.arrayOf(
    apiCheck.arrayOf(
      apiCheck.number
    )
  )
)([[[1,2,3], [4,5,6], [7,8,9]], [[1,2,3], [4,5,6], [7,8,9]]]); // <-- pass (for realz)
apiCheck.arrayOf(apiCheck.bool)(['a', 'b', 'c']); // <-- fail
```

### typeOrArrayOf *

*Not available in React's `propTypes`*

Convenience checker that combines `oneOfType` with `arrayOf` and whatever you specify. So you could take this:

```javascript
apiCheck.oneOfType([
  apiCheck.string, apiCheck.arrayOf(apiCheck.string)
]);
```

with

```javascript
apiCheck.typeOrArrayOf(apiCheck.string);
```

which is a common enough use case to justify the checker.

```javascript
apiCheck.typeOrArrayOf(apiCheck.string)('string'); // <-- pass
apiCheck.typeOrArrayOf(apiCheck.string)(['array', 'of strings']); // <-- pass
apiCheck.typeOrArrayOf(apiCheck.bool)(['array', false]); // <-- fail
apiCheck.typeOrArrayOf(apiCheck.object)(32); // <-- fail
```

### objectOf

```javascript
apiCheck.objectOf(apiCheck.arrayOf(apiCheck.bool))({a: [true, false], b: [false, true]}); // <-- pass
apiCheck.objectOf(apiCheck.number)({a: 'not a number?', b: 'yeah, me neither (◞‸◟；)'}); // <-- fail
```

### shape *

*Note: React `propTypes` __does__ support `shape`, however it __does not__ support the `strict` option*

If you add `.strict` to the `shape`, then it will enforce that the given object does not have any extra properties
outside those specified in the `shape`. See below for an example...

```javascript
apiCheck.shape({
  name: checkers.shape({
    first: checkers.string,
    last: checkers.string
  }),
  age: checkers.number,
  isOld: checkers.bool,
  walk: checkers.func,
  childrenNames: checkers.arrayOf(checkers.string)
})({
  name: {
    first: 'Matt',
    last: 'Meese'
  },
  age: 27,
  isOld: false,
  walk: function() {},
  childrenNames: []
}); // <-- pass
apiCheck.shape({
  mint: checkers.bool,
  chocolate: checkers.bool
})({mint: true}); // <-- fail
```

Example of `strict`

```javascript
var strictShape = apiCheck.shape({
  cookies: apiCheck.bool,
  milk: apiCheck.bool,
  popcorn: apiCheck.bool.optional
}).strict; // <-- that!

strictShape({
  cookies: true,
  milk: true,
  popcorn: true,
  candy: true
}); // <-- fail because the extra `candy` property

strictShape({
  cookies: true,
  milk: true
}); // <-- pass because it has no extra properties and `popcorn` is optional
```

Note, you can also append `.optional` to the `.strict` (as in: `apiCheck.shape({}).strict.optional`)

#### shape.onlyIf *

*Not available in React's `propTypes`*

This can only be used in combination with `shape`

```javascript
apiCheck.shape({
  cookies: apiCheck.shape.onlyIf(['mint', 'chips'], apiCheck.bool)
})({cookies: true, mint: true, chips: true}); // <-- pass

apiCheck.shape({
  cookies: apiCheck.shape.onlyIf(['mint', 'chips'], apiCheck.bool)
})({chips: true}); // <-- pass (cookies not specified)

apiCheck.shape({
  cookies: apiCheck.shape.onlyIf('mint', apiCheck.bool)
})({cookies: true}); // <-- fail
```

#### shape.ifNot *

*Not available in React's `propTypes`*

This can only be used in combination with `shape`

```javascript
apiCheck.shape({
  cookies: apiCheck.shape.ifNot('mint', apiCheck.bool)
})({cookies: true}); // <-- pass

apiCheck.shape({
  cookies: apiCheck.shape.ifNot(['mint', 'chips'], apiCheck.bool)
})({cookies: true, chips: true}); // <-- fail
```

#### requiredIfNot *

*Not available in React's `propTypes`*

This can only be used in combination with `shape`

```javascript
checker = checkers.shape({
  foobar: checkers.shape.requiredIfNot(['foobaz', 'baz'], checkers.bool),
  foobaz: checkers.object.optional,
  baz: checkers.string.optional,
  foo: checkers.string.optional
});
checker({
  foo: [1, 2],
  foobar: true
}); // <-- passes

checker({foo: 'bar'}); // <-- fails
```

##### all

*Not available in React's `propTypes`*

This can only be used in combination with `shape.requiredIfNot`


```javascript
checker = checkers.shape({
  foobar: checkers.shape.requiredIfNot.all(['foobaz', 'baz'], checkers.bool),
  foobaz: checkers.object.optional,
  baz: checkers.string.optional,
  foo: checkers.string.optional
});
checker({
  foo: [1, 2]
}); // <-- fails

checker({
  foo: [1, 2],
  foobar: true
}); // <-- passes

checker({
  foo: [1, 2],
  baz: 'foo'
}); // <-- passes
```


### args *

*Not available in React's `propTypes`*

This will check if the given item is an `arguments`-like object (non-array object that has a length property)

```javascript
function foo(bar) {
  apiCheck.args(arguments); // <-- pass
}
apiCheck.args([]); // <-- fail
apiCheck.args({}); // <-- fail
apiCheck.args({length: 3}); // <-- pass
apiCheck.args({length: 'not-number'}); // <-- fail
```

### any

```javascript
apiCheck.any({}); // <-- pass
apiCheck.any([]); // <-- pass
apiCheck.any(true); // <-- pass
apiCheck.any(false); // <-- pass
apiCheck.any(/* seriously, anything, except undefined */); // <-- fail
apiCheck.any.optional(/* unless you specify optional :-) */); // <-- pass
apiCheck.any(3); // <-- pass
apiCheck.any(3.1); // <-- pass
apiCheck.any(3.14); // <-- pass
apiCheck.any(3.141); // <-- pass
apiCheck.any(3.1415); // <-- pass
apiCheck.any(3.14159); // <-- pass
apiCheck.any(3.141592); // <-- pass
apiCheck.any(3.1415926); // <-- pass
apiCheck.any(3.14159265); // <-- pass
apiCheck.any(3.141592653); // <-- pass
apiCheck.any(3.1415926535); // <-- pass
apiCheck.any(3.14159265359); // <-- pass
apiCheck.any(jfio,.jgo); // <-- Syntax error.... ಠ_ಠ
```

## Custom Types

You can specify your own type. You do so like so:

```javascript
var myCheck = require('api-check')({
  output: {prefix: 'myCheck'}
});

function ipAddressChecker(val, name, location) {
  if (!/(\d{1,3}\.){3}\d{1,3}/.test(val)) {
    return apiCheck.utils.getError(name, location, ipAddressChecker.type);
  }
};
ipAddressChecker.type = 'ipAddressString';

function foo(string, ipAddress) {
  myCheck.warn([
    myCheck.string,
    ipAddressChecker
  ], arguments);
}
```

Then, if you invoked that function like this:

```javascript
foo('hello', 'not-an-ip-address');
```

It would result in a warning like this:

```
myCheck apiCheck failed! `Argument 1` passed, `value` at `Argument 2` must be `ipAddressString`

You passed:
[
  "hello",
  "not-an-ip-address"
]

With the types:
[
  "string",
  "string"
]

The API calls for:
[
  "String",
  "ipAddressString"
]
```

There's actually quite a bit of cool stuff you can do with custom types checkers. If you want to know what they are,
look at the tests or file an issue for me to go document them. :-)

### apiCheck.utils

When writing custom types, you may find the `utils` helpful. Please file an issue to ask me to improve documentation for
what's available. For now, check out `api-check-utils.test.js`

## Customization

*Note, obviously, these things are specific to `apiCheck` and not part of React `propTypes`*

When you create your instance of `apiCheck`, you can configure it with different options as part of the first argument.


### config.output

You can specify some extra options for the output of the message.

```javascript
var myApiCheck = require('api-check')({
  output: {
    prefix: 'Global prefix',
    suffix: 'global suffix',
    docsBaseUrl: 'https://example.com/errors-and-warnings#'
  },
  verbose: false, // <-- defaults to false
  disabled: false // <-- defaults to false, set this to true in production
});
```

You can also specify an `output` object to each `apiCheck()`, `apiCheck.throw()`, and `apiCheck.warn()` request:

```javascript
myApiCheck(apiCheck.bool, arguments, {
  prefix: 'instance prefix:',
  suffix: 'instance suffix',
  urlSuffix: 'example-error-additional-info'
});
```

A failure with the above configuration would yield something like this:

```
Global prefix instance prefix {{error message}} instance suffix global suffix https://example.com/errors-and-warnings#example-error-additional-info
```

As an alternative to `urlSuffix`, you can also specify a `url`:

```javascript
myApiCheck(apiCheck.bool, arguments, {
  url: 'https://example.com/some-direct-url-that-does-not-use-the-docsBaseUrl'
});
```

### getErrorMessage

This is the method that apiCheck uses to get the message it throws or console.warns. If you don't like it, feel free to
make a better one by simply: `apiCheck.getErrorMessage = function(api, args, output) {/* return message */}`

### handleErrorMessage

This is the method that apiCheck uses to throw or warn the message. If you prefer to do your own thing, that's cool.
Simply `apiCheck.handleErrorMessage = function(message, shouldThrow) { /* throw or warn */ }`

### Disable apiCheck

It's a good idea to disable the apiCheck in production. You can disable your own instance of `apiCheck` as part of
the `options`, but it's probably just better to disable `apiCheck` globally. I recommend you do this before you (or
any of you dependencies) create an instance of `apiCheck`. Here's how you would do that:

```javascript
var apiCheck = require('api-check');
apiCheck.globalConfig.disabled = true;
```

## Credits

This library was written by [Kent C. Dodds](https://twitter.com/kentcdodds). Again, big credits go to the team working
on React for thinking up the api. This library was written from scratch, but I'd be lying if I didn't say that I
referenced their functions a time or two.

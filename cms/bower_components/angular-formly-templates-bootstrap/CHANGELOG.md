# 6.0.0

## Breaking Changes

- Updating to support the latest `apiCheck` api for types and wrappers. Thanks [@benoror](https://github.com/benoror)

# 5.0.2

- [@m0t0r](https://github.com/m0t0r) fixed [#37](/../../issues/37). Thanks!

# 5.0.1

- Botched the previous release

# 5.0.0

- Breaking change. There is now an ng-if around the label wrapper that removes it if is not specified. [#34](/../../issues/34)

# 4.4.1

- Fixes issue with multiCheckbox `required` and `expressionProperties` [#35](/../../issues/35)

# 4.4.0

- Adding the ability for `multiCheckbox` type to have objects. [#32](/../../issues/32) thanks to [@m0t0r](https://github.com/m0t0r)

# 4.3.2

- Fixing issue with required on multiCheckbox. [#26](/../../issues/26) thanks to [@ckniffen](https://github.com/ckniffen)

# 4.3.1

- Addon: Fixing the scope that's passed to `onClick`.

# 4.3.0

- Adding `onClick` to addons

# 4.2.0

- Allowing any type to have an addon.

# 4.1.0

- Bug in last release
- Last release should have been a minor version update.

# 4.0.10

- Making an easier api for custom `ng-options` for `select`.
- Removing inline-source-map so it's not included in minified code.

# 4.0.9

- Allowing descriptions on all types

# 4.0.8

- Fixing issue #17 with form control not getting set on multiCheckbox and radio types.

# 4.0.7

- Updating peerDependency with api-check.

# 4.0.6

- Fixing issue with the new api-check API.

# 4.0.5

- Fixing bug with multiCheckbox where no initial value would cause an error.

# 4.0.4

- Fixing multiCheckbox to initialize properly
- Fixing npm angular version to include beta versions.

# 4.0.3

- Fixing tabindex on radios

# 4.0.2

- Switching from `validateOptions` to `apiCheck`.

# 4.0.1

- Fixing external dependencies

# 4.0.0

- Added addonLeft and addonRight to place add-ons on fields
- Adding api-check dependency

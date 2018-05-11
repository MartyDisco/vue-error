# AdOn Candle

A simple Vue wrapper on StandardError.js, providing a simple yet powerful way to deal with errors

## Installing

Using npm :

```
npm install vue-error
```

Using yarn :

```
yarn add vue-error
```

## Setup

Import ES6 module style :

```
import Vue from 'vue'
import StandardError from 'vue-error'
```

Or CommonJS style :

```
const Vue = require('vue')
  , StandardError = require('vue-error')
```

Or AMD style :

```
define(['vue', 'vue-error'], function(Vue, StandardError) {})
```

Or even `<script>` style :

```
<script src="http://path/to/vue.js"></script>
<script src="http://path/to/vue-error/index.js"></script>
```

Then provide `StandardError` to the `use()` function of `Vue` :

```
Vue.use(StandardError)
```

## Useage

You can now use `$StandardError` in your `Vue` instances and components

```
// Example useage, to separate planned errors

new Vue({
  created() {
    this.$http.put('/api/user/', payloadObject)
    .then((res) => {
      if (res.data.error) throw new this.$StandardError(res.data.error)
      if (res.data.success) // Do something with response
    })
    .catch(this.$StandardError, err => // Show a res.data.error custom message to the client)
    .catch(err => // Keep in console or report for debugging) 
  }
})
```

* Have a look at [vue-axios](https://github.com/imcvampire/vue-axios) to implement `this.$http`

* And at [bluebird](https://github.com/petkaantonov/bluebird) for full featured promise with unmatched performance

## Dependencies

* [StandardError.js](https://github.com/moll/js-standard-error) - A tiny JavaScript library that simplifies creating subclasses of `Error` for custom error classes

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

# px2rem-loader

a [webpack](http://webpack.github.io/) loader for [px2rem](https://github.com/songsiqi/px2rem)

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/px2rem-loader.svg
[npm-url]: https://npmjs.org/package/px2rem-loader
[downloads-image]: http://img.shields.io/npm/dm/px2rem-loader.svg
[downloads-url]: https://npmjs.org/package/px2rem-loader

## Install

`npm install px2rem-plus-loader`

## webpack config

```
{
  loaders: [{ test: /\.css$/, loader: 'style!css!px2rem?remUnit=75&remPrecision=8' }]
}
```

Please see [px2rem](https://github.com/songsiqi/px2rem) for more information about query parameters of px2rem.

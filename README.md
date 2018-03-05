# px2rem-loader

a [webpack](http://webpack.github.io/) loader for [px2rem](https://github.com/songsiqi/px2rem)

## Install

`npm install px2rem-plus-loader`

## webpack config

```
{
  loaders: [{ test: /\.css$/, loader: 'style!css!px2rem?path=remUnit=75&remPrecision=8' }]
}
```

Please see [px2rem](https://github.com/songsiqi/px2rem) for more information about query parameters of px2rem.

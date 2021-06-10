# next-try-require
> Check if a dependency exists with webpack

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-try-require
```

## configuration
> project_root/config.js

```js
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: [
    paths.appSrc,
    path.join(__dirname, '../node_modules/@jswork/next-try-require/dist')
  ],
  loader: require.resolve('babel-loader')
}
```

## usage
```conf
└── medias
    ├── animation.tsx
    ├── audio.tsx
    ├── document.tsx
    ├── image.tsx
    ├── unknown.tsx
    └── video.tsx
```

```js
import '@jswork/next-try-require';

// .${context}${path}
// .${context}${defaults}
// @${context}${path}
// @${context}${defaults}

const MediaComponent = nx.tryRequire(
  mediaType,
  'unknown',
  { context: '/medias/'}
);

<MediaComponent model={model}/>
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-try-require/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-try-require
[version-url]: https://npmjs.org/package/@jswork/next-try-require

[license-image]: https://img.shields.io/npm/l/@jswork/next-try-require
[license-url]: https://github.com/afeiship/next-try-require/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-try-require
[size-url]: https://github.com/afeiship/next-try-require/blob/master/dist/next-try-require.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-try-require
[download-url]: https://www.npmjs.com/package/@jswork/next-try-require

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

const MediaComponent = nx.tryRequire(
  `medias/${mediaType}`, 
  'medias/unknown'
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

# razz
Test your React components without all the fuss.

[![latest release](https://img.shields.io/npm/v/razz.svg?style=flat-square)](https://www.npmjs.com/package/razz)
[![npm downloads](https://img.shields.io/npm/dt/razz.svg?style=flat-square)](https://www.npmjs.com/package/razz)
[![build status](https://travis-ci.org/geekytime/razz.svg?style=flat-square)](https://travis-ci.org/geekytime/razz)
[![MIT license](https://img.shields.io/github/license/geekytime/razz.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Why razz?

Razz provides a lightweight alternative for testing basic React components. Razz uses [domino](https://github.com/fgnass/domino) instead of [JSDom](https://github.com/tmpvar/jsdom), which reduces the amount of configuration needed to test simple components, and should also be a little faster for most tests (although I haven't compared performance side-by-side).

Razz lets you bring the test framework of your choice without any configuration, so you can easily use Mocha for your component tests.

Razz doesn't use _anything like_ Jest's powerful (but sometimes cumbersome) auto-mocking system. So simple components can have simple tests. You can still bring your own mocking tools, if you want to use them.

## Installation

You can install razz with npm.

```
npm install razz --save-dev
```

Razz also needs `react >= 0.14.x` and `react-dom` to work, but rather than install a specific version, we define it as a peer dependency so you can use any compatible `react` version. As of npm@3, peer dependencies are not installed automatically anymore. So if you don't already have `react` and `react-dom` installed, you'll have to install them on their own.

```
npm install react react-dom --save
```

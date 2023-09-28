# Pantelwar Utilities

## Description

This is a general purpose utility package for usage in javascript or typescript projects. All the functions here are well tested and used widely multiple times

Kindly check this package before making your own utilities in the project.

## Installation

For yarn users: (recommended)

```
yarn add @pantelwar/js-utils
```

For npm users:

```
npm install @pantelwar/js-utils
```

## Guidelines

Here are some guidelines to use some of the functions of this package.

- For using the `date`, create another `format-time.ts` file in the utils directory of the project, since every project will have different date standards.
- The `dom` package must only be used in browser contexts, so no SSR or node.js environments. It can contain DOM APIs such as `document` or `localStorage` which are not available in server side contexts.
- The `formik` package is used to get make the mui's input components react to error states, it should only be used if the project is using formik and mui both, although we can still use it with any UI library with some output mapping.

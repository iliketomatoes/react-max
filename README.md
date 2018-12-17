[![David Dependency Status](https://david-dm.org/iliketomatoes/react-max.svg)](https://david-dm.org/iliketomatoes/react-max)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/iliketomatoes/react-max.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/iliketomatoes/react-max/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/iliketomatoes/react-max.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/iliketomatoes/react-max/alerts/)

# React Max

Ideal boilerplate for a modern Progressive Web Application built with React.

## Features and main traits

Founding tools used for coding and bundling:

- [x] React (with React Hooks)
- [x] Typescript 3
- [x] Webpack 4

State management:

- [x] Redux
- [ ] Redux-react-hook
- [ ] Redux-Observables
- [ ] React Immer
- [ ] FSA Actions
- [ ] Retrieve initial state from the Local Storage

API client and UX:

- [ ] GraphQL
- [ ] Easy-to-use components which make API calls — pending, success, error states.
- [ ] API requests errors are notified through a global context provider.
- [ ] GraphQL caching through FlacheQL (? TBD)
- [ ] Optimistic UI updates

UI components - Styles:

- [x] React Material UI
- [x] CSS-in-JS (with useStyles hook)

Routing and Auth:

- [x] React Router
- [ ] Protected routes
- [ ] Login/logout functionalities
- [ ] Auto logout on 403 errors

Progressive Web App:

- [ ] Enabled offline usage
- [ ] Asset caching

## Requirements

- Node: `>=8.9.4`
- npm: `^6.1.0`

## Installation

```bash
npm install
```

## Usage

### Development

`npm run dev`

### Lint

`npm run lint`

### Build for production

`npm run build`

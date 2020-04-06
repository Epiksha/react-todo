# React ToDo App

## About
A simple ToDo list app created solely in React.

The boilerplate is based off of the [boilerplate](https://github.com/Epiksha/simple-react-boilerplate "React Boilerplate") I created for React towards the end of last year (excuse the naming, react-simple-boilerplate was taken).

I chose againt using Redux as this is a relatively simpler app and having a global store seemed overkill when, at most, I would only have to pass props down 2/3 levels across a few separate components.

What one might notice is that destructuring is used everywhere it possibly can - we have AirBnB's ESLint configuration to thank for that. A few other decisions regarding code structure were also a result of the strict ESLint configuration.

The app is entirely integrated using the browser's local storage to handle data changes and is fully responsive.

Feel free to create some tasks and experiment for yourself.
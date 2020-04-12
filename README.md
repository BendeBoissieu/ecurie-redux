# redux-router-boilerplate

Simple React + Router + Redux starter with the following config:

- React, ReactDOM
- Redux, React-Redux
- React-Router-DOM
- Webpack 3
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

⚠️This can't be deployed on GitHub Pages, it needs a Node.js setup for the back-end as the paths need to be dynamically linked back to `index.html`.

I am using an API to store the data from LeWagon. However, it was made for an app that save cars models.  As I am saving horses, I had to convert some attributes. brand: breed, model: name, plage: age

# Udacity Landing Page

## Development Strategy

- 3 content sections
- Note the values for their `id`, `class`, and `data` attributes.
- Create array of content sections
- Loop the array using a function
- Build a navigation menu depending on the contents in the array

```js
const contents = [
  {
    id: "section 1",
  },
  {
    id: "section 2",
  },
];
```

- Add class active when we're scrolling to specific section. So that the navigation link becomes highlighted with CSS class active.
- Add the functionality to scroll to sections
- `window.scrollTo(0, 500)` // x, y
- Use a linter to make the code clean, like using ESLint.
- `Map.forEach()`
- Add some more contents
- Test the performance when loading the JavaScript. Put the JavaScript script tag before the body ends.
- Hide the navigation bar when there is no scrolling.
- Add a scroll to top button when below the fold.
- Make sections collapsible responsive.

## Udacity Style Guides

You should write your code and markup to meet the specifications provided in these style guides:

- [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Git Style Guide](https://udacity.github.io/git-styleguide/)

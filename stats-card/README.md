# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./images/screenshot-mobile.png)
![](./images/screenshot-desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://fm-solutions.glitch.me/stats-card.html](https://fm-solutions.glitch.me/stats-card.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I've learned about accessible card component that in the HTML we put images after the title, then use `order` in CSS to arrange the position.

When I started this project I didn't check the design of desktop version carefully, so I didn't wrap the text togerther in the HTML, this made using grid for the large view impossible.

So I used `position: absolute` to arrange the image and used `padding-right` to narrow down the space for text.

This is the CSS snippets:

```css
/* use `padding-right` to narrow down the space */
.card {
  max-width: 1110px;
  position: relative;
  padding: 3rem;
  padding-right: calc(50% + 3rem);
  text-align: left;
}

/* use absolute position to handle image */
.card__media {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  margin-bottom: 0;
}
```

## Author

- Website - [CY is here](https://cyishere.dev)
- Frontend Mentor - [@cyishere](https://www.frontendmentor.io/profile/cyishere)
- Twitter - [@cyishere](https://www.twitter.com/cyishere)

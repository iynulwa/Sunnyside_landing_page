# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://github.com/iynulwa/Sunnyside_landing_page)
- Live Site URL: [Add live site URL here](https://sunnyside-landing-page-pink-three.vercel.app/)


### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Used .map to create the testimonial section of the project

```js
function createCard(info){
    return(
        <Cards
            key={info.id}
            image={info.image}
            testimony={info.testimony}
            name={info.name}
            occupation={info.occupation}
        />
    )
}

function Testimonial() {
    return(
        <div className='testimonial'>
            <h2 className='testimonial-heading'>CLIENT TESTIMONIALS</h2>
            <div className='testimonial-card'>
                {testimonialInfo.map(createCard)}
            </div>
        </div>
        
    )
}
```

### Continued development

The nexy step after finishing this project is a way to add animations to the websites

## Author

- Frontend Mentor - [@iynulwa](https://www.frontendmentor.io/profile/iynulwa)
- Twitter - [@iynulwa](https://www.twitter.com/iynulwa)

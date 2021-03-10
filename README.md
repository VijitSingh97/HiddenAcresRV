# Hidden Acres RV Campground

A beautiful homepage for [Hidden Acres RV Campground](https://www.hiddenacresrv.com), located in [Princeton, TX](https://goo.gl/maps/Fe2zQ4k8zSDXjGBq8). This webpage directs users to a reservation portal and waitlist, describes the campground and local attractions, and contains contact information and FAQs.

![screenshot](https://github.com/VijitSingh97/HiddenAcresRV/blob/master/src/images/signage/big_sign.jpg)

## Content

Each of the sections in the site are placed in `src/components/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

Also included is the old website in `old_website/`

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses styled-components to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.

## Prod Deployment

1. Install dependencies

    `npm ci`
2. Build deployment files

    `./prod-build.sh`
3. Expose `public/`
    Export public facing files over port 80 or 443 using ngnix

## Local Deployment

1. Install dependencies
    `npm ci`
2. Run project
    `./dev-build.sh`
3. View Project in your browser
    Find the project running at <http://localhost:8000>

---

Adapted from: [gatsby-absurd](https://github.com/ajayns/gatsby-absurd)

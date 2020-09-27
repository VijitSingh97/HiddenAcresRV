# Hidden Acres RV Campground
A beautiful homepage to Hidden Acres RV Campground, located in Princeton, TX. This webpage directs users to a reservation portal, describes the campground and local amenities, contact information, and FAQs. 

![screenshot](https://github.com/VijitSingh97/HiddenAcresRV/blob/master/src/images/signage/big_sign.jpg)

## Content

Each of the sections in the site are placed in `src/components/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

Also included is the old website for caching purposes in `old_website/` with original links

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses styled-components to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.

## Prod Deployment
1. Install dependencies

    `yarn install`
2. Build deployment files

    `yarn build`
3. Expose `public/`
    
    Export public facing files over port 80 or 443 using ngnix (out of scope for this read me)

## Local Deployment
1. Install dependencies
    
    `yarn install`
2. Run project
    
    `yarn dev`
3. View Project in your broswer
    
    Find the project running at http://localhost:8000

### Adapted from:

[gatsby-absurd](https://github.com/ajayns/gatsby-absurd)
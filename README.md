# Petsy Image Carousel

> This is an image carousel meant to mimic the look and functionality of the one used by Etsy (ex. https://www.etsy.com/listing/568729539/pumpkin-pie-cat-and-small-pet-hat-felt?ref=hp_merch_co-6&variation0=718853680). It displays thumbnails for all images linked to a specific product and displays a main image. The main image can be changed by either clicking on the thumbnails or using the navigation buttons to either side of the main image. Clicking on the main image will bring up a modal that allows a user a more interactive way to view the product photos. The page will dim and the modal carousel will appear center-screen. The thumbnails of the modal are larger and clicking on the main image of the modal will either enlarge it to its actual size if there is room in the window, or pull up a 'zoomed' version of that photo which the user can scroll over using the mouse. The modal can be exited using either the 'X' button at the top right of the screen or by clicking on a dimmed area.

> This service was created and refined over a two-week period as part of a Front End Capstone for the Hack Reactor Remote Software Engineering Immersive program. It is intended to be joined with the other services within this repository via a proxy server to mimic the look and feel of Etsy's site.

## Related Projects

> Parent repo: https://github.com/HRR48-FEC-SquawkinPhoenix

  - https://github.com/HRR48-FEC-SquawkinPhoenix/Seller
  - https://github.com/HRR48-FEC-SquawkinPhoenix/Add-To-Cart
  - https://github.com/HRR48-FEC-SquawkinPhoenix/Reviews

  - Proxy server combining these: https://github.com/HRR48-FEC-SquawkinPhoenix/Stu-Proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Notes](#notes)

## Usage

> Some usage instructions

1. Run 'npm install' from the root. This installs the necessary dependencies for the service to run.
1. Run 'npm run build' from the root. This will bundle the React components into a single file that is run as a script from the index.html file. This ensures that service can be run in older browsers. A bundle is provided as part of this repo, but if local changes are made you will have to rebundle to view them.
1. Ensure that a MySQL database server is running, then run 'npm run init_db' from the root. This will create the database and tables this service relies on and seed the tables with some example data.
1. Run 'npm start' from the root. The MySQL server with the database seeded in the previous step must still be open. This will start an Express server on port 3001, and the server will respond to a request to root by serving up a static file--the index.html that runs our bundle created in step 2.
1. Once the Express server is running, the service can be accessed at 'http://localhost:3001', which has a default product it will display images for.
1. To display the image carousel for a different product, users can simply use a '/:id' URL. Ex. 'http://localhost:3001/2' will display the images for the product with ID 2 in the database. The root URL endpoint is identical to 'http://localhost:3001/1', as a default URL is used for the root to ensure that not looking for a specific product does not break the service.

## Requirements

- Node >=6.13.0
- MySQL
- Please see package.json file for details. 'npm install' should handle dependencies.

## Notes

There are some idiosyncracies with this service that I am currently aware of.

- The zoom functionality on the modal's main image uses react-image-magnifiers, which bases the zoomed in version of the photo on the original filesize. At larger window sizes, it is possible for images to already be their full size, and therefore not zoom. At medium window sizes, if there is enough space, the photos will simply expand to their full size. It is only at relatively smaller window sizes where the photos can't expand much where the zoom works as expected, though when it works it is exactly as intended. The modal's main image can also be spaced somewhat oddly relative to the left margin of the screen at small window-sizes.

> Most previous issues with CSS and responsiveness to different window sizes have been improved or fixed. The service has maximum and minimum sizes to prevent too much 'stretching' or 'squeezing' and it will simply overflow out of a small window and hit a max size and stop changing on a large window.

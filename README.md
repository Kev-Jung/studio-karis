# Studio Karis - Protoype Website

---

### Background

This project is a static website that I created for an online wedding business run on Etsy, [Studio Karis](https://www.etsy.com/shop/studiokaris/?etsrc=sdt). The client wanted to diversify their inbound traffic to their business by expanding their presence outside of Etsy. They requested a mock design of a protoype that they could use for their online business. With their team's ideas and media assets, I was able to design a mobile/desktop responsive site that customers can land on and shop through Etsy. This website will eventualy become a full fledged e-commerce store.

### Challenges

1. Building a Responsive Navigation
   - An obstacle I ran into early on was building a responsive navigation with a toggle button using pure CSS only. It was initially challenging to use CSS to build my own icons for toggling and exiting the navbar on mobile screen sizes and using the transform properties various usages to create a sliding navbar with some javascript. The navigation also needed to be fixed and background color changed on scroll which javascript was used to create. Through this exercise I became more comfortable with using media queries, flexbox, and custom CSS styling.
2. Responsive Layout for Photo Gallery
   - One of the client's requirements was to create a photo collage to showcase their products and customer submited photos. I initally used flexbox for the layout, but realized that using flexbox did not create a beautiful desgin of 3x3 tiles. Instead I used CSS grid for the layout and manipulated the grid-template-columns at various breakpoints for a seamless transition to mobile. Each image tile scales the image to be bigger and hovering on the photo will reveal the photo credits for the submitted customer on the corner of the image.

### Takeaway

Though just a static webpage, this project tested my abilities with CSS and layout. My biggest hurdle for completing this protoype was using media queries and organizing my CSS code in order to keep them clean, but more importantly, organized in sections so that later in the future when I import this into React, each CSS section will become its own CSS file in a component. Building this site helped further my experience with flexbox, CSS grid, and building and implementing my own CSS styles. This design is currrently being hosted on SquareSpace by the client at [Studio Karis](https://www.studiokaris.com/).

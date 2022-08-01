# GPU Shopping Cart

Made by Gabriel Hrastovic.

Site is live on: https://gabrielcro23.github.io/shopping-cart/

All images and color palletes are sourced from nvidia.com

If you clone this repo, you must first run **npm install** to install the dependencies below, followed by **npm run start** to run it locally.

This project uses:

-React & React router v6

-Material UI for styled components

This project took me about 50 hours to finish. It has 2 cart components - one for mobile, and one for larger screen widths like on desktop. I added some custom breakpoints to MUI for that. Ideally I think there should be only one cart component that scales accordingly, but I wanted one to remain static and one to be a swipeable drawer. Like my last React project, I think I made some mistakes that I might refactor later when it comes to state management - for example the price state derives from the models' state and although it works fine on my app, it can be a problem in bigger projects. Some of the harder parts of making the app were coming up with the code that can sort through the JSON data (which I later just changed to a JS object because of React/webpack filepathing stuff) and I spent several hours on that. I guess understanding common sorting algorithms is important even for front end. Some other slightly more complex code I had to add was making sure that a button was disabled once an item was in the cart, regardless of where a user was navigating, and for that I had to use .some() to match the product model values with the cart models value. It was my first project using react router, and that part was simple to figure out. useEffect was used just for setting some basic CSS animation stuff.

---

Since E-Commerce is a big thing, knowing how to quickly make a basic shopping cart seems important.

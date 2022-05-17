# Making a Website Responsive

## Software vs Hardware pixels:

1. Browser cannot tell difference between a desktop device and mobile device.
2. This is how our website will look like on a mobile device.
3. ![Mobile view](./mobile-view-site.png)
4. The browse basically squeezes the entire site into mobile device.
5. If we see, 1 inch = 96 px. And the pixel density on mobile and desktop are different.
6. This leads to point no. 3.(Website gets squeezed in mobile view)
7. Refer https://www.mydevice.io/ to get pixel density and ratio of different devices.

## viewport Metatag vs media query:

1. 'viewport metatag' is required to adjust our site to mobile device viewport.
2. We need to consider mobile device width to do this. Viewport metatag does not make any design changes, it just make our site adjust to other devices(as we seen different devices have different pixel density.)
3. Media queries on the other hand makes changes in design according to width and height.
4. We can specify whether use can zoom in or out in mobile devices in viewport metatag. Generally we give user flexibility to zoom in and out.
5. We can also specify how much a user can zoom in or out with help of 'maximum-scale=2.0' and 'minimum-scale=1.2'.
6. Without viewport metatag, we cannot create a mobile design for our website.
7. If we don't want out website to have any mobile device design, then not using viewport tag is best.
8. Nowadays websites are made with mobile first approach. i.e. Mobile view is first developed and then desktop view.

## Media queries:

1. We will make our website look good in smaller device, from width of 200px to 640px.
2. Read media query just like if statement.
3. @media (min-width: 640px){<'selectors and properties'>}
4. From here onwards we will apply mobile first approach, than means the code outside of media queries is actually for mobile devices. Code inside media-queries is for website.
5. We can have multiple media queries for multiple devices.
6. Two different media queries should have different limit.
7. If we add first media query: **_@media (min-width: 40rem) {}_** and second media query: **_@media (min-width: 60rem) {}_**, this is valid syntax and we can specify two different design for two queries.
8. But if apply 2nd media query first and first query after that, then the code is not valid.
9. As we increase width lesser to more, our media query will be activated once 40rem width is present. And when we reach 60rem, there will be no media query **after** 40rem media query, as we changed order. So no media query will be applied when width is 60rem in this case.
10. So we should always keep the order correct when we apply media queries.
11. Generally we right media queries after css code, at the end.

## Finding right breaking points:

1. Go to mydevice.io and then 'compare my devices'.
2. There we get css width and height of different devices.
3. We can decide width and height with multiple devices as breaking point, as this ensures our website looks good on multiple devices.

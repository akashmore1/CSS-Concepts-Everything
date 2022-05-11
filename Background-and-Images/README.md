# background and background-image Property

## background-image

1. We can apply background-image: url('<(imagePath)>') to add background as image.
2. If we apply background-image and background-color to same element, background-image will win irrespective of their order.
3. We can have multiple images as background but either a background-image or a background-color to an element.

### Sizing and positioning background-image:

## background-size property:

1. For sizing we use background-size: property.
2. background-size can be given values in px or in %.
3. If background size is too small that its container, image will be shown muliple times, each image with a width of given px or %.
4. If we give second argument to background-size, it will consider width and height resp. But image may become distorded in this case.
5. If we give background-size: 50%, image width will occupy 50% of comtainer.
6. If we give background-size: 100% 100%, image will occupy all space of container. In this case aspect ratio of image will become distorted.
7. We can give one of the width or height auto to eliminate distortion.
8. We can apply cover and contain in background-size.
9. cover will make sure that entire container containing image should be covered in image with no blanck spaces.
10. contain on the other hand will make sure entire image is shown shown in container, so container might have empty space.

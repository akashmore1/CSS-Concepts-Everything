# background and background-image Property

## background-image

1. We can apply background-image: url('<(imagePath)>') to add background as image.
2. If we apply background-image and background-color to same element, background-image will win irrespective of their order.
3. We can have multiple images as background but either a background-image or a background-color to an element.

### Sizing and positioning background-image:

#### background-size property:

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

#### background-position property:

1. We can background-podition value in px or %.
2. But in this case px and % behave differently unlike background-size.
3. When we give value in px like 'background-position: 10px 10px;', first value is considered along x-axis and second along y-axis.
4. In above case of px, image will be moved 10px to right and 10px to bottom, so there will be blank pace at left and top.
5. But when we give value in %, the behaviour is different.
6. If we give 'background-position: 10%;':
   1. There will not be any blank space, or image will not move out of container by 10% like in px.
   2. % will decide how much of the excess image that is cropped along x-axis need to be pushed to right.
   3. If there is not excess of image along x-axis, 'background-position:0%;' will nothave any impact on image.
   4. To give % value along y-axis, we give second argument to property like- 'background-position: 10% 20%;'.
7. There is predefined value for this property, 'center' which equal to '50% 50%'. Cnentral part of image is displayed in the container.
8. Another way of giving value to 'background-position'(prefer this):
   1. with combination of 'top, bottom with right left.'
   2. If we write 'background-position: top right;', then image will be moved to bottom and left fully until its top and right corner is displayed.
   3. We can combine this with % like 'background-position: left 10% bottom 20%;' and image's excess 10% will be cropped to left and same for 20% to bottom.

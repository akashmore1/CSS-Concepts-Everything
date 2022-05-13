# Background and Images Property

## background and background-image

1. We can apply **_background-image: url('<(imagePath)>')_** to add background as image.
2. If we apply background-image and background-color to same element, background-image will win irrespective of their order.
3. We can have multiple images as background but either a background-image or a background-color to an element.

### Sizing and positioning background-image:

#### background-size property:

1. For sizing we use background-size: property.
2. background-size can be given values in px or in %.
3. If background size is too small that its container, image will be shown muliple times, each image with a width of given px or %.
4. If we give second argument to background-size, it will consider width and height resp. But image may become distorded in this case.
5. If we give **_background-size: 50%_**, image width will occupy 50% of container.
6. If we give **_background-size: 100% 100%_**, image will occupy all space of container. In this case aspect ratio of image will become distorted.
7. We can give one of the width or height auto to eliminate distortion.
8. We can apply **_cover and contain_** in background-size.
9. cover will make sure that entire container containing image should be covered in image with no blanck spaces.
10. contain on the other hand will make sure entire image is shown shown in container, so container might have empty space.

#### background-position property:

1. We can background-position value in px or %.
2. But in this case px and % behave differently unlike background-size.
3. When we give value in px like **_background-position: 10px 10px;_**, first value is considered along x-axis and second along y-axis.
4. In above case of px, image will be moved 10px to right and 10px to bottom, so there will be blank pace at left and top.
5. But when we give value in %, the behaviour is different.
6. If we give '**_background-position: 10%;_**':
   1. There will not be any blank space, or image will not move out of container by 10% like in px.
   2. % will decide how much of the excess image that is cropped along x-axis need to be pushed to right.
   3. If there is not excess of image along x-axis, '**_background-position:0%;_**' will not have any impact on image.
   4. To give % value along y-axis, we give second argument to property like- '**_background-position: 10% 20%;_**'.
7. There is predefined value for this property, 'center' which equal to '50% 50%'. Cnentral part of image is displayed in the container.
8. Another way of giving value to 'background-position'(prefer this):
   1. with combination of 'top, bottom with right left.'
   2. If we write 'background-position: top right;', then image will be moved to bottom and left fully until its top and right corner is displayed.
   3. We can combine this with % like 'background-position: left 10% bottom 20%;' and image's excess 10% will be cropped to left and same for 20% to bottom.

#### background-origin property:

1. background-origin property is similar like box-sizing property, only values are same.
2. In box-sizing, we add all pading and border values in overall width, with value of '**_background-origin: border-box;_**'.
3. In order to understand background-origin, give dotted border to any background-image.
4. If image has extra height than height of container, then when we give dashed border we see that image is bigger at top bottom so dashed border contains image part. But on left and right image part is not in dashed border as there is no excess part of image width wise.
5. This is exactly what we can control with background-origin property.
6. if we give **_background-origin: border-box;_**, then image is completely present in dashed border, event if its size is more than container.
7. If we give **_background-origin: content-box;_**, then image will have blank space within dashed border and inside image as well. Because this value gives some padding to image this happens.
8. If we give **_background-origin: padding-box;_**, we will get default behaviour of image which is explained in point no. 4.

#### background-clip property:

1. In all background-origin case, some part of image will be contained in dashed border. In order to clip image from dashed border, we use **_background-clip_** property.
2. When we apply **_background-clip: border-box;_**, we get same behaviour as background-origin: border-box;
3. But when we apply **_background-clip: padding-box;_**, we get behaviour where no part of image(top, left, bottom, right) is present in dashed border.
4. When we apply **_background-clip: content-box;_**, image will get clipped before padding. It will not reach to dashed border.

#### background-attachment property:

1. This is a property, we rarely use, or not use at all.
2. It is used todefine how scrolling will behave in a container that has background image.
3. This property will allow use to use '**_fixed, local, scroll_**' as values.

#### background shorthand:

1. Use **_background: url() left 10% top 10%/cover no-repeat border-box padding-box fixed_** as shorthand to all we leart above.
2. Here the order is **_background: background-image('Image path') background-position/background-size background-repeat background-origin background-clip background-attachment._**
3. Here if we don't assign any value to background-clip, it we take value of border-origin by default.
4. It's okay if we don't assign any value to background-attachment;

## Styling Images

1. If we give height and width to container of img and not the img tag itself, then there will be no effect on image.
2. We have to select img tag by class or any selector we want, to give height and width to img with px or %;
3. But most of the times, directly giving height and width to image can cause distortion in image.
4. So generally, we give img{width: 100%};
5. And we give img's container width and height.
6. But as we seen in point 1. this will have no effect on image.
7. This is because container might be inline or block.
8. If we change display of container to inline-block, the image will follow it's container's height and width.

## Gradients(linear and radial)

1. Gradients both linear and radial are treated as images.(background images)
2. So to target sub-property gradient, we use background-image propery.

### linear-gradient

1. Linear gradient can be used like: **_background-image: linear-gradient();_**
2. Linear gradient function has two arguments: First argument is always direction and second argument is combination of colors we want in gradient.
3. If we don't specify direction in first argmentment and directly specify colors, then direction by default is taken as from top to bottom.
4. We can give infinite colors as arguments separated by comma.
5. e.g. **_*background-image: linear-gradient(to bottom right, red, white);*_**
6. We can specify the diretion in degrees as well.
7. e.g. **_*background-image: linear-gradient(30deg, red, white);*_**
8. In degrees, 180deg means default direction which is to bottom. And 0deg means reverse of default direction i.e. to top
9. If we add second or last color as trasparent, its gives a beautiful effect.
10. We can give % to colors as well to specify where the color should start and stop in gradient.
11. e.g. **_*background-image: linear-gradient(30deg, red 10%, white 90%);*_**

### radial-gradient

1. **_background-image: radial-gradient(red, white);_**
2. By default, radial gradient is eclipse, and centered at its container.
3. In above case, radial gradient will have center with red color.
4. We can have radial-gradient with circular shape. We just need to specify, **_backgroung-image: radial-gradient(circle, red, blue, orange)_** in first argument.
5. We can specify where circle's center will be located by adding **_at_** in first argument.
6. e.g **_backgroung-image: radial-gradient(circle at top, red, blue, orange)_** or we can also specify like **_backgroung-image: radial-gradient(circle at top left, red, blue, orange)_**
7. We can also specify circle's position by custom values.
8. e.g. **_backgroung-image: radial-gradient(circle at 20% 50%, red, blue, orange)_**. In this case, circle's center will be 20% far from left and 50% far from top. (Also we canuse px instead of %)
9. We can also add size of circle by giving % or px in front of circle.
10. e.g. **_backgroung-image: radial-gradient(circle 20px at 20% 50%, red, blue, orange)_**
11. In case of elipse, to detemine size we need to give two values as elipse has two centers.
12. e.g. **_backgroung-image: radial-gradient(elipse 20px 40px at 20% 50%, red, blue, orange)_**- first value is width and second value is height.
13. Another way of specifying size is using keywords:
14. e.g. **_backgroung-image: radial-gradient(elipse farthest-side at 20% 50%, red, blue, orange)_** this means eclipse will be enough big to touch its farthest side.
15. Opposite of farthest-side is closest-side.
16. Other similar keywords are closest-corner and farthest-corner.
17. We can also specify color stops just like linear-gradient. Refer point 10 in linear-gradient.

## Stacking multiple backgrounds

1. We can give multiple background-images to an element.
2. This is possible only when there is some transperency to all backgrounds. So that other background which is below in stack is visible.
3. We cannot give background-image and background-color at the same time.
4. If we do only background-image will be displayed. bakground-color will be present below background-image in the stack.
5. Mostly we use gradient over background-image to give some feel to image.
6. We can use background shorthand to stack background images.
7. Stack diretion is from left to right. i.e. Leftmost background-image will be topmost in z-axis.
8. All background images should be separated by comma.
9. e.g background: background1, background2 ...etc
10. Example we used in this project:- **_'background: linear-gradient(to top, rgba(215, 127, 33, 0.5), transparent), url("./images/freedom.jpg") left 10% bottom 10% / cover no-repeat border-box;'_**

## filters

1. Suppose we have div with certain width and height. We can apply filter on that div.
2. e.g. filter: blur(10%).
3. There are multiple things we can do with filter, like opacity, saturation etc.
4. We can appy multiple filters on a element. refer mdn for filters.

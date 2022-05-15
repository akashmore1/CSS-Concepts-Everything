# Dimensions, Units and Sizes

## Units

1. When we give font size in px, if user increases font size in browser font size in our website will not increase.
2. So adding font size in px is not good idea, as wensite is not dynamic with this unit.
3. There are different units in css:
   | Name | Unit |
   | -------------- | ------------- |
   | pixels | px |
   | percentage | % |
   | root em | rem |
   | em | em |
   | viewport height| vh |
   | viewport width | vw |
4. Properties for which we can use units:
   1. font-size
   2. margin
   3. padding
   4. border
   5. width
   6. height
   7. top
   8. bottom
   9. left
   10. right
   11. border-radius

## How is size calculated?

![How is size calulated](./SizeCalculate.jpeg)

## % (percentage)

1. When we give an element height or width etc in %, it's value is dependent on another element.
2. Such element refer to different element, based on its position type.

### % in fixed position:

1. When we apply **_position: fixed;_** to an element, then its containing block is viewport.
2. So if we give such element 100% width, element will occupy 100% of width of viewport.

### % in absolute position:

1. When we apply **_position: absolute;_** to an element, then its containing block is first non-static parent or ancestor.
2. Important thing to remember is element with absolute position, when given width in %, will refer to **_ancestor's content + padding._**
3. So supposingly, width of parent of absolute element is 200px, and it has padding of 4px. If we apply width to absolute element 100%, its width will become exactly 200px.(Consider parent is non-static)
4. In this case, child will ignore that its parent has padding.

### % in relative and static position:

1. When we apply **_position: relative;_** or **_position: static;_** to an element, then for %, it will refer to its first block level ancestor.
2. But in this case, unlike absolute, relative or static element will refer to content of its block-level parent.
3. So, such element will respect padding of its parent.
4. Supposing we have element with reative position. Its parent is block element with 200px width and 10px padding. And if apply width: 100% to child(relative element), then width of child will be 80px as it will respect its parent's padding of 10% on left and right.

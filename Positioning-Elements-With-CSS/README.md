# Position Property in CSS

1. Position property is automatically applied to all elements in css.
2. Defaultvalue of position property is static.
3. In HTML, elements are placed one after another and shown in similar way because these elements follow document flow.
4. e.g. <div>This is div</div><p>This is paragraph.</p>
   here 'div' will appear before 'p' because elements follow documents flow.
5. We can move these elemets anywhere in page, but not when position is static.
6. In order to move elements across the page, we can assign values to position such as 'fixed', 'absolute', 'relative' and 'sticky'.
7. For sticky property browser support is not good.

## position: fixed;

1. When we apply fixed position property to element, elements will become non-exsting to other elements.
2. i.e. other elements will occupy the place of element with position 'fixed'.
3. Element with position fixed will be out of actual document flow.
4. So we can apply z-index to such element, in order to decide if this element will appear below or above other elements.
5. If we apply postion fie=xed to an element, it will become inline-block.
6. After assigning fixed to an element, we cannot change display to inline or block. It will remain inline-block.
7. Generally for navigation bar(main header of website) and for background images we use this property.
8. When we apply top, bottom, right, left to element with fixed postion property, element will move with reference to view port.
9. top: 0 will move element to top, same bottom:0 will move to bottom.
10. Element with fixed position property will always refer to viewport. Even if we scroll, Element's postion will be unaffected.
11. If we apply postion:fixed to a span, it will become inline-block.

## z-index

1. By default z-index: auto; is applied to every element;
2. We can consider z-index value is 0 by default.
3. z-index value can be positive or negative.
4. If element has postion: static; or other than static if element does not have any other position property, then z-index will have no impact on element.

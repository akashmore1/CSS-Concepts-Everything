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
5. If we apply postion fixed to an element, it will become inline-block.
6. After assigning fixed to an element, we cannot change display to inline or block. It will remain inline-block.
7. Generally for navigation bar(main header of website) and for background images we use this property.
8. When we apply top, bottom, right, left to element with fixed postion property, element will move with reference to view port.
9. top: 0 will move element to top, same bottom:0 will move to bottom.
10. Element with fixed position property will always refer to viewport. Even if we scroll, Element's postion will be unaffected.
11. If we apply postion:fixed to a span, it will become inline-block.

## position: absolute;

1. position: absolute; behaves exactly like position: fixed; but
2. The difference between absolute and fixed is that fixed position element moves with reference to viewport and absolute position element moves with reference to it's first non-static parent.
3. Other behaviors of inline-block, z-index, other elements behave like absolute element doesn't exist are exactly same like fixed property.
4. Why absolute need parent with non-static property?:
   a. When we add position: absolute to an element, on scrolling it will move with other elements unlike fixed property.
   b. But while giving right, left, top, bottom properties element will move across viewport if it does not have any non-static parent.
   c. When it has non-static parent element will move within the parent.

## position: relative;

1. When we apply position: relative to an element, other elements don't behave as if the realtive element does not exist. This is difference between relative with absolute and fixed.
2. We can apply left, right, top, bottom properties to relative element.
3. But unlike absolute and fixed, viewport is not the reference with respect to relative element will move.(when right, left, top, bottom applied.)
4. For relative element, its original position is the reference for moving.
5. Relative element can move all over the view port or html element.
6. In order to fix it inside its parent, we can give overflow: property to its parent.e.g overflow: hidden;

## position: sticky;

1. When we add position: sticky to an element, nothing will happen just like relative.
2. All other elements will not behave like sticky element does not exist.
3. We can add left, right, top, bottom to sticky element.
4. When we apply above properties initially nothing will be changed on page.
5. e.g. we apply top: 10px; to sticky element, it will not move from its position at all.
6. But as we scroll up, when element reaches to top with 10px distance remaining, sticky element will stick at that position, just like position: fixed.
7. So sticky is combination of relative and fixed properties.
8. After scrolling up, when content of parent element of sticky element will reach to top with 10px distance, sticky element will be scrolled up along with its parent element.
9. Just like fixed, sticky element will move with reference of viewport.
10. sticky is a new property and a lot of browser does not support it. Event chrome partially supports it.

## z-index

1. By default z-index: auto; is applied to every element;
2. We can consider z-index value is 0 by default.
3. z-index value can be positive or negative.
4. If element has postion: static; or other than static if element does not have any other position property, then z-index will have no impact on element.

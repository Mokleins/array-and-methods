.push() and .unshift()
These two methods work in the same way:

They take one or more arguments (the element or elements you want to add)
They return the length of the modified array
They are destructive methods
The difference is that the .push() method adds elements to the end of an Array and .unshift() adds them to the beginning of the array:

.pop() and .shift()
As with .push() and .unshift(), these two methods work in the same way:

they don't take any arguments
they remove a single element
they return the element that is removed
they are destructive methods

.slice()
To remove elements from an Array nondestructively (without mutating the original Array), we can use the .slice() method. Just as the name implies, .slice() returns a portion, or slice, of an Array. The method takes 0, 1, or 2 arguments and returns a new array containing the sliced elements.

It is important to understand these methods.


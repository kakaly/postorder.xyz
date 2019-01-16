---
title: Unpacking JavaScript Classes
date: '2019-01-12'
langs: ['en']
spoiler: There’s a twist at the end.
---


Let’s cut to the chase. So, what do classes mean in JavaScript?

To understand classes, we must dig deeper, starting from Object constructor

The Object constructor is the root of all JavaScript objects. You can create any kind of object using the Object constructor. Let me give you the first spoiler of this story here.

**“It is important to note that, all objects in JavaScript are instances of Object. Think of any object in JavaScript as an instance created by calling Object constructor”**

```jsx{3}
// Object('k1':'v1', 'k2':'v2')
console.log(new Object({'k1':'v1', 'k2':'v2'}))

// Array[1 ,2, 3]
console.log(new Object([1, 2, 3])
```

So, now that we are clear what Object constructor is used for, lets look at the properties of Object constructor.

```jsx
// Print Object's properties
console.dir(Object)
```

Besides the long list of properties, we also see a property called ‘prototype’. Now, this gives us a starting point for deconstructing classes in JavaScript.

So, what is this ‘prototype’ property? It has a ‘constructor’ property on top of other regular properties.


To understand its significance, let’s write a function and look into it’s properties. Remember, function is also a JavaScript Object and it inherits properties from the Object constructor.

```jsx
// foo function
function foo() {}
console.dir(foo)
```


There we go, as we expected, function foo() has a prototype property. Here goes my second spoiler,

**“The prototype property is unique. It gets passed down from the ‘Object’ to all JS objects and we call this the prototype chain”**

Now, what does this mean. To understand this, lets understand how we managed to mimic classes before when classes were not part of JS. We did what we call, constructor functions, called by prefixing a ‘new’ keyword to create objects of that particular type.

```jsx
// constructor function
function foo(a) {
  this.a = a
}

// Add class method
foo.prototype.print = function() { console.log(this.a)}

var foo1 = new foo("hello")
foo1.print() // hello

var foo2 = new foo("world")
foo2.print() // world
```

What did we just do? We add class methods by appending, new method ‘print()’ directly to the prototype property of the function. But, how are we able to call ‘print()’ directly on the instances foo1 and foo2? Magic!

When we call a function prefixed with ‘new’, JS pulls a dramatic heist by copying the function’s prototype property on to the instance’s __proto__ property. And what’s __proto__ property? Scroll up and look at all the images. It is also a property of all Objects in JS, which brings us to the third spoiler,

**“__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. prototypeis the object that is used to build __proto__ when you create an object with new”**

That explains why all along, __proto__ was silent. And now, when we call a function with ‘new’, this is what happens.

```jsx
var foo1 = new foo("hello")
console.dir(foo)
console.dir(foo1)
foo1.print() // hello
```

There we go! The instance foo1’s __proto__ now has the print() function that can be resolved when we do, foo1.print() and it works like a charm.

But, WTH are classes?

Ok, we have our honest console.dir() which tells truth and nothing but the truth. Lets’ look at an example.

```jsx
// constructor function 'foo' with a method, print
function foo(a) {
  this.a = a
}
// Add class method
foo.prototype.print = function() { console.log(this.a) }

// class 'bar' with a class method, print
class bar {
 constructor(a) {
  this.a = a
 }
 print() {
  console.log(this.a)
 }
}

console.dir(foo)
console.dir(bar)
```

Final spoiler:

**“foo and bar are the same!!”**

**“JavaScript classes are syntactic sugar for JavaScript constructor functions which is a pseudo implementation of traditional classes by taking advantage of JavaScript’s prototype property and the prototype chain”**

Final note: I believe that, in order to understand any concept in JavaScript, it is important to understand the building blocks of the language and how and why a feature was implemented in a particular way. This not only gives you a concrete understanding of the topic, but also helps you in applying these concepts in solving specific problems.
---
layout: tutorial
title: Functions
categories: javascript-basics
tags: day1
---

Functions are like little machines that we can create to do our bidding. Variables save our sanity by helping us avoid typing the same thing over and over. Functions do the same thing, but they save us from having to write the same code over and over again.

You've already used a few functions. Yea, I told you I was going to keep secrets from you.

	alert("Hello!");
	console.log("Hello!");
	prompt("What's the name of your dog?");
	confirm("Clicking okay will delete the entire contents of your hard drive.");
	
These are all functions. You can tell because they have the parentheses at the end. The parentheses mean that you want to call the function. If you leave them off, then JavaScript just assumes that you just want to sit around and talk about the function, which is a strange way to spend the afternoon.

Paste these into your console one at a time:

	alert;
	alert();
	
The first one just tells you that it's a function and the second one actually calls it. There is a purpose and use for the first one, but we'll get to that at a later date. For the most part, we're actually going to want to call on functions.

You've probably noticed that we can shove things in between those parentheses. These are called arguments. No, they're not like those yelling matches that you have with your siblings. They are little extra pieces of information that you provide to the function so that it can do something useful with that information.

`alert();` by itself is great and wonderful, but it is more helpful when you provide an argument that lets the alert function know what it is that you'd like to alert the user of.

	alert("Your hair is on fire!");
	
There, that is a bit more helpful. You just added an argument to that function. Congratulations. If I was the kind of guy that kept gold stars on hand, I would totally give you one right about now. Using functions is great and wonderful, but we want to *make* functions.

Just like the keyword `var` makes variables, we use `function` to make functions. That said, there is a little bit more involved in making functions. Let's take a look at a basic function and pull it apart.

	function name(argument) {
		console.log(argument);
	}
	
First we use the keyword `function`. Then we give it a name (I chose `name` as the name of my function) and we list out the arguments. You can list out as many arguments as you want. I listed just one. You can also name the argument whatever you want as well. I chose `argument` as the name of my argument. Then we have some curly braces.

Arguments become magical variables that only exist inside of that function. I don't have to declare them with the `var` keyword, but they will also cease to exist as soon as we run up against that closing curly brace.

Inside the curly braces, we write out what we want the function to do. The curly braces mean that we want to start a block of code. Blocks of code don't get semi-colons at the end. Don't ask me why. (I know why, but I don't feel like explaining it.) My example is pretty boring. Let's look at another equally as boring example, shall we?

	// First, let me define the function.
	function addTwoNumbers(x, y) {
		var sum = x + y;
		console.log(sum);
	}
	
	// Then, I will call it.
	addTwoNumbers(1000, 23);
	
Not bad, but there are some problems with this function. The biggest problem is that I can't do anything with data my magic adding robot spits out.

	function addTwoNumbers(x, y) {
		var sum = x + y;
		console.log(sum);
	}

	var result;
	result = addTwoNumbers(19, 27);
	
	// Go get a sandwich.
	
	console.log(result);
	
Drats! It tells me `undefined`. That's because our function is logging the sum of the two numbers, but it's not actually spitting it back out. Our function is like a black box. Two numbers go in, but nothing comes out. When JavaScript has nothing to say, it says `undefined`.

We need our function to `return` a result. `return` is yet another keyword. We have three now if you're keeping track. Let's use our new keyword to make our function more awesome.

	function addTwoNumbers(x, y) {
		var sum = x + y;
		return sum;
	}
	
	var result;
	result = addTwoNumbers(19, 27);
	
	console.log(result);
	
Boom! Our function works as expected. We put two numbers into it. The function combines them and then spits out the sum. We can put the sum into a variable and then use it later to do whatever we want with it.

You only get to use `return` once per function. Try this out.

	function addTwoNumbers(x, y) {
		var sum = x + y;
		return "BANANAS OF THE WORLD: UNITE!";
		return sum;
	}
	
	console.log(addTwoNumbers(1,2));

Great. Now instead of adding two numbers, you called for a worldwide uprising of bananas. Good job. Notice that I didn't bother storing the result into a variable this time. A banana revolution is not something you want to hang on to. You can nest functions inside each other.

	alert(prompt("What would you like me to alert you of?"));
	
You can also call functions inside of other functions.

	function addTwoNumbers(x, y) {
		return x + y;
	}
	
	function addThreeNumbers(x, y, z) {
		return addTwoNumbers(x, y) + z;
	}

	console.log(addThreeNumbers(1,2,3));

I also shortened the functions. Take a look at how I did it. I don't *need* to store the value in a variable, so I didn't.

## How to Do Math

I should probably take a minute and explain how to do some basic mathematical expressions.

* `+` does addition
* `-` does subtraction
* `*` does multiplication
* `/` does division
* `%` called the modulo operator

The modulo gives you the remainder from dividing two numbers. For example:

	console.log(11 % 3);
	
This will log 2 to the screen since 11 / 3 is three with a remainder of 2. This may or may not be useful in the very near future.

## Your Turn

**Challenge:** Other countries use Celsius instead of Fahrenheit for temperature. To convert a Fahrenheit temperature to Celsius, you subtract 32 and multiply the number by 5/9.
 
Create two functions: one that converts Fahrenheit to Celsius and one that converts Celsius to Fahrenheit. Keep in mind that the order of operations still applies in JavaScript and you might need to use parentheses.
---
layout: tutorial
title: Variables
categories: javascript-basics
tags: day1
---

Typing stuff over and over again is tedious and a quick recipe for crazy-making. It's also a formula for really bad programming. Why? Because we're human—I am, at least—and humans tend to make mistakes. If I asked you to type the same thing 10,000 times, chances are that you would make a mistake _at least_ once. The way we handle that in JavaScript is we store our important data in **variables**.

Using variables is pretty easy. It's a two-step process. First we declare the variable, then we define it. Let's say that I wanted to create a variable named `dog` and in that variable, I wanted to put the name of my dog.

	var dog;
	dog = "Marley";
	
That's it. There are a few things to notice here. First, **every line ends with a semi-colon**. JavaScript wants to be your friend and friends try to help each other out. JavaScript tries its best to figure things out for you, but it's not very good at it. JavaScript is like that spacey friend of yours that you wouldn't trust with your iPod. +skIf you forget the semi-colon, things will probably still work, but it also might not. So, try not to forget the semi-colons. Weird stuff might happen if you do.

It turns out that I could do the two-step process in one step if I really wanted to.

	var dog = "Marley";
	
There is no difference between the two. If you forget the keyword `var`, it will still work, but this is like the semi-colon thing: things will get weird on you. Just trust me. Use semi-colons and use `var` when defining variables. I wouldn't lie to you about this stuff.

Now that I have my dog's name stored in the variable `dog`, I can do all sorts of obnoxious stuff with it.

	alert(dog);
	confirm("Do you want to be friends with my dog? His name is " + dog + ".");
	
If you look closely, you can see that I can add little bits of text together. This is called **concatenation** and it's super useful for plopping your variables into sentences and other fun stuff.

So, that's great and wonderful, but the cool part about JavaScript is that it lets us make stuff that's interactive. What if we wanted to asked the person visiting our page about their dog? Well, we could use the `prompt` function to elicit information from the poor soul visiting our page.

	var dog;
	dog = prompt("Hey! What's the name of your dog?");
	  
	alert(dog + " is a stupid name for a dog.");
	
If we didn't store that response in a variable, it would be lost to the ether. But, since we stored it in the variable `dog`, it's available for us to use over and over again.

	alert(dog + dog + dog + dog + dog + dog + dog + dog + dog);
	
Yea, you get the point. This seems like a good time to mention two things. Those little pieces of text in programming are called **strings**. Anything between quotes is a string and from now on, I'm going to call them strings. Deal with it. The second thing is that while you can add strings together you can't subtract, divide, or multiply them (in some other languages `dog * 3` would give you `MarleyMarleyMarley`, but not in JavaScript).

You can use single or double quotes with strings. The basic idea is that you should use whatever it is that won't appear in your string. Here' an example.

	// I used double quotes because I needed an apostrophe.
	console.log("I can't believe it.");
	  
	// I used single quotes because I needed double quotes in the string.
	console.log('She said, "I will have a corned beef sandwich, please!"');
	
You can also store numbers into variables.

	var two = 2;
	console.log(two + two);
	
There are more things we could shove into variables, but we'll get to that later.

#### Your Turn

Alright, try this.

1. Ask the person visit the page what their favorite color is and store their answer in a variable.
2. Shoot their answer back at them in an alert explaining why their favorite color is pretty much the worse color ever invented.
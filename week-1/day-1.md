# Week One, Day One

## An Gentle Overview

### Why Learn to Program?

So, you signed up for this endeavor (good choice, by the way), but your probably thinking: "Why should I bother learning to program?" Maybe you want to be a programmer. If so, well then learning to program is a pretty good idea, but maybe you don't want to program professionally. Learning to program is still an important skill. Computers aren't going away anytime soon. Learning how to use them and bend them to your whim can make you _way_ better at anything you put your mind to.

More importantly, you can [build a robot that shoots a water gun at the squirrels that try to raid your bird feeder][squirrels] or [hack a Microsoft Kinect][kinect].

For the purposes of the next few weeks, we're going to focus on three major objectives. There are many, many more reasons to learn this stuff—but these are the three things we're going to keep rounding back to over the course of this week. Call them themes, if you want. Call them big ideas, just don't call them Sally—they really don't like that.

* Learning to code gives you the ability to take your ideas and make them a reality.
* The web is malleable. With JavaScript (and other languages), you can alter and change anything you want.
* The web is full of powerful APIs that allow you to make interesting things by mashing two or more existing things together.

[squirrels]: http://boingboing.net/2012/03/26/howto-build-a-robotic-squirrel.html
[kinect]: http://www.readwriteweb.com/archives/weekend_project_hack_microsoft_kinect.php

### What We're Going to Cover

The next three weeks are going to be jam-packed. Because I like bulleted lists so much, I've made yet another one to illustrate the main points we are going to cover over the next three weeks. Ironically, this list has four bullet points.

* Taking control of the web with JavaScript
* Building a custom Google Chrome extension
* Create interactive graphics with Processing and Processing.js
* Building an HTML5 application for iOS, Android, and Chrome OS

### The Structure of this Hoopla

If you can believe it, the plan is that I am going to try to keep the talking to a minimum (Yea, I know). I'll show you just enough to make you dangerous and then let you hack away. The best way to learn this stuff is just to do it—even if you have to make heavy use of Google to get it done.

## About JavaScript

### A Brief History of JavaScript

The legend is that JavaScript was developed in ten days by Brendan Eich for Netscape. Ironically, JavaScript has almost nothing to do with Java despite its name. Java was really popular at the time and Netscape wanted to play on its popularity. Brendan was told, "Make it look more like Java." So, he changed the syntax.

For years, JavaScript was considered to be a toy programming language that real programmings looked down their collective nose at. In Internet Explorer 5, Microsoft unveiled a new technology which was eventually dubbed AJAX.

AJAX lets you fetch stuff in the background and do all sorts of magic. Most of the awesome web apps you use today use AJAX to do what they do so well. In the time since Internet Explorer 5, JavaScript has sky-rocketed in popularity and is now the number one language on [Github][].

[Github]: https://github.com/languages "Top Languages"

### Some Awesome Examples of JavaScript

Awesome stuff that you use everyday (e.g. [Gmail][], [Tumblr][]) is powered by JavaScript. In addition, smart people are doing some really cool things with the language. Here a few that found with about 45 seconds of searching on Google.

[Gmail]: http://gmail.com "Gmail"
[Tumblr]: http://tumblr.com "Tumblr"

* [CoffeePhysics][physics]
* [Chrome Canopy][canopy]
* [Ball Pool][ballpool]
* [Floating Cubes][cubes]
* [Lines][lines]
* [Depth of Field (Javascript)][depth]
* [Google Gravity][gravity]

[physics]: http://soulwire.github.com/Coffee-Physics/ "CoffeePhysics"
[canopy]: http://onecm.com/projects/canopy/ "Chrome Canopy"
[ballpool]: http://mrdoob.com/projects/chromeexperiments/ball_pool/ "Ball Pool"
[cubes]: http://www.giuseppesicari.it/floating-cubes/ "Floating Cubes - Chrome Experiment"
[lines]: http://open.adaptedstudio.com/html5/many-lines/index.html "Lines go all over the place."
[depth]: http://mrdoob.com/projects/chromeexperiments/depth_of_field/ "Depth of Field (Javascript)"
[gravity]: http://mrdoob.com/projects/chromeexperiments/google_gravity/ "Google Gravity"

### Other places you might find JavaScript

#### Node.js

If I tried to explain [Node.js][node] to you at thing point, your eyes would glaze over, so I'll keep it short. Node.js makes it possible to build apps that work in real-time super fast (e.g. a chatroom or multiplayer game).

[node]: http://nodejs.org/

#### Google Apps Script

You can use JavaScript to take control of Google Apps. Google opens up their entire system to you to mash-up and combine. You can create a spreadsheet that can send emails and all sorts of crazy stuff.

## Bending the Web to Your Whim

### The JavaScript Console

Safari, Chrome, and Firefox (with the Firebug extension) all come with a JavaScript console built-in.

### Stupid Tricks with JavaScript

#### Alerting

In the JavaScript console, type the following and hit enter.

	alert("Hello world!");

#### Prompting

That's great, but let's say you want to get some information from the person visiting your page.

	prompt("What is your name?");

If you'd like, you can provide a default response.

	prompt("Who is the best teacher ever?","Mr. Kinney");

#### Confirming

Let's imagine for a moment that you only want a yes or no answer. Try this out:

	confirm("Do you like jelly beans?");
	
Hitting "Okay" returns `true` and "Cancel" returns `false`.

#### Logging

The preferred way to debugging is to quietly log to the console itself. Give this a shot:
	
	console.log("I am a banana.");
	
As you dive deeper into JavaScript, you'll be using this one more than the rest to figure out what's going on in your app.
	
#### Editing the Content

Okay, this one is fun. Go to any page and toss this little snippet into the console.

	document.body.contentEditable = 'true';
	
Now, go click on any text on the page and start typing. The entire page is now editable. You can type in anything you want.

## Shoving Your Code into a Page

### The console

We just played with the JavaScript console for a bit. For the most part, the console is for testing out ideas and trying things out. Nothing that you you type into the console will be saved when you leave the page.

### Including it in the HTML of your page

You can pop JavaScript into your page relatively easily. Your browser will run anything that you put inside of a `<script>` tag. We'll talk a little more about in the days to come. For the time being, if the HTML doesn't make sense to, just pretend that it does.

	<html>
		<head>
			<title>This is the title of my page</title>
		</head>
		<body>
			<p>Hello world!</a>
			<script>
				// Everything until the closing tag will be read a JavaScript
				alert("I mayor of Monkeyland");
			</script>
		</body>
	</html>

### Linking to it in the HTML (Preferred)

The is the ways the pros do it. Good developers do something called "separation of concerns." The basic premise is this: if you jumble all of your code together, it's going to become a confusing mess as your application grows bigger and bigger.. Experienced programmers separate their code out into different files.

The process is simple, just create a file that ends in `.js` and in whatever HTML file you want to use it in, just add a source link in. Let's same the of your JavaScript file was `awesomesauce.js`. You would embed it like this.

		<html>
		<head>
			<title>This is the title of my page</title>
		</head>
		<body>
			<p>Hello world!</a>
			<script src="awesomesauce.js"></script>
		</body>
	</html>

Where to put your `<script>` tag depends on a few different things, but we'll talk about all of that later on.

### Bookmarklets

Bookmarklets are little snippets of JavaScript that you can save to your bookmarks bar. When you click on a bookmarklet, it comes to life and does some magic to your page. We'll be playing with some bookmarklets in this course. Stay tuned.

### Chrome and Safari extensions

You can use JavaScript to build extensions for your browser that—um—extend the abilities of your browser. We'll be doing this next week.

## Functions and Variables

### Variables

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

### Functions

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

#### How to Do Math

I should probably take a minute and explain how to do some basic mathematical expressions.

* `+` does addition
* `-` does subtraction
* `*` does multiplication
* `/` does division
* `%` called the modulo operator

The modulo gives you the remainder from dividing two numbers. For example:

	console.log(11 % 3);
	
This will log 2 to the screen since 11 / 3 is three with a remainder of 2. This may or may not be useful in the very near future.

#### Your Turn

**Challenge:** Other countries use Celsius instead of Fahrenheit for temperature. To convert a Fahrenheit temperature to Celsius, you subtract 32 and multiply the number by 5/9.
 
Create two functions: one that converts Fahrenheit to Celsius and one that converts Celsius to Fahrenheit. Keep in mind that the order of operations still applies in JavaScript and you might need to use parentheses.

## Arrays

An array is like a box. Boxes are awesome. You can put stuff in boxes. You can take stuff out of boxes. Let's look at some arrays.

	[1, 2, 3, 4] // An array of numbers.
	["John", "Paul", "George", "Ringo"] // An array of strings.
	[x, y, z] // An array of variables.
	[2, "John", z] // An array of all sorts of stuff.
	[[1, 2, 3, 4], [x, y, z]] // An array of arrays.
	
You can shove all sorts of stuff into arrays. You can even shove an array into an array just like you can put a smaller box into a bigger box. For the most part, if it exists in JavaScript, you can shove it into an array. This makes arrays really useful. Useful things are wonderful.

You can store variables in an array and you can also store a whole array into a single variable.
	
	var myVerySpecialArray, sushiRoll;
	sushiRoll = "California Roll";
	myVerySpecialArray = ["The Walrus is Paul", 8675309, sushiRoll];
	
That might be a little confusing, but it has less to do with the fact that arrays are hard and more to do with the fact that my example is utterly ridiculous. There is one thing that is worth discussing, JavaScript swaps out `sushiRoll` for it's real value. If you run `console.log(myVerySpecialArray)`, it will print `["The Walrus is Paul", 8675309, "California Roll"]`. Variables are weird little things.

Let's change subjects. Once we have a bunch of stuff in an array, how do we get it out?

Arrays have a natural order to them. They have a beginning and an end; a start and a finish. Just like reading a sentence, you start at the left and move right. However, computers do things a little differently than humans.

Normally when we count, we start at 1. Computers start a zero. They just want to be different and who can blame them? In order to get a better understanding of how to get information in and out of arrays, let's look at some code.

	var box; // Declare a variable named "box."
	box = ["Spiderman", "Batman", "Wombatman"]; // Set it to an array.
	console.log(box[0]); // prints "Spiderman"
	
That bracket notation gets us one element from the array. We can also set elements in the same way.

	var box = ["Spiderman", "Batman", "Wombatman"];
	box[1] = "DOGMAN!!!";
	// I had to use double quotes because of the apostrophe, you know?
	console.log(box);
	// prints ["Spiderman", "DOGMAN!!!", "Wombatman"]
	
You can also push more things onto the end by attaching a function (actually, it's a method call, but let's not get ahead of ourselves).

	var box = ["Spiderman", "DOGMAN!!!", "Wombatman"];
	box.push("Superman");
	console.log(box);
	// prints ["Spiderman", "DOGMAN!!!", "Wombatman", "Superman"]
	
What's that crazy dot in `box.push("Superman")`? Well that's object notation, silly. Objects? Sure, we'll talk about objects in a minute.

## Objects

JavaScript is an object-oriented programming language. Don't worry about that means. If someone says stuff like that in front of you, they are trying to show off. Change the subject and ask them what cool things they've made recently.

Here's the short version: objects lets you think of your made up programming things as if they were real things. It's kind of like having imaginary friends. Everything in JavaScript is an object. 2 is an object and so is the string "Object". That's great and wonderful, but let's look at something a little more practical. Let's talk about my dog again.

	var dog;
	dog = {};
	
The variable `dog` is now a new object. That is great, wonderful, and absolutely boring. Let's have a little more fun with this.

	var dog = {
		petName: "Marley",
		breed: "Goberian",
		age: 4,
		greet: function () { console.log("Woof! My name is " + this.name + ".") }
	};

We've successfully created an object in JavaScript. We can now ask our object to do stuff.

	dog.petName; // returns "Marley"
	dog.age; // returns 4
	dog.greet(); // prints  "Woof! My name is Marley."
	
You made a JavaScript version of my dog. Awesome! Once our dog is created, it's easy to add stuff to it.

	dog.bestFriend = "Bucu the Cat";

The dot notation is great, but we can also treat the object like an array.

	dog['petName']; // returns "Marley"
	dog['petName'] = "Warley"; // I just changed it to his evil alter-ego
	
Why would you ever want to do this? Dots are amazing. Brackets and strings are a pain. It will come up. Trust me. We don't have time to go through it right now, but I don't want you giving me funny looks later when it comes up, so I mentioned it.

You might of missed this, so I will repeat it because it's worth it: You can store functions as object attributes. You can even push them into arrays. Here is an example.

	var yell, dance, dog;
	
	yell = function (personThatMakesMeAngry) {
		console.log("AHHH! " + personThatMakesMeAngry + "!!!");
	};
	dance = function () {console.log("*Does a happy dance!*")}
	
	var thingsToDo = [yell, dance];
	
	dog = {
		petName: "Marley",
		yell: thingsToDo[0],
		dance: thingsToDo[1]
	};
	
	dog.yell("Poop"); // "AHHH! Poop!!!"
	dog.dance(); // "*Does a happy dance!*"
	
You would almost never do something like this in real life. I made this purposely complicated just to demonstrate a few points. We created two variables and stored some functions in them. We stored those variables in an array just for fun.

Then we created a `dog` object that learned how to do things from that array.
---
layout: tutorial
title: Shoving JavaScript into Your Page
categories: javascript-basics
tags: day1
---

## The console

We just played with the JavaScript console for a bit. For the most part, the console is for testing out ideas and trying things out. Nothing that you you type into the console will be saved when you leave the page.

## Including it in the HTML of your page

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

## Linking to it in the HTML (Preferred)

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

## Bookmarklets

Bookmarklets are little snippets of JavaScript that you can save to your bookmarks bar. When you click on a bookmarklet, it comes to life and does some magic to your page. We'll be playing with some bookmarklets in this course. Stay tuned.

## Chrome and Safari extensions

You can use JavaScript to build extensions for your browser that—um—extend the abilities of your browser. We'll be doing this next week.
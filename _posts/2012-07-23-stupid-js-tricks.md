---
layout: tutorial
title: Stupid JavaScript Tricks
categories: javascript-basics
tags: day1
---

## Alerting

In the JavaScript console, type the following and hit enter.

	alert("Hello world!");

## Prompting

That's great, but let's say you want to get some information from the person visiting your page.

	prompt("What is your name?");

If you'd like, you can provide a default response.

	prompt("Who is the best teacher ever?","Mr. Kinney");

## Confirming

Let's imagine for a moment that you only want a yes or no answer. Try this out:

	confirm("Do you like jelly beans?");
	
Hitting "Okay" returns `true` and "Cancel" returns `false`.

## Logging

The preferred way to debugging is to quietly log to the console itself. Give this a shot:
	
	console.log("I am a banana.");
	
As you dive deeper into JavaScript, you'll be using this one more than the rest to figure out what's going on in your app.
	
## Editing the Content

Okay, this one is fun. Go to any page and toss this little snippet into the console.

	document.body.contentEditable = 'true';
	
Now, go click on any text on the page and start typing. The entire page is now editable. You can type in anything you want.
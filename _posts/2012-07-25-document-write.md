---
layout: tutorial
title: document.write
categories: javascript-basics
tags: days
---

We looked at a few functions for displaying information to the person viewing your page. There are a few more that we didn't talk about (but we definitely will as we go on). The next one on our list is a function called `document.write()` and it—um—writes on the—um—document.

Load up that blank `index.html` file that you downloaded yesterday and fire up the console. In the console, type in the following:

	document.write("Hello world!");
	
Unless you made some kind of terrible mistake, "Hello world!" should appear written on your page. It's magic, I know. Try it again.

Oh no! It's smushed in there next to the first time you did it. Looks like we'll need some HTML in order to format everything so it looks nice. Try this instead:

	document.write("<p>Hello world!</p>");
	
The little `<p>` tags indicates that you want to start a paragraph and the `</p>` indicates that you are finished with your paragraph and would very much like to move onto the next line.

There are a few other tags that are useful.

* `<h1>` to `<h6>` make headings. The first is the biggest; the last is the smallest.
* You can wrap text between `<b>` and `</b>` to make it **bold** and `<i>` and `</i>` to make things _italicized_.

Here is an example:
	
	document.write("<h1>This is a heading.</h1>");
	document.write("<p>And <b>this</b> is a paragraph.</p>");
	
Toss that into your console and see what your get. We'll get a little more into HTML later.

**Nota bene**: You should only use `document.write()` is you want to dynamically generate text on the fly. Otherwise, if you just want something written on your page, **just write it in your HTML file like a normal person.**
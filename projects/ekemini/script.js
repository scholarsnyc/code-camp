$(document).ready(function () {
	alert("Please view this page in full screen mode.");
});

var a1 = function () {
	$('#choice1a').slideUp();
	$('#choice1b').slideUp();
	$('body').append('<p class="story">"Nonsense!" the captain shouts. "No weather can bring this ship down! Man the sails!"</p>');
	$('body').append('<p class="story">Maybe youre just overreacting. But just minutes after you get to the sails, you hear a cry. The hail has torn through the worn out sail of the ship, and fog is starting to settle, making it almost impossible to see which direction the ship is going.</p>');
	$('body').after('<button id="choice2a" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=c1()>Tell the others</button>');
	$('body').after('<button id="choice2b" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=c2()>Panic</button>');
}

var b1 = function () {
	$('#choice1a').slideUp();
	$('#choice1b').slideUp();
	$('body').append('<p class="story">Things get even worse. Fog starts to settle and a strong current sweeps the boat off course. The captain cannot see and therefore cannot take any precautions or regain control of the boat, and you crash into a large rock. The ship starts to sink quite quickly.</p>');
	$('body').after('<button id="choice2c" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=end1()>Stay on the ship</button>');
	$('body').after('<button id="choice2d" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=cW()>Jump overboard</button>');
}

var c1 = function () {
	$('#choice2a').slideUp();
	$('#choice2b').slideUp();
	$('body').append('<p class="story">With help from the crew, you manage to collect enough supplies for a few days of survival. (Good call ;D) A jolt almost sends you overboard, but the others toss the emergency raft onto the water and everyone jumps in. Just as you leave the ship, you realize you left your lifetime savings of gold onboard...</p>');
	$('body').after('<button id="choice3a" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=ending1()>Go back and get your money!</button>');
	$('body').after('<button id="choice3b" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=c3()>Keep going</button>');

}

var c2 = function () {
	$('#choice2a').slideUp();
	$('#choice2b').slideUp();
	$('body').append('<p class="story">Didnt anyone ever tell you that panicking doesnt solve anything? It makes it almost impossible to focus on the situation at hand, and thats exactly what it does to you! Sooner or later someone else is going to notice how bad the conditions are getting, but theyll be too late. Youre too busy worrying that a giant shark will eat your brains to realize the boat has capsized.</p>');
	$('body').append('<p class="story" style="text-align:center; font-size=30px;">THE END</p>');
}

var cW = function () {
	$('#choice2c').slideUp();
	$('#choice2d').slideUp();
	alert("If it weren't for your wise brain and awesome swimming skills that you aqcuired as a young sailor, I bet you'd be fish food.");
	$('body').append('<p class="story">The boat is falling apart anyways. Why not break it some more? You rip a few wooden boards off the hull, almost drowning yourself in the process. Maybe if youre lucky, the fungi thats been growing under there lately wont make you too sick. Another barnacle-ridden board is enough to make a getaway raft. Soaked in sea water, you cling to the board for your life.</p>');
	$('body').after('<button id="choice4a" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=d1()>Next</button>');
}

var c3 = function () {
	$('#choice3a').slideUp();
	$('#choice3b').slideUp();
	$('body').append('<p class="story">Someone forgot the oars. (Idiot.) You all start to guide the raft yourselves, except for a few, who are passed out from exhaustion. The ones not helping are weighing down the raft a bit.</p>');
	$('body').after('<button id="choice3c" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=d2()>Toss them off the raft</button>');
	$('body').after('<button id="choice3d" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=d3()>...More food, right?</button>');
}

var d3 = function () {
	$('#choice3c').slideUp();
	$('#choice3d').slideUp();
	alert("Wow... your crew is fat. But you exercise, right?");
	alert("...Right?");
	$('body').append('<p class="story">The raft is a bit heavier, and everyones getting tired of paddling, but youre sure everyone will make it. (Besides, you might have to roast them later >;D)</p>');
	$('body').after('<button id="choice4c" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=e1()>Next</button>');
}

var d2 = function () {
	$('#choice3c').slideUp();
	$('#choice3d').slideUp();
	$('body').append('<p class="story">You toss the exhausted men overboard and watch them sink peacefully.</p>');
	$('body').after('<button id="choice4b" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=e1()>Next</button>');
}

var e1 = function () {
	$('.choice').slideUp();
	alert("Insert weird snoring sounds here.");
	$('body').append('<p class="story">You wake up on the shore of a deserted island, leaning over the side of the raft.</p>');
	var guy1 = prompt('Give me the name of a person.');
	var guy2 = prompt('Give me another name please.');
	var guy3 = prompt('And one more?');
	$('body').append('<p class="story">' + guy1 + ' and ' + guy2 + ' are asleep as well, but ' + guy3 + ' has already started building a shelter. </p>');
	$('body').after('<button id="choice5d" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=f2()>Help ' + guy3 + '</button>');
}

var f2 = function () {
	$('.choice').slideUp();
	alert("Night falls.");
	$('body').append('<p class="story">The shelter is complete.</p>');
	$('body').after('<button id="choice5a" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=f1()>Examine your surroundings</button>');
}

var f1 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">To your left is a jungle. To your right is a hill. In front of you is the shelter and your crew, which are busy socializing. Behind you is the ocean, but no one wants to go back there too soon.</p>');
	$('body').after('<button id="choice6f" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=g1()>Go left</button>');
	$('body').after('<button id="choice6g" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=g2()>Go right</button>');
}

var inv = function () {
	$('#choicef6').slideUp();
	$('body').append('<p class="story">You have:<ul><li>A loaded pistol</li><li>Matchbox</li><li>First aid kit</li></ul></p>');
}

var end2 = function () {
	$('.choice').slideUp();
	alert("Pistols so are loud...");
	$('body').append('<p class="story">You shoot the pistol up at the sky while yelling like an idiot, in hopes that someone may notice. At first, the only people who notice you are your crew. But once they join in, the noise is enough to attract a passing ship. You all run as fast as possible to reach the rescuers.</p>');
	$('body').append('<p class="story" style="text-align:center; font-size=30px;">THE END</p>');
}

var g1 = function () {
	$('.choice').slideUp();
	alert("FOOD AT LAST!");
	$('body').append('<p class="story">Aching, you make your way into the jungle. You can hear a large animal ahead.</p>');
	$('body').after('<button id="choicea6" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=f5()>Follow the sounds</button>');
	$('body').after('<button id="choiceb6" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=g5()>Run away</button>');
	$('body').after('<button id="choicef6" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=inv()>Check inventory</button>');
	$('body').after('<button id="choicee6" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick = g2()>Go to the hill</button>');
}

var g2 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">You steadily make your way up the hill.</p>');
	$('body').after('<button id="choicef6" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=inv()>Check inventory</button>');
	$('body').after('<button id="choicec6" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=end2()>Fire the pistol</button>');
	$('body').after('<button id="choiced6" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=g1()>Go to the jungle</button>');
}

var e2 = function () {
	$('.choice').slideUp();
	alert("FOOD AT LAST!");
	$('body').append('<p class="story">Aching, you make your way into the jungle. You can hear a large animal ahead.</p>');
	$('body').after('<button id="choice6a" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=f4()>Follow the sounds</button>');
	$('body').after('<button id="choice6b" class="choice" style="background:yellow; color:black; font-size:20px;"onClick=g5()>Run away</button>');
	$('body').after('<button id="choice6e" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=e3()>Go to the hill</button>');
}

var f5 = function () {
	$('.choice').slideUp();
	var lAnimal = prompt("What is your least favorite land animal?");
	var lAnimal = lAnimal.toLowerCase();
	$('body').append('<p class="story">A giant ' + lAnimal + ' appears! What do you do?</p>');
	$('body').after('<button id="choice6z" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=g5()>Run away</button>');
	$('body').after('<button id="choice6y" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=g6()>Fire the pistol to scare it</button>');
	$('body').after('<button id="choice6x" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=g7()>Shoot the ' + lAnimal + '</button>');
}

var g5 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">When you look back, you realize the giant creature is following you. With a great amount of stealth, you manage to climb up a tree, but the creature is tall enough to simply pick you out of the branches with its teeth.</p>');
	$('body').append('<p class="story" style="text-align:center; font-size=30px;">THE END</p>');
}

var g6 = function () {
	$('#choice6y').slideUp();
	$('body').append('<p class="story">This only makes the creature more angry.</p>');
}

var g7 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">LUCKY SHOT! The bullet penetrates the creatures brain, killing it almost instantly. As it falls it knocks over a few fruit trees.</p>');
	$('body').after('<button id="choice7z" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=h1()>Eat the fruit</button>');
	$('body').after('<button id="choice7y" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=h2()>Use the fruit to signal for help?</button>');
}

var h1 = function () {
	$('.choice').slideUp();
	alert("Finally, some food.");
	$('body').append('<p class="story">You quickly leave the jungle, fearing another sneak attack.</p>');
	alert("Night falls.");
	$('body').after('<button id="choice8z" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=g1()>Go back to the jungle</button>');
	$('body').after('<button id="choice8y" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=g2()>Go to the hill</button>');
}

var h2 = function () {
	$('.choice').slideUp();
	alert("Wow, you're desperate!");
	var shapeForm = prompt("What shape should you arrange the fruits in?");
	var shapeForm = shapeForm.toLowerCase();
	if (shapeForm==="triangle") {
		$('body').append('<p class="story">The international sign of distress is three fires in the shape of a triangle, but the fruits are so brightly colored that you are rescued by a passing plane!</p>');
		$('body').append('<p class="story" style="text-align:center; font-size=30px;">THE END</p>');
	}
	else {
		$('body').append('<p class="story">What a waste of fruit.</p>');
		$('body').after('<button id="choice8x" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=g1()>Go back to the jungle</button>');
		$('body').after('<button id="choice8w" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=g2()>Go to the hill</button>');
	}
}

var g8 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">Did you really think throwing sticks and rocks at it would do anything? You might as well have drowned yourself; it wouldve been much less painful than being grinded in that monsters mouth.</p>');
	$('body').append('<p class="story" style="text-align:center; font-size=30px;">THE END</p>');
}

var f4 = function () {
	$('.choice').slideUp();
	var lAnimal = prompt("What is your least favorite land animal?");
	var lAnimal = lAnimal.toLowerCase();
	$('body').append('<p class="story">A giant ' + lAnimal + ' appears! What do you do?</p>');
	$('body').after('<button id="choice6w" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=g5()>Run away</button>');
	$('body').after('<button id="choice6v" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=g8()>Attack the animal</button>');
}

var e3 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">You steadily make your way up the hill. Normally youd fire a rescue flare or a pistol, but you didnt salvage anything from the ship.</p>');
	$('body').after('<button id="choice6c" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=f3()>Build a shelter</button>');
	$('body').after('<button id="choice6d" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=e2()>Go to the jungle</button>');
}

var f3 = function () {
	$('.choice').slideUp();
	alert("Night falls.");
	$('body').append('<p class="story">The shelter is complete.</p>');
	$('body').after('<button id="choice6f" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=e2()>Go left (The forest)</button>');
	$('body').after('<button id="choice6g" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=g3()>Rest</button>');
}

var g3 = function () {
	var ToF = confirm("Do you know how to start a fire without a match?");
	if (ToF===true) {
		$('.choice').slideUp();
		$('body').append('<p class="story">You gather some wood and before long, they go up in flames. The smoke curls into the sky as you fall asleep.</p>');
		alert("The sun rises.");
		$('body').append('<p class="story">You awake to voices and the sound of a helicopter. Someone noticed the smoke from your fire! Youve been rescued!</p>');
		$('body').append('<p class="story" style="text-align:center; font-size=30px;">THE END</p>');
	}
	else {
		$('.choice').slideUp();
		$('body').append('<p class="story">Oh well. You fall asleep.</p>');
		alert("The sun rises.");
		$('body').after('<button id="choiceOw" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=e2()>Go to the jungle</button>');
	}
}

var d1 = function () {
	$('#choice4a').slideUp();
	alert("Insert weird snoring sounds here.");
	$('body').append('<p class="story">You wash up on the shore of a deserted island, alone. You feel hungry, and notice a dense jungle to your left. But then you realize how uncomfortable it is to lay on a pile of sand for so long, and you see a high hill to your right. Which way?</p>');
	$('body').after('<button id="choice5b" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=e2()>Go left</button>');
	$('body').after('<button id="choice5c" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=e3()>Go right</button>');
}

var ending1 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">"I left my money!" you shout to them before climbing out of the raft and back onboard.</p>');
	alert("That was stupid. How much is money worth when you're dead?");
	end1();
}

var end1 = function () {
	$('.choice').slideUp();
	$('body').append('<p class="story">The floor parts beneath you as water quickly fills the boat. You cannot escape.</p>');
	$('body').append('<p class="story" style="text-align:center; font-size=30px;">THE END</p>');
}

var castawaY = function () {
	alert('You are now playing as the main character in Castaway.');
	$('body').append('<p class="story">You are on a ship on your way back home, when the sky darkens. The wind has picked up harshly and you seem to be the only one who notices that the ship is rocking more than usual. Large hailstones start to batter the ship, but the captain pays no attention. What do you do?<p>');
	$('body').after('<button id="choice1a" class="choice" style="background:yellow; color:black; font-size:20px;" onClick=a1()>Alert the captain</button>');
	$('body').after('<button id="choice1b" class="choice" style="background:yellow; color:black; font-size:20px; margin-left:820px;" onClick=b1()>Ignore the weather</button>');
}
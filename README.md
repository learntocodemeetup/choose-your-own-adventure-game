Choose Your Own Adventure Game
===============================

This was the second meetup that we worked on our adventure game, like the first week we pretty much played it by ear and did some trial and error. 

Some of the things that came up during the meetup were things like the difference between == and === we learned the hard way not to use the setTimeout() function (well almost never, it did help in one situation!).

The idea with == and === is a thing alled 'type coercion'. Any conditional statement must resolve to either true or false, which are keywords in JavaScript, these are known as "Boolean" values, which is a type in JavaScript just like number, string, undefined etc. 

Insted of saying == and === I will instead say equality and strict equality with three equals being strict. With strict equality JavaScript will ensure that the two values that it is comparing are strictly equal, or identical. That may be confusing, so it might make more sense if you look at something which the regular equality will do. 

As an example if you compare the value 0 to false, for example in an if statement, what would you expect the return value would be? True or false? 

if ( 0 == false) { 
  // the best code ever made
}

The following conditional statement will actually return 'true', because of a thing called 'type coercion'. When the regular equality is checked, JavaScript will change the type and recognises 0 as a 'falsey' value. Therefore as they are both 'falsey values', it returns true as they equal.

Let's  do the same thing with 'strict equality', you might also hear it being called 'identically equal', it all means the same thing. 

if ( 0 === false) { 
  // the second best code ever made
}

In this case using the === type coercion is not performed and the most logical result of 0 not being equal to false is returned. i.e false is the overall return value. 

String values always have to be identically equal, for example the following will never return true.

if ( "Rad" == "rad") {
 // not the best code ever made
}

Many people like the idea of strict equality because it makes more sense, and some people reccommend to only use that. It is probably a good idea for people new to the language because it is one less thing that can confuse them. I read a book recently by a guy named Kyle Simpson and he seems to think that there are good reasons to use == but he's talking about advanced usage. 

Just another thing if you accidentally use a single equals sign, then you will always get back 'true' as the result, because you are not checking for equality but assigning. There are rules which govern how JavaScript will decide if something needs to return back true or false. It's probably a good idea to go over at least a few of them. 

0, and empty string i.e "" the keyword false a thing called Nan (which means not a number), will all return false. That is why when you get those annoying popups, that won't go away, sometimes if you click "okay" but leave the box blank it will go away, because it recognises an empty value as false.

Everything else will be recognised as true, any non-empty string, any number that is not 0 including negative numbers, any object (we haven't really discussed objects yet but they ar an important part of JavaScript and really most languages).

Anyway, that was kind of a big long rant/discussion, but it will probably help to make the whole idea of 'conditional statements' (for example if and else) easier to grasp. 

Just to explain where we are at in our program, we went with using 'nested conditional statements', which if you think of a tree trunk and working your way out to the branches and from there even more sub-divided branches, it's the same concept. 

The first question we asked was "Choose left or right". The three basic answers are either left, right, but we are using the 'else' keyboard to cover any other response. The difference between if, else if, and else is that else does not need a condition after it. 

We implemented a very bare bones concept of 'randomness', making use of the random number generator that we made at a previous meetup.

    Math.floor(Math.random() * 2 + 1); // returns either 1 or 2

Essentially this is acting like a boolean 'true or false' kind of mechanism as it will only produce 1 or 2. In other words 'randomly decide whether to do this thing or the other thing'. 

In our game if the random number generated was 1 we actually changed the background-image of the body. We did this by using jQuery's .css() method and then changing the url that was being pointed to. 

At one stage we were trying to implement delay between lines of text being output to the page, and we rather naively (noobly) used (this is all Daniels idea/fault) the setTimeout() function. 

Well that didn't work, and really who knows what was going on there :P Moral of the story is use setTimeout() with caution. We might implement the delay feature though, with jQuery as there is a delay() method there that is made for that purpose. 

The last thing we worked on was using buttons as a form of input, i.e letting the user click on a button instead of being given a prompt() dialogue box, which look pretty cruddy. 

    var yesButton = $("#yesButton");

As we had access to the jQuery library we used jQuery to get the references to the elements in the html we wanted to manipulate, i.e the "Yes" and "No" buttons. 

    yesButton.on("click", function() {
      $("#game-display").append("<p>You have successfully climbed the tree! Congratulations gallant one, you have escaped the           bear...for now.</p>");
      $("button").hide();
    });

This is jQuery's way of attaching an 'event listener'. The idea of an event listener is simply to assign code to a particular element on the page, that will run when a certain event - which the browser understands - fires. 

So in this case, it is saying 'listen for when the user clicks on a button, and when that happens this is what we want to do'. 

I think that basically sums up what we did, and a little reasoning behind the decisions we made. We made small adjustments to the css, just to make the page look a bit better. Images were of course stolen without permission, thanks Internet. 

If we do decide to keep working on the game, a few things that might make sense would be to use array to store many different strings, and then to randomly choose a string to output, to introduce more 'randomness' in what happens.

Any questions send me an email: daniel.albert.jeffery@gmail.com
  
  
  
  
  written by Daniel Jeffery

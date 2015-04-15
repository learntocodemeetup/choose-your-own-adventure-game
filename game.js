
  function cleverDice(maxRoll) { 
    return Math.floor(Math.random() * maxRoll); 
  }


  function chooseYourOwnAdventureGame() {

    $("#game-display").append(
      "<p>You are in a mysterious enchanted forest, which way do you wish to turn gallant hero?</p>"
    );

    var pathDirectionChoice = prompt("Choose left or right.");

    if (pathDirectionChoice.toLowerCase() == "left") {
      $("#game-display").append("<p>A wise choice.</p>");

        var shallIRunOrTalk = prompt(
          "An enigmatic wizard has appeared in front of you, shall you talk to him or run?"
        );

        if (shallIRunOrTalk.toLowerCase() == "run"){
          $("#game-display").append(
            "<p>You try to run, but the wizard casts a spell and blocks your exit. You spend the rest of your days carrying buckets of water for him. The End.</p>"
          );
        } else if (shallIRunOrTalk.toLowerCase() == "talk") {
          
          var randomNumberFunction = function() {
            return Math.floor(Math.random() * 6 + 1); // returns either 1 or 2
          };

          var randomNumber = randomNumberFunction();

          if (randomNumber === 1) {
            $("body").css(
               "background-image", "url('img/enchanted-forest-enigmatic-wizard.jpg')"    
            );

            
            $("#game-display").html("<p>You're just in time, quickly cast a spell and let us defeat the dragons!</p>")
          } else if (randomNumber === 2) {
            console.log("No");
          }  
              
          
        }
      

    } else if (pathDirectionChoice == "right") {
      
      $("#game-display").append("<p>You are a brave one. You turn down a path and suddenly there is a bear in front of you. Do you climb up a tree?</p>");
    
    
      $("#game-display").append("<button class='btn btn-yes'>Yes</button><button class='btn btn-no' >No</button>");
   
    
      var yesButton = $(".btn-yes");
      var noButton = $(".btn-no");
   
    
      yesButton.on("click", function() {

        var questionsArray = ["You climb up the tree. Congratulations, you have escaped the bear (0)", "Oh no, you lost your footing and fell. (1)", "You realise after climbing the tree you are deathly scared of heights. (2)", "The bear is faster in than you and climbs up the tree too. (3)"];
       
        var message = cleverDice(questionsArray.length);

        $("#game-display").append("<p>" + questionsArray[message] + "</p>");
        $("button").hide();

        if (message == 1 || message == 3 || message == 0 || message == 2) {

          $("#game-display").append(message);

          
            $("body").css(
              "background-image", "url('img/skull-death.jpg')"    
            );

            $("#game-display").append("<button class='btn btn-restart'>Restart your most excellent adventure</button>");

            $(".btn-restart").on("click", function() {
              location.reload();
            }
          );  
        }
      });
  
      noButton.on("click", function() {
          $("body").css(
            "background-image", "url('img/enchanted-forest-dark-figures-near-trees.jpg')"    
          );
          $("button").hide()



          $("#game-display").html("<p>You did not climb the tree foolish one, and have been magically placed in another dimension. Wait, what is that lurking in the trees?</p>");
      
      });

    } else {

      $("#game-display").append("<p>Bad things happen to those who do not make choices. You stood still and the sky fell on your head.</p>");
    
    }

  }

  setTimeout(function() {
    chooseYourOwnAdventureGame(); 
  }, 500);













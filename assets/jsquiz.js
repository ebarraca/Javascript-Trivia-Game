$(document).ready(function() {

    //Define global functions
    var counter;
    var count=30;
    var elem1=document.getElementById('start');
    var score;
    var questions = 
      [
        {
          question: "1. What is Lemmy's real name?",
          choices: ["Phillip Taylor Kilmister", "Ian Fraiser Kilmister", "Edward Clarke Kilmister",],
          answer: 1
        },
        
        {
          question: "2. Which is not a Motorhead Album",
          choices: ["Snake Bite Love", "Overkill", "No More Tears",],
          answer: 2
        },
        {
          question: "3. Where was Lemmy born?",
          choices: ["England", "Scotland", "Ireland",],
          answer: 0
        },
        {
          question: "4. Who was Lemmy a roadie for?",
          choices: ["Carlos Santana", "Jimi Hendrix", "Frank Zappa",],
          answer: 1
        },
        {
          question: "5. Lemmy died at what age?",
          choices: ["65", "70", "75",],
          answer: 1
        }       
      ];

    
      //Define functions
    function timer(){
        count=count-1;
        elem1.innerHTML= count + ' seconds'; //Update span inner HTML
        if (count <= 0){
            clearInterval(counter);
            //counter ended, TIMES UP - HERES YOUR SCORE
            // alert ("Times Up! You scored '+score+' out of '+total'");
        }
    }

    function scoreAnswers() {
        var answers = [1, 2, 0, 1, 1];
        score = 0;
        var total = 5;
        //If the user, for question one, picked the second choice, the score goes up

        //For each question (we use the index argument to get which question we're on)
        $("form").each(function(index) {
            //get the potential answers for that question
            //get the answer that the user picked

            //this is fancy jquery stuff to get the chosen answer:$('input[name=selection]:checked', this)
            //(uses a "pseudoclass" to find which radio button is checked in the form that "this" is)
            var chosenAnswer = $('input[name=selection]:checked', this).val();
            
            //Using our index, we find the question from the questions array
            var question = questions[index];
            //get all the possible answers
            var possibleAnswers = question.choices;
            //get the index of the correct answer
            var correctAnswerIndex = question.answer;
            //use the index and possible answers to get the correct answer
            var correctAnswer = possibleAnswers[correctAnswerIndex];


            //compare that answer to the correct answer
            if (chosenAnswer === correctAnswer ) {
                score++;         
            }
        });
    } 

    function quizQuestions() {
        for (var i = 0; i < questions.length; i++) { 
           $("#quiz").append(
            "<div id='question'>" + questions[i].question + "</div>" + 
            "<form action=''>" +  
            "<input type='radio' class='choice' name='selection' value='"+ questions[i].choices[0] +"'><p class='buttonlabel'>"+ questions[i].choices[0]+ "</p></div>" +
            "<input type='radio' class='choice' name='selection' value='"+ questions[i].choices[1] +"'><p class='buttonlabel'>"+ questions[i].choices[1]+ "</p></div>" +
            "<input type='radio' class='choice' name='selection' value='"+ questions[i].choices[2] +"'><p class='buttonlabel'>"+ questions[i].choices[2]+ "</p></div>" + "</form>");
         } 
         // console.log("ADDED SUBMIT")
        $('#quiz').append("<div id='submit'>SUBMIT</div>"); 
        
         //onclick submit button - div with score appears
        
        $("#submit").click(function(){
            $('#start').empty();
            scoreAnswers();
            console.log("score: ", score);
            $('#quiz').empty();
            $('#submit').hide();
            $('#quiz').append("<div id='score'></div>");
            $("#score").text('All done! You got ' + score + ' right');
            //timer needs to stop!
            clearInterval(counter);
        });
    }


    //Click functions
    $("#start").click(function(){
        counter=setInterval(timer, 1000);
        quizQuestions();
    })

});
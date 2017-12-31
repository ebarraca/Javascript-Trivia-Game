 $("#start").click(function(){

      var count=30;
      var elem1=document.getElementById('start');
      var counter=setInterval(timer, 1000); 


      function timer(){
        count=count-1;
        elem1.innerHTML= count + ' seconds'; //Update span inner HTML


        if (count <= 0){
           clearInterval(counter);
           //counter ended, TIMES UP - HERES YOUR SCORE
           alert ("Times Up! You scored '+score+' out of '+total'");

        }
      }


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


      //create a new div and above questions appear.

      function quizQuestions() {

        for (var i = 0; i < questions.length; i++) { 
           $("#quiz").append(
            "<div id='question'>" + questions[i].question + "</div>" + 
            "<form action=''>" +  
            "<input type='radio' class='choice' name='selection'>"+ questions[i].choices[0]+ "</div>" +
            "<input type='radio' class='choice' name='selection'>"+ questions[i].choices[1]+ "</div>" +
            "<input type='radio' class='choice' name='selection'>"+ questions[i].choices[2]+ "</div>" + "</form>");
         } 

        $('#quiz').append("<div id='submit'>SUBMIT</div>"); 

         //onclick submit button - div with score appears

        $(document).ready(function() {
          $("#submit").click(function(){
          $('#quiz').append("<div id='score'></div>"); 
          $('#score').text("all done! your score is x.");

          //write code to populate score; still needs to appear in own window
          });
        });
      
      }
        quizQuestions();

        // how does user choose answer and get logged? 

        // need to figure out how to seperate the questions and choices for css styling.

        // function userGuess() {

        // var answers = [1, 2, 0, 1, 1];
        // var score = 0;
        // var total = 5;

        // if (questions[0] === answers[1]) {
        //   score++;         
        // }  

        // if (questions[1] === answers[2]) {
        //   score++;
        // }

        // if (questions[2] === answers[0]) {
        //   score++;          
        // }  

        // if (questions[3] === answers[1]) {
        //   score++;        
        // }

        // if (questions[4] === answers[1]) {
        //   score++;  
        // }



        //  } 

        //  userGuess();

         


         //write equation for score.
})







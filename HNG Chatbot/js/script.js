var username = "";

    function send_message(message){
        
        var prevState = $("#container").html(); 

        if (prevState.length > 6){
            prevState = prevState + "<br>";
        }

        $("#container").html(prevState +"<span class = 'current_message'>" + "<span class = 'bot'>HNG Bot: </span>" + message + "</span>");
        $(".current_message").hide();
        $(".current_message").delay(1000).fadeIn();
        $(".current_message").removeClass("current_message");
    }
    
    function get_username(){
        send_message("Hello, this is the HNG ChatBot and I can answer some questions you might have concerning the HNG Internship, but first... <br><br> What is your name? (input 'name' only)");
    }

    function ai(message){
        if (username.length<3){
            username = message;
            send_message("Nice to meet you " + username + ", how are you doing? <br> (kindly use keywords i love to reply...'fine','you')");
        }

        if (message.indexOf("fine")>=0){   
            send_message("Thats great! <br> You can now ask me some questions about the internship.");
        }  
        
        if (message.indexOf("you")>=0){
            send_message("Thanks, I am good! <br> You can now ask me some questions about the internship.");
        }

        if (message.indexOf("what")>=0){
            send_message("The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers.");
        }

         if (message.indexOf("how")>=0){   
            send_message("We combine technology with a well proven education system of learning to mentor interns and help them grow which in turn advances the ecosystem. <br> If you would like to know more, input 'tell me more'");
        }

        if (message.indexOf("tell me more")>=0){   
            send_message("I am glad you are hungry for information! <br><br>Everyone is welcome to participate (there is no entrance exam). Anyone can log into the internship using their laptop. Each week, we give tasks. Those who complete them advance forward. We pay the interns weekly. <br><br>The intern coders are introduced to complex programming frameworks, and get to work on real world software. The finalists are connected to the best companies in the tech ecosystem and get full time jobs and contracts immediately. <br><br>Hope this satisfies you a bit, that is all the info i can give out for now. It was nice chatting with you " + username);
        }  
    }

    $(function(){

        get_username();

        $("#textbox").keypress(function(event){
            if (event.which == 13){
                if ($("#enter").prop("checked")){
                    
                    $("#send").click();
                    event.preventDefault();
                    
                    
                }
                
            }
            
        });

        $("#send").click(function(){

            var username = "<span class = 'username' = ><br>You: </span>";

            var newMessage = $("#textbox").val();
            
            $("#textbox").val("");
            
            var prevState = $("#container").html(); 

            if (prevState.length > 6){
                prevState = prevState + "<br>";
            }

            $("#container").html(prevState + username + newMessage);

            $("#container").scrollTop($("#container").prop("scrollHeight"));

            ai(newMessage);

        });

    });
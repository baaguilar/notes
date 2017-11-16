$(document).ready(function(){

    // text for Nov. 12 and Dec. 5
    var novTxt = "My notes for Nov. 12."
    var decTxt = "";
    
    // initially hide the second button (Dec 5.)
    $("#dec5").hide();    
    
    //when the user clicks on Nov. 7 button, the modal is filled with the correct content
    $("#nov12").on("click",function(){
        fillNote(novTxt,this.id);
    });
    
    // when the user clicks on Dec. 5 button, the modal is filled with the correct content
    $("#dec5").on("click",function(){
        fillNote(decTxt,this.id);
    });
    
    // when the user clicks "Add Note" it creates a new button
    $("#new").on("click",function(){
        fillNote(decTxt,"dec5");
    });
    
    // function that will handle placing the correct text inside the modal textbox
    function fillNote(txt,id){
        $("#comment").text(txt);
        
        if(id == "nov12"){
            $("#note h4").text("Notes - Nov. 12");
            novTxt = txt; // update novTxt with latest updates
            $("#comment").val(novTxt);
            console.log("novTxt="+novTxt);
        } else if (id == "dec5"){
            $("#note h4").text("Notes - Dec. 5");
            decTxt = txt; // update decTxt with latest updates
            $("#comment").val(decTxt);
            console.log("decTxt="+decTxt);
        }
    }
    
    // when user closes the modal, save any text edits
    $("#x,#btn").on("click",function(){
       closeModal(); 
    });
    
    // function to handle the close+save process
    function closeModal(){
        
        if($("#note h4").text() == "Notes - Nov. 12"){
            novTxt = $("#comment").val();
        }
        else if($("#note h4").text() == "Notes - Dec. 5"){
            $("#dec5").show();
            decTxt = $("#comment").val();
        }
    }
    
    
    
});
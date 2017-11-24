$(document).ready(function(){
    // initialize a variable "i" for use later
    var i = 1;
    
    // initialize a variable "theid" for use later
    var theid;

    // initialize a new array for use later
    var txt = [];
    
    var title = [];
    
    // add a first item to the array
    txt[1] = "My notes for Nov. 24." ;   
    title[1] = "11/24 3:43 PM";
    
    //when the user clicks, the modal is filled with the correct content
   
   // when clicking a note, fill with correct content 
    $("#yournotes").on("click",".notes",function(){
        theid = this.id;
        fillNote();
        setTimeout(function() {
          $('#comment').focus();
        }, 500);
    });
    
    $("#new").on("click",function(){
        addNew();
    });
        
    // script to add new button
    function addNew(){
        i++; // increment +1
        theid = i; // set theid to match "i"
        title[i] = timeStamp(); // get timestamp and add that value to our array
        
        // add a new button
        $("<div>",{class:"notes",id:i}).appendTo("#yournotes");
        $("<button>",{type:"button",class:"btn btn-primary",id:"note"+i}).appendTo("#"+i);
        $("#comment").val("");
        $("#note"+i).attr( "data-toggle", "modal" ).attr( "data-target", "#note" ).text("Note - "+title[i]);
        
        //update .modal-title with timestamp
        $(".modal-title").text("Notes - "+title[i]);
        
        setTimeout(function() {
          $('#comment').focus();
        }, 500);
    }
    
    // function that will handle placing the correct text inside the modal textbox
    function fillNote(){
        
        $("#comment").val(txt[theid]);
        $(".modal-title").text("Notes - "+title[theid]);
        
        for(var index in txt){
            console.log(index+" "+txt[index]);
        }
            
    }
    
    // when user closes the modal, save any text edits
    $("#x,#btn").on("click",function(){
       closeModal(); 
    });
    
    // function to handle the close+save process
    function closeModal(){
        console.log("theid: "+theid+", i:"+i+" - "+title[theid]);
        txt[theid] = $("#comment").val();
        
    }
    
    /*
    Return a timestamp with the format "m/d/yy h:MM:ss TT"
    */

    function timeStamp() {
    // Create a date object with the current time
      var now = new Date();

    // Create an array with the current month, day and time
      var date = [ now.getMonth() + 1, now.getDate() ];

    // Create an array with the current hour, minute and second
      var time = [ now.getHours(), now.getMinutes() ];

    // Determine AM or PM suffix based on the hour
      var suffix = ( time[0] < 12 ) ? "AM" : "PM";

    // Convert hour from military time
      time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

    // If hour is 0, set it to 12
      time[0] = time[0] || 12;

    // If seconds and minutes are less than 10, add a zero
      for ( var i = 1; i < 3; i++ ) {
        if ( time[i] < 10 ) {
          time[i] = "0" + time[i];
        }
      }

    // Return the formatted string
      return date.join("/") + " " + time.join(":") + " " + suffix;
    }
    
});
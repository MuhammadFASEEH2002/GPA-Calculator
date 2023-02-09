$(document).ready(function(){
    var counter;
    $(".button1").click(function(){
        $(".inputbox").attr("readonly", true);
      counter = $(".inputbox").val();
      console.log(counter);
      for (var i=1; i<=counter; i++) { //adding input boxes for marks, GPA and credit hours after checking the number of courses
          $(".marksdiv").append('<div class="marksdiv'+ i +'"><input type="number" class="marks'+ i +'"  placeholder="Marks">');
          $(`.marks${i}`).after('<input type="number" class="gpa'+ i +'" readonly>')
          $(`.gpa${i}`).after('<input type="number"  class="credithours'+ i +'" placeholder="Credit hrs"></div>')
         
          $(`.marksdiv${i}`).css(   //doing some styling for the input boxes generated
            {
                "display": "flex",
                "flex-direction": "row",
                "margin":"10px",
             
            })
            $(`.marks${i}`).css({
                "margin":"5px",
                "border-radius": "5px",
                "border":"2px solid black",
                "padding-left":"20px",
                "height":"35px",
                "width":"110px"
            })  
            $(`.gpa${i}`).css({
                "margin":"5px",
                "border-radius": "5px",
                "border":"2px solid black",
                "padding-left":"20px",
                "height":"35px",
                "width":"110px",
                "opacity": "70%"
            })  
            $(`.credithours${i}`).css({
                "margin":"5px",
                "border-radius": "5px",
                "border":"2px solid black",
                "padding-left":"20px",
                "height":"35px",
                "width":"110px"
            })            
      }
    });
    //function for calculating result
    $(".resultbutton").click(function(){
        var totalgpa=0;
        var totalcredithours=0;
        for (var i=1; i<=counter; i++){  //checking if any field is left empty
            if ( ($(`.marks${i}`).val()=="") &&  ($(`.gpa${i}`).val()=="") &&  ($(`.credithours${i}`).val()=="")){
                //alert("values cant be left emplty");
            }
            else{
                var numbers=$(`.marks${i}`).val();
                if((numbers>=89.5) && (numbers<=100)){
                    $(`.gpa${i}`).val("4");
                }
                else if ((numbers>=84.5) && (numbers<=89.4)){
                    $(`.gpa${i}`).val("3.75");
                }
                else if ((numbers>=79.5) && (numbers<=84.4)){
                    $(`.gpa${i}`).val("3.5");
                }
                else if ((numbers>=74.5) && (numbers<=79.4)){
                    $(`.gpa${i}`).val("3.25");
                }
                else if ((numbers>=69.5) && (numbers<=74.4)){
                    $(`.gpa${i}`).val("3");
                }
                else if ((numbers>=65.5) && (numbers<=69.4)){
                    $(`.gpa${i}`).val("2.75");
                }
                else if ((numbers>=62.5) && (numbers<=65.4)){
                    $(`.gpa${i}`).val("2.5");
                }
                else if ((numbers>=59.5) && (numbers<=62.4)){
                    $(`.gpa${i}`).val("2");
                }
                else if ((numbers>=54.5) && (numbers<=59.4)){
                    $(`.gpa${i}`).val("1.5");
                }
                else if ((numbers>=0) && (numbers<=54.4)){
                    $(`.gpa${i}`).val("0");
                }
                else{
                    alert("INVALID INPUT KINDLY REFRESH PAGE");
                }
                var credithrs = parseInt($(`.credithours${i}`).val());
                var individualgpa = parseFloat($(`.gpa${i}`).val())*credithrs;

 totalgpa= (totalgpa + individualgpa);
 totalcredithours= (totalcredithours + credithrs);



            }
          
        }
        console.log(totalcredithours);
        console.log(totalgpa);
result=parseFloat(totalgpa/totalcredithours);
$(".resultbox").val(result);
    });
    //function for the working of clear button
    $(".clearbutton").click(function(){
        location.reload(true);
    });

   
         
  });

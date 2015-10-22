$(document).ready(function(){
  // var elem = [];
    $(".container").append("<p><button class='getDataButton'>Fetch Data</button></p>");

    $(".container").on("click", ".getDataButton", function(){

        $.ajax({
                type : "GET",
                url  : "/kittyFooFoo",
                success : function(data) {
                    appendDom(data);
                }
        });
    });
});
function appendDom(data) {
    //var $el = $(".container").children().last();
    console.log(data);
    for (i = 0; i < data.people.length; i++) {
        //var imageAdd = data.people[i].imageURL;
        var elem = "<div class='well'>" + "<button class='deleteButton'>Delete Employee</button>" + "<p><img src='" + data.people[i].imageURL +"'></p>" + "<p>Name: " + data.people[i].name + "</p>" + "<p>Location: " + data.people[i].location + "</p>" + "<p>Title: " + data.people[i].position + "</p>" + "</div>";
        $(".container").append(elem);
    }

    $(".well").on("click", ".deleteButton", function(){
       $(this).parent().remove();
    });

}





//var el = "<div class='newProperty'>" +
//    "<div>Property ID: " + randomNumberId() + "</div>" +
//    "<div>Sqft: " + randomNumberSq() + "</div>" +
//    "<div>Cost/sqft : $ " + randomNumberPrice() + "</div>" +
//    "<div><button class='removeButton'>Remove</button></div>"
//"</div>";
//
//console.log("pathway ",$('.newProperty').last());
//$('#container').append(el);
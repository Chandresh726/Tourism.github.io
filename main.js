function funs(){
    var w=document.getElementById("weather").value
    var request = new XMLHttpRequest();
    if (w != "none") {
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+w+"&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        request.onload =  function() {
            if( request.status>=200 && request.status<400){
                var data = JSON.parse(request.responseText);
                document.getElementById('temp').innerHTML = "The temperatue is " + parseFloat(data.main.temp-273.0).toFixed(1) + "°C";
                document.getElementById('clouds').innerHTML = "The weather is " + data.weather[0].description;
                var url = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
                document.getElementById('myimg').src = url ;
            }
            else {
                console.log("Some error");
            }
        };
        request.onerror = function(){
            console.log("Connection error");
        };
        request.send();
    }
}

function funsform(){
    const element = document.querySelector('form');
    element.addEventListener('submit', event => {
        event.preventDefault();
    });
    const myform={
        "First_name":"",
        "Last_name":"",
        "City":"",
        "Subject":""
    }
    myform.First_name=document.getElementById("fname").value;
    myform.Last_name=document.getElementById("lname").value;
    myform.City=document.getElementById("city").value;
    myform.Subject=document.getElementById("subject").value;
    JSON.stringify(myform);
    document.querySelector('form').reset();           
    console.log(myform);
    alert("Form has been successfully submitted!");

}

$('.carousel').carousel().on('slide.bs.carousel', function (e) {
    var nextH = $(e.relatedTarget).height();
    $(this).find('.active.item').parent().animate({
        height: nextH
    }, 2000);
});


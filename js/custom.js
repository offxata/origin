// $(document).ready(function(){
//     $('#search').click(function(){
//         $('#search-block').slideToggle('fast');
//     });

//     var selectors = document.getElementById('select');
//     var selectors2 = document.getElementById('select2');

//     function select_fun(){
//         for(var i=1; i<=100; i++){
//             var addOption = document.createElement('option');
//             selectors.appendChild(addOption).innerHTML = i+"%";
//             selectors2.appendChild(addOption).innerHTML = i+"%";
//         }
//     }
//     select_fun();

    
//     function showAlarm(){
//         window.alert('alarm');
//     }

//     var hoverBtn = document.getElementById('submit');    
//     hoverBtn.onclick = showAlarm;

// });

// function constructor //object 1
function computer(speed, hdspace, ram){
    this.speed=speed;
    this.hdspace=hdspace;
    this.ram=ram;
    this.price=get_price;
}
// instance
var home_computer = new computer('2GHz', '80GB', '1GB');
var work_computer = new computer('1.5GHz', '40GB', '512MB');
// method
function get_price(){
    var the_price = 500;
    the_price += (this.speed == "2GHz") ? 500 : 300;
    the_price += (this.hdspace == "80GB") ? 500 : 300;
    the_price += (this.ram == "1GB") ? 500 : 300;
    return the_price;
}
// var for list
var home_computer_price = home_computer.price();
var work_computer_price = work_computer.price();
// in window
console.log('test: '+work_computer_price);
console.log('test: '+home_computer_price);

// object 2
var person = {
    name: "xata",
    age: 25,
    gender: "male"
}
person.age= 38;
person.soname= "Off";
console.log(person);

// Object 3
var object = Object.create({x:10, y:20});
object.name = "xata";
object.x = 30;

delete object.x;
console.log(object)

var array = ["xata", 28, "male"];
console.log(array)
console.log('')
console.log(document.links)
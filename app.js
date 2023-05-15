// EVENTS
// Chapter # 43 To 48

// Q# 01. Show an alert box on click on a link.

// function showAlert(){
//     alert('You Clicked The Link');
//   }

// Q# 02. Display some Mobile images in browser. On click on an image Show the message in alert to user.

// function showAlertIMG(message) {
//     alert(message);
//   }

//Q# 03. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted. 

// function deleteRow(button) {
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }

//Q# 04. Display an image in browser. Change the picture on mouseover and set thefirst picture on mouseout.

// function changeImage(flag){
//     var image = document.getElementById("image")
//     document.write("image" , image)
//     if(flag === 'in'){
//         image.src = "./Images/01 On.jpg"
//         image.style.border = "1px solid black"
//         image.style.transition = "all ease 0.5s"
//      }
//      else {
//         image.src = "./Images/02 Off.jpg"

//         image.style.border = "1px solid blue"
//         image.style.transition = "all ease 0.5s"
//         image.style.height = "300px"

//      }     
//        }

//Q# 05. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

// var counterElement = document.getElementById("counter");
// var counter = 0;

// function incrementCounter() {
//   counter++;
//   counterElement.textContent = counter;
// }

// function decrementCounter() {
//   counter--;
//   counterElement.textContent = counter;
// }



// CH 49 - 52

//Q# 01. Create a signup form and display form data in your web page on submission.

//     var form = document.getElementById('signup-form');
// var output = document.getElementById('output');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   var name = form.elements.name.value;
//   var email = form.elements.email.value;
//   var password = form.elements.password.value;

//   output.innerHTML = "<p>Name:</p>" + name + "<p>Email:</p>" +email +"<p>Password:</p>"+ password;

//   form.reset();
// });

//Q# 02. Suppose in your webpage there is content area in which you have entered your item details,


// function expandLoris() {
//     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }

//Q# 03. In previous assignment you have created a tabular data using javascript.


// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }


// Focus the input on the first text box 
$(document).ready(function(){
    $("#name").focus();
// a span to append an id labeled total cost 
$('.activities').append("<span id='totalCost'> </span>");

//
$('.activities').on('change', function() {
    let totalSum = 0;
    let activities = $('.activities input[type=checkbox]');

    for(let i = 0; i < activities.length; i++) {
    let activity = activities[i];
    let activityText = activity.parentElement.innerText;
    let dollarValue = parseInt(activityText.slice(activityText.indexOf('$') + 1));

    if ($('input[name=' + activity.name + ']').prop('checked')) {
        totalSum += dollarValue; 
    }
}
});
    // variables for the clickedBox function
    var jsf = $("input[name='js-frameworks']")
    var express = $("input[name='express']")
    var jsl = $("input[name='js-libs']")
    var node0 = $("input[name='node']")
    var btools = $("input[name='build-tools']")
    var npm = $("input[name='npm']")
    var all = $("input[name='all']")
     
    // clickedBox function watches the state of the activities selected
    function clickedBox() {
    $total = 0
    if (jsf.is(':checked')) {
    express.prop('disabled', true); //If j s-frameworks is selected it to disable the express option
    } else { // do not disable express if js-frameworks wasnt selected
    express.prop('disabled', false);
    }
    if (express.is(':checked')) {
    jsf.prop('disabled', true) //If express is selected to disable the js-frameworks option
    } else { // else do not disable js-frameworks if express wasnt selected
    jsf.prop('disabled', false);
    }
    if (jsl.is(':checked')) {
    node0.prop('disabled', true); //If js-libs is selected disable the node option
    } else { // else do not disable node if js-libs wasnt selected
    node0.prop('disabled', false);
    }
    if (node0.is(':checked')) {
    jsl.prop('disabled', true) //If node is selected disable the js-libs option
    } else { // else do not disable js-libs if node wasnt selected
    jsl.prop('disabled', false);
    }
    };
    // listens when each item is clicked
    jsf.add(express).add(jsl).add(node0).add(btools).add(npm).add(all).on('click', clickedBox);
   
    $('.totalDiv').addClass('is-hidden');

//JOB ROLE
//hide the other text box when page loads
    $("#other-title").hide();
//if other option is chosen then load text box
    $("#title").on('change', (e) => {
                if ($(e.target).val() == 'other') {
                    $('#other-title').show();
                } else {
                    $("#other-title").hide();
                }
    });

// TShirt
//hide color option when it is on default
$("#color-js-puns").hide();
$("#design").change( () => {
$("#color option").hide();

//if statements to show 3 different T-shirt designs when one theme is chosen
if($("#design").val() == "js puns"){
    $("#colors-js-puns").show();
    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
    $("#color").val("cornflowerblue");

} else {

if($('#design').val() == "heart js"){
    $("#colors-js-puns").show();
    $("#color option[value='tomato']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();
    $("#color").val("tomato");
        }
    }
}
);

// hides all the options before a selection
$(".credit-card").hide();
$("p:first").hide();
$("p:last").hide()


//Display payment sections based on payment option

// makes the credit card option a default
$("select#payment option[value='credit card']").attr("selected", "selected"); 
// shows the default
$(".credit-card").show() 
$('#payment').on("change", function () {
if ($(this).val() == 'credit card') { // if they select value is credit card show the credit card information
$(".credit-card").show();
} else {
$(".credit-card").hide(); // if it was not selected hide it
}
if ($(this).val() == 'paypal') { // if they select the value 'paypal' show the first paragraph tag on the page
$("p:first").show()
} else {
$("p:first").hide() // if it was not selected hide it
}
if ($(this).val() == 'bitcoin') { // if they select the value 'bitcoin' show the last paragraph tag on the page
$("p:last").show()
} else {
$("p:last").hide() // if it was not selected hide it
}
})
});

//validation function for all inputs
//NAME
function validName() {
   //Regex that allows letters a-z & puncuations & 0-31
    const nameRegex = /^[a-z][a-z '-.,']{0-31}$|^$/i;
    if(nameRegex.test($('#name').val()) ) {
        $('#name').css('border-color', 'red');
        $('label[for="name"]').css('color', 'red');
        return false;
    }
    else {
         $('#name').css('border-color', '#b0d3e2');
        $('label[for="name"]').css('color', 'black');
        return true;
    }
}
$('#name').on('input', event => validName(event.target.value));
$('#name').on('focusOut', event => validName(event.target.value));

$('form').on('submit', function(event){
    event.preventDefault();
    if(validName() === true) {
        //console.log(true)
        return true;
    } else {
        //console.log(false)
        return false;
    }
})

//EMAIL
function validEmail() {
    const nameRegex = /^[a-z][a-z '-.,']{0-31}$|^$/i;
    if(nameRegex.test($('#mail').val()) ) {
        $('#mail').css('border-color', 'red');
        $('label[for="mail"]').css('color', 'red');
        return false;
    }
    else {
        $('#mail').css('border-color', '#b0d3e2');
        $('label[for="mail"]').css('color', 'black');
        return true;
    }
}
$('#mail').on('input', event => validEmail(event.target.value));
$('#mail').on('focusOut', event => validEmail(event.target.value));

$('form').on('submit', function(event){
    event.preventDefault();
    if(validEmail() === true) {
        //console.log(true)
        return true
    } else {
        //console.log(false)
        return false
    }
}) 
//CREDIT CARD
function validCard() {
    const nameRegex = /^[a-z][a-z '-.,']{0-31}$|^$/i;
    if(nameRegex.test($('#cc-num').val()) ) {
        $('#cc-num').css('border-color', 'red');
        $('label[for="user_cc-num"]').css('color', 'red');
        return false;
    }
    else {
        $('#cc-num').css('border-color', '#b0d3e2');
        $('label[for="cc-num"]').css('color', 'black');
        return true;
    }
}
$('#cc-num').on('input', event => validCard(event.target.value));
$('#cc-num').on('focusOut', event => validCard(event.target.value));
$('form').on('submit', function(event){
    event.preventDefault();
    if(validCard() === true) {
        //console.log(true)
        return true;
    } else {
        //console.log(false)
        return false;
    }
}) 

//ZIP CODE
function validZip() {
    const nameRegex = /^[a-z][a-z '-.,']{0-31}$|^$/i;
    if(nameRegex.test($('#zip').val()) ) {
        $('#zip').css('border-color', 'red');
        $('label[for="user_zip"]').css('color', 'red');
        return false;
    }
    else {
        $('#zip').css('border-color', '#b0d3e2');
        $('label[for="user_zip"]').css('color', 'black');
        return true;
    }
}
$('#zip').on('input', event => validZip(event.target.value));
$('#zip').on('focusOut', event => validZip(event.target.value));

$('form').on('submit', function(event){
    event.preventDefault();
    if(validZip() === true) {
        return true;
    } else {
        return false;
    }
}) 

//CVV
function validCvv() {
    const nameRegex = /^[a-z][a-z '-.,']{0-31}$|^$/i;
    if(nameRegex.test($('#cvv').val()) ) {
        $('#cvv').css('border-color', 'red');
        $('label[for="user_cvv"]').css('color', 'red');
        return false;
    }
    else {
        $('#cvv').css('border-color', '#b0d3e2');
        $('label[for="user_cvv"]').css('color', 'black');
        return true;
    }
}
$('#cvv').on('input', event => validCvv(event.target.value));
$('#cvv').on('focusOut', event => validCvv(event.target.value));
$('form').on('submit', function(event){
    event.preventDefault();
    if(validCvv() === true) {
        return true;
    } else {
        return false;
    }
});


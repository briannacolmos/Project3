// INTERACTIVE FORM

// Focus the input on the first text box 
$(document).ready(function(){
    $("#name").focus();

    
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
        $total += 100 //Add 100 when checked
    express.prop('disabled', true); //If j s-frameworks is selected it to disable the express option
    } else { // do not disable express if js-frameworks wasnt selected
    express.prop('disabled', false);
    }
    if (express.is(':checked')) {
        $total += 100  //Add 100 when checked
    jsf.prop('disabled', true) //If express is selected to disable the js-frameworks option
    } else { // else do not disable js-frameworks if express wasnt selected
    jsf.prop('disabled', false);
    }
    if (jsl.is(':checked')) {
        $total +=  100 //Add 100 when checked
    node0.prop('disabled', true); //If js-libs is selected disable the node option
    } else { // else do not disable node if js-libs wasnt selected
    node0.prop('disabled', false);
    }
    if (node0.is(':checked')) {
        $total += 100  //Add 100 when checked
    jsl.prop('disabled', true) //If node is selected disable the js-libs option
    } else { // else do not disable js-libs if node wasnt selected
    jsl.prop('disabled', false);
    }
    if (btools.is(':checked')) {  //If build-tools is selected add $100 to total
        $total += 100  //Add 100 when checked
    }
    if (npm.is(':checked')) {  //If npm is selected add $100 to total
        $total += 100  //Add 100 when checked
    }
    if (all.is(':checked')) {  //If main conference is selected add $200 to total
        $total += 200 //Add 200 when checked
    }
        $('.totalDiv').removeClass('is-hidden');  // hides total amount 
        $('.total-display').html('Total: $' + parseInt($total)); // shows total amount of items selected
        };
         // listens when each item is clicked
    jsf.add(express).add(jsl).add(node0).add(btools).add(npm).add(all).on('click', clickedBox);
   
    $('.activities').append('<div class="totalDiv"><label name="total-amount" class="total-display">Total: </label></div>');
    $('.totalDiv').addClass('is-hidden'); 
    



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

// Name validation
const validName = () => {
    let $nameInput = $('#name');
    let validName = $nameInput.val();
    if(validName) {
    $nameInput.removeClass('invalid').addClass('valid');
   return true;
    } else {
    $nameInput.removeClass('valid').addClass('invalid');
    $nameInput.after("<span class = 'err_msg' style='color:red'>Enter a valid name</span>");
    return false;
    }
    }

    const validEmail = () => {
    let $emailInput = $('#mail');
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // valid email
    let validEmail = regex.test($emailInput.val());
    if (validEmail) {
    $emailInput.removeClass('invalid').addClass('valid');
    return true;
    } else if ($emailInput.val() !== '') { 
    $emailInput.removeClass('valid').addClass('invalid'); // Must be a valid email address
    $emailInput.prev().text('Enter valid email').css('color', 'red');
    return false;
    } else {
    $emailInput.removeClass('valid').addClass('invalid');
    $emailInput.after("<span class = 'err_msg' style='color:red'>Enter a valid email</span>"); // error message

    return false;
    }
    }
    const validCreditCard = () => {
    let $ccNumber = $('#cc-num');
    let regex = /^\d{13,16}$/; //13 to 16 digits for cc number
    let validCc = regex.test($ccNumber.val());
    if (validCc) {
    $ccNumber.removeClass('invalid').addClass('valid');
    $ccNumber.prev().text('Card Number:').css('color', 'black');
    return true;
    } else {
    $ccNumber.removeClass('valid').addClass('invalid');
    $ccNumber.after("<span class = 'err_msg' style='color:red'>Enter a valid credit card</span>"); // error message

    return false;
    }
    }
    const validZipCode = () => {
    let $zipCode = $('#zip')
    let regex = /\d{5}/; //5 digits for zip code
    let validZip = regex.test($zipCode.val());
    if (validZip) {
    $zipCode.removeClass('invalid').addClass('valid');
    $zipCode.prev().text('Zip Code:').css('color', 'black');
    return true;
    } else {
    $zipCode.removeClass('valid').addClass('invalid');
    $zipCode.after("<span class = 'err_msg' style='color:red'>Enter a valid name</span>"); // error messsage

    return false;
    }
    }
    const validCvv = () => {
    let $cvv = $('#cvv');
    let regex = /\d{3}/;
    let validCvv = regex.test($cvv.val());
    //3 digits for cvv
    if (validCvv) {
    $cvv.removeClass('invalid').addClass('valid');
    $cvv.prev().text('CVV:').css('color', 'black');
    return true;
    } else {
    $cvv.removeClass('valid').addClass('invalid');
    $cvv.after("<span class = 'err_msg' style='color:red'>Enter a valid name</span>"); // error message

    return false;
    }
    }
    //making sure an activity is checked
    const validActivities = () => {
    let $activityInput = $('.activities input:checked');
    let $activityLegend = $('.activities legend');
    if ($activityInput.length > 0) {
    $activityLegend.text('Register for Activities:').css('color', 'black');
    return true;
    } else {
    $activityLegend.text('Please Select an Activity').css('color', 'red');
    return false;
    }
    }
    //making the form submit and validate all the variables above
    $('form').on('submit', function(e){
        $('.err_msg').remove();
    if ($('#payment').val() === 'credit card') {
    if(validName() & validEmail() & validActivities() & validCreditCard() & validCvv() & validZipCode()) {
    alert('Successfully Registered!'); 
    return true;
    } else {
    e.preventDefault();
    alert('Fill out required fields');
    }
    }
    });

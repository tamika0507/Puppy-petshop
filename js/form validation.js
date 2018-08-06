<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Registration Form</title>
<script src="FormValidation2.js"></script>
<script>
    function validate(e){
        var f = e.currentTarget;
        var firstName = document.getElementById("FirstName").value;
        var midInit = document.getElementById("MidInit").value;
        var lastName = document.getElementById("LastName").value;
        var city = document.getElementById("City").value;
        var state = document.getElementById("State").value;
        var zipCode = document.getElementById("Zip").value;
        var email = document.getElementById("Email").value;
        var userName = document.getElementById("Username").value;
        var password1 = document.getElementById("Password1").value;
        var password2 = document.getElementById("Password2").value;
        var errors = [];
 
        if (!checkLength(firstName,1,100)) {
            errors[errors.length] = "You must enter a first name.";
        }
 
        if (!checkLength(midInit, 1, 1)) {
            errors[errors.length] = "You must enter a one-letter middle initial.";
        }
 
        if (!checkLength(lastName,1,100)) {
            errors[errors.length] = "You must enter a last name.";
        }
 
        if (!checkLength(city,1,100)) {
            errors[errors.length] = "You must enter a city.";
        }
 
        if (!checkLength(zipCode, 5, 10)) {
            errors[errors.length] = "You must enter a valid zip code.";
        }
        if (!checkEmail(email)) {
            errors[errors.length] = "You must enter a valid email address.";
        }
 
        if (!checkLength(userName,1,100)) {
            errors[errors.length] = "You must enter a username.";
        }
 
        if (!checkLength(password1,1,100)) {
            errors[errors.length] = "You must enter a password.";
        } else if (compareValues(password1, password2) !== 0) {
            errors[errors.length] = "Passwords don't match.";
        }
 
        if (!checkRadioArray(f.Country)) {
            errors[errors.length] = "You must select a country.";
        } else if ((!document.getElementById("Country_Other").checked && f.State.selectedIndex === 0)
            || (document.getElementById("Country_USA").checked && f.State.selectedIndex > 51)
            || (document.getElementById("Country_CA").checked && f.State.selectedIndex <= 51)
            || (document.getElementById("Country_Other").checked && f.State.selectedIndex > 0)) {
 
            errors[errors.length] = "Country and State don't match.";
        }
 
        if (!checkCheckBox(document.getElementById("Terms")) ) {
            errors[errors.length] = "You must agree to the terms.";
        }
 
        if (errors.length > 0) {
            reportErrors(errors);
            e.preventDefault();
        }
 
    }
 
    function reportErrors(errors){
        var msg = "There were some problems...\n";
        var numError;
        for (var i=0; i<errors.length; i++) {
            numError = i + 1;
            msg += "\n" + numError + ". " + errors[i];
        }
        alert(msg);
    }
 
    window.onload = function() {
        document.getElementById("registrationform").addEventListener("submit", function(e){
            validate(e);
        });
 
        document.getElementById("Comments").addEventListener("blur", function(){
            checkTextArea(this, 100);
        });
    }
</script>
</head>
<body>
<h1>Registration Form</h1>
<form method="post" id="registrationform" action="Process.html">
<table border="0" cellspacing="2" cellpadding="2">
<tr>
    <td>First Name:</td>
    <td><input type="text" name="FirstName" id="FirstName" size="20"></td>
</tr>
<tr>
    <td>Last Name:</td>
    <td><input type="text" name="LastName" id="LastName" size="20"></td>
</tr>
<tr>
    <td> Address:</td>
    <td><input type="text" name="Address" id="Address" size="50"></td>
</tr>
<tr>
    <td>City: </td>
    <td><input type="text" name="City" id="City" size="20"></td>
</tr>
<tr>
    <td>State/Province: </td>
    <td>
        <select name="State" id="State">
            <option value="0">Please Choose...</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NF">Newfoundland</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
        </select>
    </td>
</tr>
<tr valign="top">
    <td>Country:</td>
    <td>
        <input type="radio" name="Country" id="Country_USA" value="USA"> United States<br>
        <input type="radio" name="Country" id="Country_CA" value="CA"> Canada<br>
        <input type="radio" name="Country" id="Country_Other" value="Other"> Other
    </td>
</tr>
<tr>
    <td>Zip: </td>
    <td><input type="text" name="Zip" id="Zip" size="10"></td>
</tr>
<tr>
    <td>Email: </td>
    <td><input type="text" name="Email" id="Email" size="30"></td>
</tr>
<tr>
    <td>Type of Pet</td>
    <td><input type="text" name="TypeOfPet" id="TypeOfPet" size="20"></td>
</tr>
<tr>
    <td>Pet's Name<td>
    <td><input type="text" name="PetsName" id="PetsName" size="20"></td>
</tr>
<tr>
    <td>Type of Pet: </td>
    <td><input type="text" name="TypeOfPet" id="TypeOfPet" size="10"></td>
</tr>
<tr>
    <td colspan="2">
        <input type="checkbox" name="SpayedOrNeutered" id="SpayedOrNeutered" value="checkbox">
       Spayed or Neutered
    </td>
</tr>
<tr>
    <td colspan="2" align="center">
        <input name="submit" type="submit" value="Submit">
        <input name="reset" type="reset" value="Reset Form">
    </td>
</tr>
</table>
</form>
</body>
</html>
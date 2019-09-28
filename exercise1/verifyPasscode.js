function myFunc()
{
	var value1 = document.getElementById("pass1").value;
	var value2 = document.getElementById("pass2").value;
	alertmessage = ""
	if(value1 != value2)
	{
		alertmessage += "The passwords entered don't match\n";
	}
	if(value1.length < 8 || value2.length < 8)
	{
		alertmessage += "The passwords are not at least 8 characters long\n";
	}
	if(alertmessage.length == 0)
	{
		alert("Your passcode has been validated!");
	} 
	else 
	{
		alert(alertmessage);
	}
}

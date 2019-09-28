function myFunction() {
    var textred = document.getElementById("redval1").value;
    var textgreen = document.getElementById("greenval1").value;
    var textblue = document.getElementById("blueval1").value;
    var width = document.getElementById("width").value;

    var backred = document.getElementById("redval2").value;
    var backgreen = document.getElementById("greenval2").value;
    var backblue = document.getElementById("blueval2").value;

    var colorstring1 = "rgb(" + textred + ", " + textgreen + ", " + textblue + ")";
    var colorstring2 = "rgb(" + backred + ", " + backgreen + ", " + backblue + ")";


    document.getElementById("demo").style.backgroundColor = colorstring1;
    document.getElementById("demo").style.borderColor = colorstring2;
    document.getElementById("demo").style.borderWidth = width;

  }
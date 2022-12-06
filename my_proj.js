*/function myFunction() {
    
    var input = document.getElementById("myInput");
   var filter = input.value.toUpperCase();
    var h5 = document.getElementsByTagName("h5");
   var div = div.getElementsbyClass("card")
    for (var i = 0; i < h5.length; i++) {
        var a = h5[i].getElementsByTagName("h5")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}
/*


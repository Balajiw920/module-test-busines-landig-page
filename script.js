function showm(){
    var i1 = document.getElementById('i1').value;
    var i2 = document.getElementById('i2').value;
    var i3 = document.getElementById('i3').value;

    if (i1&& i2&& i3){
        alert("Form Submitted Successfully!")
        
    }else {
        alert("Please fill the mandatory fields")
    }
}

var Utils = {

    disableInput: function() {
        document.getElementById("input_url").value = '';
        document.getElementById("input_url").disabled = true;
    },
    
    enableInput: function() {
        document.getElementById("input_url").disabled = false;
    
    }

}


function isEmpty() {
        if ((document.forms['frm'].name.value === "")||(document.forms['frm'].comments.value === "")||!(document.getElementById('male').checked ||document.getElementById('female').checked)) {
          alert("All field are compulsory");
          return false;
        }
        return true;
}

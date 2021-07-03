document.getElementById('form-submit').addEventListener('click',  function(){
    let name = document.getElementById('exampleInputName').value;
    let email = document.getElementById('exampleInputEmail').value;
    let msg = document.getElementById('inputMessage').value;

    document.getElementById('name-error').innerText = "";
    document.getElementById('email-error').innerText = "";

    if(name==''){
        document.getElementById('name-error').innerText = "Name is Required !";
    }
    else if(email=='')
    {
        document.getElementById('email-error').innerText = "E-Mail is Required !";
    }
    else
    {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), options);
        myModal.show();
        
    }
});
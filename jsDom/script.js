function submit(){
    console.log("submit button clicked");

    const fn = document.getElementById("fullName").ariaValueMax;
    console.log();
    
    document.getElementById("my data").innerText = fn;
    document.getElementById("fullName").value = "";
    
}
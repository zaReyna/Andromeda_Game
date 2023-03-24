// start of code from https://web.microsoftstream.com/video/553ed432-a052-4ba6-b3cf-eaf1042611f5
let answers = ["Yes, good luck is heading your way", "No, that will lead to unfavourable outcomes", "Maybe, proceed with caution", "Don't do anything you will regret", "The odds are in your favour"];

let checkForm = () => {
    let question = document.getElementById("question").value;
    let response = document.getElementById("response");
    

    let n = Math.floor(Math.random() * 5);
    response.innerHTML = answers[n];
    response.classList.toggle("fade-in");
    setTimeout(() =>{
        response.classList.toggle("fade-in");
    }, 3000);
    
}
// end of code from https://web.microsoftstream.com/video/553ed432-a052-4ba6-b3cf-eaf1042611f5
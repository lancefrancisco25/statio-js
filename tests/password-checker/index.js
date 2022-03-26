const inputState = statio.createState("inputState");
const passwordScore = statio.createState("passwordScore").set(0);
const inputEl = document.getElementsByTagName("input")[0]

inputEl.oninput = (e)=>{
    inputState.set(e.target.value)
}

/*
8char length 27
upercase and lowercase 27
1 special character 27
no < > 19 (need alert)
* */

inputState.attach(function(state) {
    let score = (state.length < 8 && state.length !== 0) ? state.length * 3.375 : (state.length === 0)? 0 : 27;
    if (state.toUpperCase() !== state) {
        score = score + 27
    } else {
        score = score - 27
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(state)) {
        score = score + 27
    } else {
        score = score - 27
    }
    if (state.indexOf('>') > -1 || state.indexOf('<') > -1){
        score = score - 27
        alert("It is not recommended to contain < or > symbol in your password")
    }else{
        score = score + 19
    }
    passwordScore.set((score < 0)? 0 : score)
})

passwordScore.attach(function (state) {
    document.getElementById("passwordScore").innerText = state + "% password Score"
})
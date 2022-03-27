## Usage 
```js 
    const statio = require('statio');
```
----
# Statio.js
A library for handling the changes made to the state.


# Initialization of State

---

## statio.createState(string)
- It's a function
- It creates the state
- **Store it in a (const) variable**
- Accepts string (**THE NAME OF THE STATE**)
```js
const profileState = statio.createState("userName")
```
- To change state, call the .set(any)
## createState.set(value)
- It is a function
- Use to change the state
- **use it together with createState**
```js
profileState.set("Statio Developer")
```

# Getting the Changes of State

---
## createState.attach(function)
- it is a function
- use to get the effect of the 1 state changing
- Store it in a variable if you are going to detach it
- **Accept a function in the parameters**
```js
profileState.attach(function (state) {
    console.log("The New profile image is " + state);
})
```
## createState.attach.detach()
- it is a function
- It detaches the attachment into state
- **only works if you are going to call it inside attach variable**
- to attach it again, store this in a variable and use .attach()
```js
const profAttach = profileState.attach(function (state) {
    console.log("The New profile image is " + state);
})
profAttach.detach()
```
```js
//to attach again
const profAttach = profileState.attach(function (state) {
    console.log("The New profile image is " + state);
})
const detachProf = profAttach.detach()
detachProf.attach()
```
## createState.get()
- It is a function
- Only get the current state when run
- Returns the current state
```js
console.log(profAttach.get())
//logs Statio Developer
```
# statio.catchEffect(function, array)
- use it independently
- it is like .attach, but it accepts multiple state names
- the array only accepts array of the state name (string)
```js
statio.catchEffect(function (){
    console.log("Change recieved");
},["userName", "userEmail"]) 
```




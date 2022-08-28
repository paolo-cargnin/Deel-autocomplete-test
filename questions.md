# TEST 2 - questions

### 1- What is the difference between Component and PureComponent? give an example where it might break my app.

The difference is about the rendering of the component itself. _I don't remember at the moment_ the techincal difference (there is a specific function the in the Component case it is rendered automatically). The pratical difference is that using PureComponent the component will re-render only if we decide it to re-render it (changing the state for example) or if a props passed to the component changes. Using Component instead the component re-renders even depending on other cases (such as a parent component that re-renders).


### 2 - Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
Ok, I should have read this question (ShouldComponentUpdate is the name of the function) ! When the context is updated the component should always re-render. In a PureComponent this is delagated to the developers. If it doesn't re-renders the component. The data will be unsyncronized to the DOM. 

### 3 - Describe 3 ways to pass information from a component to its PARENT.

- By using a function of the parent as prop (this is the most common and _direct_ way). 
- By using the Context API (or an external state container like redux).
- By using an external state like redux

### 4- Give 2 ways to prevent components from re-rendering.

- Using useMemo or useCallback to _memorize_ the result of a function (or to save the function itself with useCallback), which will prevent the rendering if we are using the same values
- Using useRef instead of useState. Sometimes for lazyness we tend to overuse useState even when we actually don't need to update a specific value everytime (causing the re-rendering of the component). A classical example is a search bar that it runs when you click a button (or press enter). Using refs you could only read the value of the input once (on the click of the button, or when the user presses the enter key, or in the submitting of a form)


### 5 -What is a fragment and why do we need it? Give an example where it might break my app.
A fragment is just a component that will not render an HTML as parent in the final DOM. It is used with the syntax of 

`<>
  YOUR Code
</>`

And it permits you to have better management over your component infrastructure.
It can break your app if you don't write a proper CSS considering the final output of a react app using the fragments.

### 6 - Give 3 examples of the HOC pattern.

1 - when building an huge app, having different layouts for different sectors of the web app (AuthLayout, PrivateLayout, PublicLayout, with inside other components)
2 - __Saving time for other answers sorry__

### 7 - what's the difference in handling exceptions in promises, callbacks and async...await.

To handle an exception in a promise you will need to use the second parameter of the New Promise() callback to reject it.
Using the standard callbacks, you need to chain the promise with a .catch() method to use a callback to manage the exception. Instead with async...await, you will use the standard try{ code }catch(e){code } to handle the exception

```
// Rejecting a Promise:

a = () => {
  return new Promise((resolve,reject) => {
    reject("error")
  })
}


// getting the error with the callbacks syntax:
a()
  .catch(e => {
    // handle the excepetion
    console.error(e)
  })

// handling the error with async await
// Async must be used inside of functions
const b = async () => {
  try{
    a()
  }catch(e){
    console.error(e)
  }
}

var add2 = function(number) {
  return number + 2;
}
```

### 8 -How many arguments does setState take and why is it async
setState have 1 argument and it can be either the new value youwant to give to the state or a callback that will have the previous value as first paramenter and you will need to return the new value of the state.
It is async because it doesn't have sense to make it sync, since the result will be the re-rendering of the component. 

### 9 - List the steps needed to migrate a Class to Function Component.

1- Merge the constructor function and the render() function. 
2- use the params of the contructor function into the function component
3- include all the methods of the class inside  the code of the functions
4- Refactoring starting from here


### 10 -  List a few ways styles can be used with components.

1 - Styled components
2 - css modules (my favourite)
3 - global styling 


### 111 - How to render an HTML string coming from the server.

Using the *dangerouslySetInnerHTML* prop, which will require an object with a property named "__html" (I used it in the first test in the `AutoCompleteOption` component )
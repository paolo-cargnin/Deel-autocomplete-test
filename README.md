# An autocomplete component built for Deel

This repository is ready-to-use **autocomplete** React component written in Typescript.

### Notes for the evaluator:
- Since the requirements are to build a **production ready** component, I will focus more on the development, otherwise I would have spent more time at the beginning using **npm workspaces** to setup a repository for a real react component ready to be published on npmjs.org.
- I would have used prettier and another eslint config, but I wanted to never use `npm i xxxx`  in any case.

 
 ## How to test the application

 - Go to the demo folder and run 
`npm i`
`npm start`

- There is written even in the HTML page of the project, but I will specify even here: the component is built in a way that the developer is responsable to write the "search" part of the select, I choose to do so in order to build a component that can have more use-cases. Since, **of course** in the test was requested to use the component in an async way, I decided to: 
  - Use proper typing to specify it
  - Create 2 demos (all visible from the homepage) where I search both with mocks and using APIS ( I was try to creat a third one where I put the single option customizable, but the time ended).

### Things to improve to mark the component as _production ready_ (imo): 
- Writing tests: of course we should start from that, but I was unconfident to write that since the beginning given the amount of things to do in 90 minutes. I could have choose to write test but I wouldn't be able to implement some nice features like __arrow keys__ to move around the selection. I think that for the way I structured the component at the end, TypeScript is a good starting point to check that the component is used correctly.
- Code structure and naming. To speed up the development I didn't lose time on thinking a proper name structure, so the code can be a little messy to read
- Of course the UI. It is super basic and we could have done many things. The idea was to build everything with modules and use css native variables for customisation, I simply didn't have enough time.
- Better accessability and usability in general. Even if you can navigate using the arrow keys among the options, there are some improvements that needs to be done:
  -  **Accessability** : All the proper html attributes and, most important imho, a management of the focusable elements and of the order of them
  - **Responsiveness** : We should remove the arrow selection when the device doesnt' have a keyboard attached, plus we should implement a logic to show the selection menu on top or on bottom of the input depending on the space that it occupy.
- A clear button
- An higlighted management of the selected element
- A better props management: Some options are customizable but probabily we could think about giving to the developer the option to use it in a more customizable way.
- The possibilty of customize how the option is shown by passing a custom component


After 90 minutes, I stopped and started to write this ReadMe.md file. 

# Questions
On **questions.md** you will be able to find the all the answers to the test. I'll try to remeber and commit every answer so you can see the time spent in each one. 


<!-- The autocomplete component code is inside the folder `./src` -->
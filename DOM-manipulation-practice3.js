const buttons = document.querySelectorAll('button'); // "BUTTONS" IS A NODELIST. IT LOOKS AND ACTS LIKE AM ARRAY.

buttons.forEach((button) => {   //WE USE FOREACH METHOD TO ITERATE THROUGH EACH BUTTON.
    //AND NOTICE THAT WE'RE USING ARROW FUNC. SO EACH VALUE FROM "BUTTONS" WILL GO IN THIS ARROW FN.
    //"BUTTON" IS USED AS A VARIABLE TO ITERATE, LIKE "i" IN FOR LOOP.
    button.addEventListener('click',() =>{  //ADDING EVENTS TO EACH BUTTON.
        alert(button.id);
    });
});
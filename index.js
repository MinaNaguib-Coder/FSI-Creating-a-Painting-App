let selectedColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor 
})

// Now that we can draw on the painting, 
// let's add a feature so the user can change the color they draw with.
// When the page loads, the user should start drawing in blue.
// If they click one of the colored boxes in the palette div, 
// they should begin drawing with whatever color they clicked.
// Use a combination of DOM querying methods and 
// event listeners to track when the user clicks one of the colored boxes, 
// and update the selectedColor variable accordingly.
const colorChoices = document.querySelectorAll('.color-choice')
for(let i = 0; i < colorChoices.length; i ++){
    colorChoices[i].addEventListener('click', function(){
        selectedColor = colorChoices[i].id
    })
}

// Not working
//let clear = document.createElement('clear')
//clear.textContent = 'Clear'
//document.body.append(clear)


// event listeners
//for(let i = 0; i < colorChoices.length; i ++){
    //clear.addEventListener('click', function(){
        //painting[i].style.backgroundColor = 'white'
   // })
//}
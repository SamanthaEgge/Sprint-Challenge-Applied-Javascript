class Carousel {
    constructor(carousel){
        this.carousel = this.carousel
        this.leftButton = document.querySelector('.left-button')
        this.rightButton = document.querySelector('.right-button')
        this.images = this.carousel.querySelectorAll('img')
        console.log(this.images)
        this.selected = document.querySelector('.selected-img') //
        this.images[0].classList.add('selected-img') 
        this.selectedImage // Make this an index of images, that is set to the value of current selected image

        this.leftButton.addEventListener('click', () => this.select())
        this.rightButton.addEventListener('click', () => this.select())
    }
    leftclick(){
        this.images[this.selectedImage].classList.remove('selected-img')
        // Make an if statement to check that the place in the array is less than 0, if so subtract one
        // off the index to move the image to the left. If not, start at the end of the images index
        // reset the selectedImage value to new photo
        if ( > 0)
        
        this.image[this.selectedImage].classList.add('selected-img')
    }

    rightclick(){
        //Make an if statement to check that the place in the array is greater than the index value
        //, if so set index value back to 0
        console.log(this.images)
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

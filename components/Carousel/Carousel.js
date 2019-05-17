class Carousel {
    constructor(carousel){
        // debugger;
        this.carousel = carousel
        this.leftButton = carousel.querySelector('.left-button')
        this.rightButton = carousel.querySelector('.right-button')
        this.images = this.carousel.querySelectorAll('img')
        this.currentIndex = 0
        console.log(this.leftButton)
        console.log(this.rightButton)
        // console.log('images', this.images)
        // console.log('carousel', this.carousel)
        this.leftButton.addEventListener('click', () => this.leftClick())
        this.rightButton.addEventListener('click', () => this.rightClick())
    }
    leftClick(){
        this.images[this.currentIndex].classList.remove('selected-img')
        if (this.currentIndex === 0) {
            this.currentIndex = this.images.length - 1;
        } else {
            this.currentIndex -= 1;
        }
        console.log(this.currentIndex)
        this.images[this.currentIndex].classList.add('selected-img')
        console.log('Hi, Im working!')
    }

    rightClick(){
        this.images[this.currentIndex].classList.remove('selected-img')
        if (this.currentIndex >= 3) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++
        }
        console.log(this.currentIndex)
        this.images[this.currentIndex].classList.add('selected-img')
        console.log('Hi, Im working!')
    }
}

let carouselMaker = document.querySelectorAll('.carousel');
carouselMaker.forEach(e => {
    new Carousel(e)
})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

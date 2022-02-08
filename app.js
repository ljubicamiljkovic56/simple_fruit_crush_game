document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

    const fruitArray = [
        "url(images/pineapple.jpg)",
        "url(images/strawberry.jpg)",
        "url(images/blueberry.jpg)",
        "url(images/kiwi.jpg)",
        "url(images/orange.jpg)",
        "url(images/fig.jpg)"
    ]

    function randomFruit(){
        return fruitArray[Math.floor(Math.random() * fruitArray.length)]
    }
    //create a board
    function createBoard() {
        for(let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            //let randomFruit = Math.floor(Math.random() * fruitArray.length)
            square.style.backgroundImage = randomFruit()
            grid.appendChild(square);
            squares.push(square);
        }
    }

    createBoard()

    //drag the fruits

    let fruitBeingDragged;
    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragleave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));

    function dragStart(){
        fruitBeingDragged = this.style.backgroundImage;
        console.log(fruitBeingDragged)
        console.log(this.id, 'dragstart');
    }

    function dragEnd(){
        console.log(this.id, 'dragend');
    }

    function dragOver(){
        console.log(this.id, 'dragover');
    }

    function dragEnter(){
        console.log(this.id, 'dragenter');
    }

    function dragLeave(){
        console.log(this.id, 'dragleave');
    }

    function dragDrop(){
        console.log(this.id, 'drop');
    }
})

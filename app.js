document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
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
            square.setAttribute('draggable', true)
            square.setAttribute('id', i)
            square.style.backgroundImage = randomFruit()
            grid.appendChild(square);
            squares.push(square);
        }
    }

    createBoard()

    //drag the fruits

    let fruitBeingDragged
let fruitBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragleave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));

    function dragStart(){
        fruitBeingDragged = this.style.backgroundImage;
        squareIdBeingDragged = parseInt(this.id)
        console.log(fruitBeingDragged)
        console.log(parseInt(this.id), 'dragstart');
    }

    function dragOver(e){
        e.preventDefault();
        console.log(this.id, 'dragover');
    }

    function dragEnter(e){
        e.preventDefault();
        console.log(this.id, 'dragenter');
    }

    function dragLeave(){
        this.style.backgroundImage = ''
        console.log(this.id, 'dragleave');
    }

    function dragDrop(){
        console.log(this.id, 'drop');
        fruitBeingReplaced = this.style.backgroundImage
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundImage = fruitBeingDragged
        squares[squareIdBeingDragged].style.backgroundImage = fruitBeingReplaced
    }

    function dragEnd(){
        console.log(this.id, 'dragend');
        let validMoves = [
            squareIdBeingDragged -1,
            squareIdBeingDragged -width,
            squareIdBeingDragged +1,
            squareIdBeingDragged +width
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced)

        if (squareIdBeingReplaced && validMove){
            squareIdBeingReplaced = null
        } else if (squareIdBeingReplaced && !validMove) {
            squares[squareIdBeingReplaced].style.backgroundImage = fruitBeingReplaced
            squares[squareIdBeingDragged].style.backgroundImage = fruitBeingDragged
        } else {
            squares[squareIdBeingDragged].style.backgroundImage = fruitBeingDragged
        }
    }
})

const bodyElement = document.querySelector('body')
const ParagraphElement = document.createElement('p')
const divElement = document.createElement('div')

let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

        this.state = Math.round(Math.random())
        return this.state


    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

        if (this.state === 1) {
            return 'Heads! '
        } else {
            return 'Tails! '
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 1) {
            image.src = './images/bitHeads.png'
        } else {
            image.src = './images/bitTails.png'
        }
        return image;
    }
};

const display20Flips = () => {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        ParagraphElement.append(coin.toString())
        bodyElement.append(ParagraphElement)
    }
}

display20Flips()

const display20Images = () => {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        divElement.append(coin.toHTML())
        bodyElement.append(divElement)
    }
}

display20Images()
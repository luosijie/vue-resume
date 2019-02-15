import JsPDF from 'jspdf'

class GeneratePDF {
    constructor (container) {
        this.container = container
        this.pdf = new JsPDF()
    }

    _traverseContainer (container) {
        // get all texts
        if (container.innerText && !container.children.length) {
            console.log(container.innerText)
        }
        // traverse children
        if (container.children) {
            Array.prototype.forEach.call(container.children, elem => {
                this._traverseContainer(elem)
            })
        }
    }

    generate () {
        this._traverseContainer(this.container)
        this.pdf.text('Hello Vue Resume', 80, 5)
        // this.pdf.save('vue-resum.pdf')
    }
}

export default GeneratePDF

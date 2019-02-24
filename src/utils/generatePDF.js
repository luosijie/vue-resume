import pdfmake from 'pdfmake'

class GeneratePDF {
    constructor (container) {
        this.container = container
        this.containerRect = container.getBoundingClientRect()
        this.pdfmake = pdfmake
        this.definition = {
            content: []
        }
    }

    _traverseContainer (container) {
        // get all texts
        if (container.innerText && !container.children.length) {
            const rect = container.getBoundingClientRect()
            const text = {
                text: container.innerText,
                fontSize: 12,
                absolutePosition: {
                    x: (rect.left - this.containerRect.left) / 2.3,
                    y: (rect.top - this.containerRect.top) / 2.3
                }
            }
            this.definition.content.push(text)
            console.log(rect)
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
        this.pdfmake.createPdf(this.definition).open()
    }
}

export default GeneratePDF

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
            const text = container
            const style = window.getComputedStyle(text)
            const fontSize = style['font-size'].match(/(\d*)px/)[1]
            const fontWight = style['font-weight']
            const rect = text.getBoundingClientRect()
            const elem = {
                text: container.innerText,
                fontSize: fontSize / 2,
                bold: Number(fontWight) > 400,
                absolutePosition: {
                    x: (rect.left - this.containerRect.left) / 2.4,
                    y: (rect.top - this.containerRect.top) / 2.4
                }
            }
            this.definition.content.push(elem)
            console.log(Number(fontWight) > 400, fontWight)
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

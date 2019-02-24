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
            const fontColor = this._rgb2hex(style['color'])
            const fontWight = Number(style['font-weight'])
            const rect = text.getBoundingClientRect()
            const elem = {
                text: container.innerText,
                fontSize: fontSize / 2,
                color: fontColor,
                bold: fontWight > 400,
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

    _rgb2hex (color) {
        const rgb = color.split(',')
        const r = parseInt(rgb[0].split('(')[1])
        const g = parseInt(rgb[1])
        const b = parseInt(rgb[2].split(')')[0])
        const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        return hex
    }

    generate () {
        this._traverseContainer(this.container)
        this.pdfmake.createPdf(this.definition).open()
    }
}

export default GeneratePDF

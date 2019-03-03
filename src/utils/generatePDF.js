import pdfmake from 'pdfmake'
import html2canvas from '@/assets/js/html2canvas.js'

class GeneratePDF {
    constructor (container) {
        this.container = container
        this.containerRect = container.getBoundingClientRect()
        this.pdfmake = pdfmake
        this.ratio = 2.1
        this.definition = {
            info: {
                title: 'Vue Resume',
                author: 'Jesse Luo'
            },
            pageSize: 'A4',
            pages: 1,
            pageMargins: [15, 0],
            content: []
        }
    }

    _traverseContainer (container) {
        // when text matches
        if (container.innerText && !container.children.length) {
            this._addText(container)
            container.style.opacity = 0
        }
        if (container.tagName === 'IMG') {
            this._addImg(container)
            container.style.opacity = 0
        }
        if (container.getAttribute('render-type') === 'canvas') {
            console.log('elem match ->', container.className)
            this._addCanvas(container)
            container.style.opacity = 0
        }
        // traverse children
        if (container.children) {
            Array.prototype.forEach.call(container.children, elem => {
                this._traverseContainer(elem)
            })
        }
    }

    _addText (container) {
        const text = container
        const style = window.getComputedStyle(text)
        const fontSize = style['font-size'].match(/(\d*)px/)[1]
        const fontColor = this._rgb2hex(style['color'])
        const fontWight = Number(style['font-weight'])

        const rect = text.getBoundingClientRect()
        const elem = {
            text: container.innerText,
            fontSize: fontSize / (this.ratio - 0.2),
            lineHeight: 1,
            color: fontColor,
            bold: fontWight > 400,
            absolutePosition: {
                x: (rect.left - this.containerRect.left) / this.ratio,
                y: (rect.top - this.containerRect.top) / this.ratio
            }
        }
        this.definition.content.push(elem)
    }

    _addImg (container) {
        const imgData = container.src
        const rect = container.getBoundingClientRect()
        const elem = {
            image: imgData,
            width: rect.width / this.ratio,
            height: rect.height / this.ratio,
            absolutePosition: {
                x: (rect.left - this.containerRect.left) / this.ratio,
                y: (rect.top - this.containerRect.top) / this.ratio
            }
        }
        this.definition.content.push(elem)
    }

    async _addCanvas (container, isBackground = false) {
        const canvas = await html2canvas(container)
        const rect = container.getBoundingClientRect()
        const elem = {
            image: canvas.toDataURL(),
            width: rect.width / this.ratio,
            height: rect.height / this.ratio,
            absolutePosition: {
                x: (rect.left - this.containerRect.left) / this.ratio,
                y: (rect.top - this.containerRect.top) / this.ratio
            }
        }
        if (isBackground) {
            this.definition.background = elem
        } else {
            this.definition.content.push(elem)
        }
        return elem
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
        this._addCanvas(this.container, true)
        setTimeout(() => {
            this.pdfmake.createPdf(this.definition).open()
        }, 1000)
    }
}

export default GeneratePDF

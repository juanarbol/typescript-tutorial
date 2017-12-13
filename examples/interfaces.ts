/**
 * An interface is like a structure of a class,
 * this interface describe how a triangle is
 * Is used to define properties of a class
 * without creating a class
 * 
 * Sorry for the poor defenition, that's what I
 * understood
 */

interface Triangle {
  base: number
  height: number
  name: string // just for... fun or love to triangles
}

function areaof (triangle: Triangle) {
  return `The area of ${triangle.name} is ${ (triangle.base * triangle.height) * 0.5 }`
}

const trianglePink = { base: 1, height: 4, name: 'Pink Floyd' }

document.body.innerHTML = areaof(trianglePink)

const Fs = require('fs')
const Path = require('path')
const Sass = require('node-sass')


const getAllComponents = () => {
    let allComponents = []
    const types = ['atoms', 'molecules', 'organisms']
    types.forEach(type => {
        const allFiles = Fs.readdirSync(`./${type}`).map(file => ({
            input:  Path.resolve(type, file),
            output: `lib/${file.slice(0, -4)+'css'}`
        }))
        allComponents = [
            ...allComponents,
            ...allFiles
        ]
    })
    return allComponents
}
const compile = (path, fileName) =>  {
    const result =  Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: 'expanded',
    includePaths: [Path.resolve('src')]
})
    Fs.writeFileSync(
        Path.resolve(fileName),
        result.css.toString()
    )
}
const allComponents = getAllComponents()
allComponents.forEach(component => {
    compile(component.input, component.output)
})


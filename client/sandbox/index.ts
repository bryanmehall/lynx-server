import { initRuntime, loadFiles } from 'lynx'
//TODO: move this file/logic to lynx-server repo and have lynx runtime as standalone 
document.body.onload = () => {
    const location = window.location.pathname.split('/')
    const type = location[1] || 'demo'
    const group = location[2] || 'references'
    const testName = location[3] || 'simple-get'
    console.log(tests, group, testName, location)
    loadFiles(type, group, testName).then(createRuntime)
    const groups = document.getElementById('groups')
    Object.entries(tests).forEach((groupEntry) => {
        const groupName = groupEntry[0]
        const groupTests = groupEntry[1]
        const groupTag = document.createElement('div')
        const groupTitle = document.createElement('div')
        groupTag.appendChild(groupTitle)
        groupTitle.className = 'groupTitle'
        groupTitle.innerText = groupName
        groups.appendChild(groupTag)
        groupTests.forEach((testData) => {
            const testName = testData.name
            const testLink = document.createElement('a')
            testLink.href = `/demo/${groupName}/${testName}`
            testLink.className = 'link'
            testLink.innerText = testName
            groupTag.appendChild(testLink)
            testLink.addEventListener('click', () => {
                loadFiles(type, groupName, testName).then(createRuntime)
            })
        })
    })
}
const createRuntime = (fileDataList) => { 
    const lynxText = fileDataList.map((fileData) => (fileData.text)).join('\n')
    const lynxTextBox = document.getElementById('lynxText')
    lynxTextBox.value = lynxText
    const entryPointStringBox = document.getElementById('entryPoint')
    const entryPointString = entryPointStringBox.value
    initRuntime(fileDataList, entryPointString)
    const ontextChange = () => {
        const entryPointString = entryPointStringBox.value
        const lynxText = lynxTextBox.value
        initRuntime(fileDataList, entryPointString)
    }
    lynxTextBox.addEventListener('change', ontextChange)
    entryPointStringBox.addEventListener('change', ontextChange)
}

const RENDER_ENTRYPOINT = "\\app.graphicalRepresentation.jsRep"
const tests = { //TODO: remove hard coded entry points
    jsCompiler: [
        { name: 'addition', entryPoint: RENDER_ENTRYPOINT },
        { name: 'distance', entryPoint: RENDER_ENTRYPOINT },
        { name: 'store-values', entryPoint: RENDER_ENTRYPOINT }
    ],
    state: [
        { name: 'checkbox', entryPoint: RENDER_ENTRYPOINT },
        { name: 'textbox', entryPoint: RENDER_ENTRYPOINT },
        { name: 'input', entryPoint: RENDER_ENTRYPOINT }
    ],
    integration: [
        { name: 'accordian-representation', entryPoint: RENDER_ENTRYPOINT },
        { name: 'parse', entryPoint: RENDER_ENTRYPOINT },
        { name: 'textbox', entryPoint: RENDER_ENTRYPOINT },
        { name: 'mouseover', entryPoint: RENDER_ENTRYPOINT },
        { name: 'quadtree', entryPoint: RENDER_ENTRYPOINT },
    ],
    types: [
        { name: 'coordinate-equality', entryPoint: RENDER_ENTRYPOINT },
        { name: 'array-length', entryPoint: RENDER_ENTRYPOINT }
    ]
}

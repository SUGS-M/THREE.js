import * as THREE from 'three'

//全局变量
const w = window.innerWidth
const h = window.innerHeight

//scene
const scene = new THREE.Scene()

//物体
const cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),
new THREE.MeshBasicMaterial())
scene.add(cube)


//光源：这里是MeshBasicMaterial,不要光源

//camera
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100)
camera.position.z = 5
camera.lookAt(0,0,0)

//render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
// renderer.render(scene,camera)

document.body.append(renderer.domElement)
/*
//setInterval
setInterval(()=>{
    cube.rotation.x += 0.01
    renderer.render(scene,camera)
},1000 / 60)
//注：60HZ就是1秒刷新60次
// 这种方式每次时间不一样；因为时间=setInterval(1秒)+语句体时间
*/

/*
//requestAnimationFrame + tick钩子
function tick(){
    cube.rotation.x += 0.01
    renderer.render(scene,camera)
    requestAnimationFrame(tick)
}
tick()
*/

/*
//requestAnimationFrame + tick钩子 + 考虑不同HZ问题
let time = Date.now()
function tick(){
    let currenrTime = Date.now()
    let deltaTime = currenrTime - time
    time = currenrTime

    cube.rotation.x += 0.01
    renderer.render(scene,camera)
    requestAnimationFrame(tick)
}
tick()

//这里用let声明变量，因为一直在变
*/


//requestAnimationFrame + tick钩子 + 考虑不同HZ问题
let clock = new THREE.Clock()
function tick(){
    const time = clock.getElapsedTime()
    console.log(time)//看一下每次的时间 是不是一样

    cube.rotation.x += time
    renderer.render(scene,camera)
    requestAnimationFrame(tick)
}
tick()



//编程习惯
//运算符号：左右留空格，逗号后面留空格
//变量名第一个单词小写，第二大写
//记住一些固有名字：tick deltaTime
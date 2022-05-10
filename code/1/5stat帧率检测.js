/**
 * Stat虽然在three里,但不在主文件中    并且不能写成{Stat}  大写
 * const stat = new Stat()
 * document.body.append(stat.dom)
 * stat.update()
}
 */
import * as THREE from 'three'
import Stat from 'three/examples/jsm/libs/stats.module'

//全局变量
const w = window.innerWidth
const h = window.innerHeight
const stat = new Stat()

//scene
const scene = new THREE.Scene()

//物体
const axes = new THREE.AxesHelper()
scene.add(axes)

let cubes=[]
function createCube(){
    const d = Math.random()
    const cube = new THREE.Mesh(new THREE.BoxGeometry(d,d,d), new THREE.MeshNormalMaterial())
    cube.position.x = (Math.random()-0.5)*4
    cube.position.y = (Math.random()-0.5)*4
    cube.position.z = (Math.random()-0.5)*4
    // scene.add(cube)
    cubes.push(cube)
}
let n =2000
for(let i = 0; i<n; i++){
    createCube()
}
cubes.forEach(cube=>{
    scene.add(cube)
})



//light

//camera
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
camera.position.set(5,5,5)
camera.lookAt(0,0,0)

//render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w, h)
// renderer.render(scene,camera)
document.body.append(renderer.domElement)
document.body.append(stat.dom)

//渲染钩子
let clock = new THREE.Clock()
function tick(){
    let time = clock.getElapsedTime()
    // cubes.rotation.x +=time
    cubes.forEach(cube=>{
        // cube.rotation.x +=time
        // cube.rotation.y +=time
    })

    renderer.render(scene,camera)
    requestAnimationFrame(tick)
    stat.update()
}
tick()
import * as THREE from 'three'
import Stat from 'three/examples/jsm/libs/stats.module'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

//全局变量
const w = window.innerWidth
const h = window.innerHeight
const stat = new Stat()

//scene
const scene = new THREE.Scene()

//物体
const axes = new THREE.AxesHelper()
scene.add(axes)

const cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial('red'))
scene.add(cube)

//light

//camera
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100)
camera.position.set(5,5,5)
camera.lookAt(0,0,0)

//render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w, h)
document.body.append(renderer.domElement)
document.body.append(stat.dom)

//control
const orbitControl = new OrbitControls(camera, renderer.domElement)

//渲染钩子
function tick(){
    requestAnimationFrame(tick)
    renderer.render(scene,camera)
    stat.update()
    orbitControl.update()
}
tick()




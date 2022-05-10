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

//坐标系
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

//tranform:(position:位置 rotation：旋转 scale:缩放)
//位置：position
cube.position.set(1,1,2)   //位置设置不好，会看不到【比如cube(1,1,5)和camera(0.0.5)】
//旋转：rotation
cube.rotation.z = 45/180*Math.PI
//缩放：scale
cube.scale.x = 4




//光源：这里是MeshBasicMaterial,不要光源

//camera
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100)
camera.position.z = 5
camera.lookAt(0,0,0)

//render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
renderer.render(scene,camera)

document.body.append(renderer.domElement)

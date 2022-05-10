import * as THREE from 'three'

/*    房间比如3D     */

const w = window.innerWidth
const h = window.innerHeight

//房间-3d容器
//scene
const scene = new THREE.Scene()

//东西:家电，家具等........
//物体：geometry(几何体、骨骼) material(材质，皮肤)
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(geometry,material)
scene.add(cube)
const cube2 = new THREE.Mesh(geometry,material)
cube2.position.x = 3//没有变位置，物体会重合
scene.add(cube2)

//光源：台灯等
const light = new THREE.AmbientLight()
scene.add(light)

//相机
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100)
// camera.position.set(0,0,5)
camera.position.z = 5
camera.lookAt(0,0,0)

//Rederer-渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
renderer.render(scene,camera)

document.body.append(renderer.domElement)
console.log(renderer.domElement)


//是不是黑屏，是因为camera和物体一个位置了
//这里换camera的位置吧
camera.position.y = 5
camera.lookAt(0,0,0)
//这段得在render前面，要不然不渲染














//(1)const比var声明变量好,但是const声明的变量不能改变，可let代替
//(2)material材质默认色是|白色|，颜色除了0xffffff(不带引号)，还可以'red'等方式必须带引号）
//(3)camera和物体的初始位置都是（0，0，0），需要改一下位置， |  物体之间也是
//(3.1)所有物体，相机，坐标系默认位置都是（0.0,0）,注意位置调一下，
//(4)light,物体，都在scene下，所以的add   |  render和camera不在，不需要add

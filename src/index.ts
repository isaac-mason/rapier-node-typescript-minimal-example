import Rapier from '@dimforge/rapier3d-compat'

await Rapier.init()

const gravity = new Rapier.Vector3(0.0, -9.81, 0.0)

const world = new Rapier.World(gravity)

const body = world.createRigidBody(Rapier.RigidBodyDesc.dynamic())
world.createCollider(Rapier.ColliderDesc.ball(1), body)

setInterval(() => {
  world.step()
  console.log(body.translation())
}, 1 / 60)

import { Vector3, Matrix4 } from "three";

export class Camera {
  #fov: number;
  #aspect: number;
  #near: number;
  #far: number;
  constructor(fov: number, aspect: number, near: number, far: number) {
    this.#fov = fov;
    this.#aspect = aspect;
    this.#near = near;
    this.#far = far;
  }

  getViewMatrix(eye: Vector3, target: Vector3, up: Vector3) {
    const w = new Vector3().subVectors(eye, target).normalize();
    const u = new Vector3().crossVectors(up, w).normalize();
    const v = new Vector3().crossVectors(w, u).normalize();
    return new Matrix4().set(
      u.x, u.y, u.z, -u.dot(eye),
      v.x, v.y, v.z, -v.dot(eye),
      w.x, w.y, w.z, -w.dot(eye),
      0, 0, 0, 1,
    );
  }

  getOrthoMatrix(fov: number, aspect: number, near: number, far: number): Matrix4 {
    const top = Math.tan(fov / 2 / 180 * Math.PI) * near;
    const right = aspect * top;
    return new Matrix4().set(
      1 / right, 0, 0, 0,
      0, 1 / top, 0, 0,
      0, 0, 2 / (near - far), -(near+far)/(near-far),
      0, 0, 0, 1
    );
  }


  getPerspMatrix(fov: number, aspect: number, near: number, far: number) {
    const orthoProjection = this.getOrthoMatrix(fov, aspect, near, far);
    const perspToOrtho = new Matrix4().set(
      near, 0, 0, 0,
      0, near, 0, 0,
      0, 0, near + far, -near * far,
      0, 0, 1, 0
    );
    return orthoProjection.multiply(perspToOrtho);
  }

}
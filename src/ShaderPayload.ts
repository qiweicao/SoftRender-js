import { Vector2, Vector3, Matrix4 } from "three";
import { Camera } from "./Camera";
export class ShaderPayload {
  modelMatrix: Matrix4;
  viewMatrix: Matrix4;
  projectMatrix: Matrix4;
  mvMatrix: Matrix4;
  mvpMatrix: Matrix4;
  camera: Camera;
  model;
  screenPos: Array<Vector3>;
  outFragPos: Array<Vector3>;
  outNormal: Array<Vector3>;
  outTexCoords: Array<Vector2>;
}
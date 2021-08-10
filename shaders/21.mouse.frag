#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
  vec3 color = vec3(0.0);

  color.r = u_mouse.x / u_resolution.x;
  color.g = u_mouse.y / u_resolution.y;

  gl_FragColor = vec4(color, 1.0);
}
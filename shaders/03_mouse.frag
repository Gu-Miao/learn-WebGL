#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;

void main() {
  vec2 mouse = normalize(u_mouse);
  gl_FragColor = vec4(mouse.x, mouse.y, 0.0, 1.0);
}
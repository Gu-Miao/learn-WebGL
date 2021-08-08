#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;
}
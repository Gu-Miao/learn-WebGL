#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random2d(vec2 coord) {
  return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;

  vec3 color = vec3(0.0);

  // float speed = 100.0; 
  float speed = 999999.9;

  color += random2d(vec2(sin(coord) / speed) * u_time);

  gl_FragColor = vec4(color, 1.0);
}
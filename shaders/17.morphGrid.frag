#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

float random2d(vec2 coord) {
  return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 coord = gl_FragCoord.xy * 0.01;
  coord -= u_time + vec2(sin(coord.y), cos(coord.x));

  float r1 = fract(random2d(floor(coord)) + u_time / 60.0);
  float r2 = fract(random2d(floor(coord)) + u_time / 40.0);

  r1 *= 0.4 - length(fract(coord));

  gl_FragColor = vec4(r1 * 4.0, r1 * r2 * 4.0, 0.0, 1.0);
}
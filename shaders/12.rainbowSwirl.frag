#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 center = vec2(0.5, .5);
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);

  float angle = atan(-coord.y + center.x, coord.x - center.y);
  float len = length(coord - center);

  color.r += sin(len * 50.0 + angle * 4.0 + u_time * 2.0);
  color.g += cos(len * 30.0 + angle * 5.0 + u_time * 2.2);
  color.b += sin(len * 40.0 + angle * 6.0 - u_time * 1.5);

  gl_FragColor = vec4(color, 1.0);
}
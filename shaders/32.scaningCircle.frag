#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const float pi = 3.1415926535;

void main() {
  vec2 coord = gl_FragCoord.xy;
  vec2 st = coord / u_resolution;
  vec2 center = vec2(.5, .5);

  vec4 color = vec4(.95, .1, .07, 1.);

  float d = distance(st, center);
  float t = sin(fract(u_time * .7));

  float scaning = smoothstep(.45 * t, .48 * t, d);
  scaning += smoothstep(.48 * t, 0., d);
  color = mix(color, vec4(color.rgb * .5, 0.), scaning);

  gl_FragColor = color;
}
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const float pi = 3.1415926535;

void main() {
  vec2 coord = gl_FragCoord.xy;
  vec2 st = coord / u_resolution;

  vec4 color = vec4(.95, .1, .07, 1.);
  float repeat = 5. * 2.;

  float lines = abs(sin(st.y * pi * repeat - u_time));
  color = mix(color, vec4(color.rgb * .5, 0.), lines);

  gl_FragColor = color;
}
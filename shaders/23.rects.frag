#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  float size = 200.;
  st *= size;

  float x = mod(floor(st.x + u_time * .3), 7.);
  float y = mod(floor(st.y + u_time * .3), 7.);

  vec4 color = vec4(1., 0., 0., 1.);
  vec4 bg = color * .5;

  color.a *= x * y;
  color += bg;

  gl_FragColor = vec4(color);
}
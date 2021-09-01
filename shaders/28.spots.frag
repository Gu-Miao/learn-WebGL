#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  float size = 50.;
  st *= size;

  float x = mod(floor(st.x + sin(u_time) * .3), 2.);
  float y = mod(floor(st.y + cos(u_time) * .3), 2.);

  vec4 color = vec4(1., 0., 0., 1.);
  vec4 bg = vec4(color.rgb, color.a * .1);

  color.a *= x * y * .2;
  color += bg;

  gl_FragColor = vec4(color);
}
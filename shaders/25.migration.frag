#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec4 fx(float x, vec4 bg, vec4 color) {
  if(x == 0.) {
    return color;
  } else {
    return bg;
  }
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  st *= 50.;

  float x = mod(floor(st.x - u_time * 15.), 50.);

  vec4 bg = vec4(1., 0., 0., .3);
  vec4 color = vec4(1., 0., 0., 1.);

  gl_FragColor = fx(x, bg, color);
}
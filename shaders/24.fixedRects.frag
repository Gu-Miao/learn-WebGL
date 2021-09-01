#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 fx(vec2 st, vec3 color, vec3 bg, float time) {
  if(st.x == 0. || st.y == 0.) {
    return bg;
  } else {
    return color;
  }
}

void main() {
  vec2 coord = gl_FragCoord.xy;

  float size = 8.;
  coord /= size;

  float content_width_percent = 9.;

  float x = mod(floor(coord.x + u_time * 3.), content_width_percent);
  float y = mod(floor(coord.y + u_time * 3.), content_width_percent);

  vec3 color = vec3(1., 0., 0.);
  vec3 bg = vec3(.3, 0., 0.);

  color = fx(vec2(x, y), color, bg, u_time);

  gl_FragColor = vec4(color, 1.);
}
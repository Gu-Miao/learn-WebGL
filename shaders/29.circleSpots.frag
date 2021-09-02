#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) *
    43758.5453123);
}

float in_range(float v, vec2 range) {
  return max(range.s, min(range.t, v));
}

float flash(vec2 coord) {
  float alpha = u_time * .5 - random(coord);
  return in_range(alpha, vec2(0., 1.));
}

float circle(vec2 coord) {
  float x = floor(coord.x);
  float y = floor(coord.y);
  float rx = mod(x, 2.);
  float ry = mod(y, 2.);

  if(rx == 0. || ry == 0.) {
    return 0.;
  }

  vec2 center = vec2(x + .5, y + .5);
  float circle = step(.5, length(coord - center));
  return circle == 0. ? flash(vec2(x, y)) : 0.;
}

void main() {
  vec2 coord = gl_FragCoord.xy;

  float size = 20.;
  coord /= size;

  float circle = circle(coord);

  vec4 color = vec4(1., 0., 0., 1.);
  vec4 bg = vec4(color.rgb, color.a * .1);

  color.a *= circle * .2;
  color += bg;

  gl_FragColor = vec4(color);
}
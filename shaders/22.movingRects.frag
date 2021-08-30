#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float with_time(float x, float multiplier) {
  return x + sin(u_time) * multiplier;
}

float fx(float x, float split) {
  float y = floor(with_time(x / 3., 5.5));
  return mod(y, split) == 0. ? 1. : 0.;
}

float fy(vec2 st, float size) {
  float x = fx(st.x, 2.);
  float x1 = fx(st.x, 4.);
  float _half = size / 2.;
  float _quarter = size / 4.;
  float _y = st.y;
  if(x == 0.) {
    return 0.;
  }
  if(_y >= _half) {
    return 0.;
  }
  if(_y < _half) {
    if(_y > _quarter) {
      return x1;
    }
    return x < .9 ? 0. : 1.;
  }

}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  float size = 40.;
  st *= size;

  vec3 color = vec3(1.0, 0., 0.);

  float alpha = 1.;
  alpha *= fx(st.x, 2.);
  alpha *= fy(st, size);

  gl_FragColor = vec4(color, alpha);
}
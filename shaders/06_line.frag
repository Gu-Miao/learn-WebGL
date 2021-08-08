#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float fn(float x) {
  return x;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  float y = fn(st.x);
  vec3 color = vec3(y);

  if(abs(st.y - y) < 0.001) {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  } else {
    gl_FragColor = vec4(color, 1.0);
  }

}
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 position = 6.0 * gl_FragCoord.xy / u_resolution;

  for(int n = 1; n < 5; n++) {
    float i = float(n);
    position += vec2(0.7 / i * sin(i * position.y + u_time + 0.3 * i) + 0.8, 0.4 / i * sin(position.x + u_time + 0.3 * i) + 1.6);
  }

  position += vec2(0.7 / sin(position.y + u_time + 0.3) + 0.8, 0.4 / sin(position.x + u_time + 0.3) + 1.6);

  vec3 color = vec3(0.5 * sin(position.x) + 0.5, 0.5 * sin(position.y) + 0.5, sin(position.x + position.y));

  gl_FragColor = vec4(color, 1.0);
}
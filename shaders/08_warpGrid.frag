#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);

  color += sin(position.x * cos(u_time / 60.0) * 60.0) + sin(position.y * cos(u_time / 60.0) * 10.0);
  color += cos(position.y * sin(u_time / 30.0) * 10.0) + cos(position.x * sin(u_time / 20.0) * 10.0);

  gl_FragColor = vec4(color, 1.0);
}
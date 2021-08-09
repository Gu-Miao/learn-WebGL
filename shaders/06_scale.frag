#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat2 scale(vec2 scale) {
  return mat2(scale.x, 0.0, 0.0, scale.y);
}

float circleshape(vec2 position, float radius) {
  return step(radius, length(position - vec2(0.5)));
}

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;

  vec3 color = vec3(0.0);

  position -= 0.5;
  position = scale(vec2(sin(u_time) + 2.0)) * position;
  position += 0.5;

  color += vec3(circleshape(position, 0.3));

  gl_FragColor = vec4(color, 1.0);
}
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);

  vec2 translate = vec2(-0.5, -0.5);
  coord += translate;

  const int SIZE = 20;
  float radius = 0.3;

  for(int n = 0; n < SIZE; n++) {
    float rad = radians(360.0 / float(SIZE)) * (float(n) - u_time);

    color += 0.006 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));
  }

  gl_FragColor = vec4(color, 1.0);
}
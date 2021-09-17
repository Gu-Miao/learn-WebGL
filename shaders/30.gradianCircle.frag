#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 coord = gl_FragCoord.xy;
  vec2 st = coord / u_resolution;

  float r = length(st - vec2(.5));

  float r1 = .1;
  float r2 = .23;
  float r3 = .33;
  float r4 = .4;
  float r5 = .49;

  vec4 c1 = vec4(1., 0., 0., 1.);
  vec4 c2 = vec4(1., 1., 0., 1.);
  vec4 c3 = vec4(0., 1., 0., 1.);
  vec4 c4 = vec4(0., 1., 1., 1.);
  vec4 c5 = vec4(0., .7, .5, 1.);
  vec4 c6 = vec4(0.);

  vec4 color;

  if(r < r1) {
    color = mix(c1, c2, r / r1);
  } else if(r < r2) {
    color = mix(c2, c3, (r - r1) / (r2 - r1));
  } else if(r < r3) {
    color = c3;
    color = mix(c3, c4, (r - r2) / (r3 - r2));
  } else if(r < r4) {
    color = mix(c4, c5, (r - r3) / (r4 - r3));
  } else if(r < r5) {
    color = mix(c5, c6, (r - r4) / (r5 - r4));
  }

  gl_FragColor = color * .8;

}
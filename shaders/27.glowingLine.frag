/* Main function, uniforms & utils */
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  vec4 color = vec4(1., 0., 0., 1.);
  float lineWidth = 2. * 0.04;
  float topBounding = smoothstep(1.0 - lineWidth, 1.0 - lineWidth / 2.0, st.y) - smoothstep(1.0 - lineWidth / 2.0, 1.0, st.y);
  float cellAlpha = .1;

  color.a = (topBounding < cellAlpha) ? cellAlpha * color.a : topBounding * color.a;
  color.rgb = max(vec3(topBounding) * color.a * 1.5, color.rgb);

  gl_FragColor = color;
}

// void main() {
//   vec2 st = gl_FragCoord.xy / u_resolution;

//   vec4 color = vec4(0., 0., 0., 1.);
//   vec4 line_color = vec4(1., 0., 0., 1.);

//   float cell_alpha = .1;

//   float line_pct = smoothstep(.5, .6, st.x) - smoothstep(.6, .7, st.x);

//   // color = mix(color, line_color, line_pct);

//   float alpha = max(line_pct, cell_alpha);

//   color.rgb = max(vec3(line_pct) * alpha * 1.5, color.rgb);

//   gl_FragColor = color;
// }
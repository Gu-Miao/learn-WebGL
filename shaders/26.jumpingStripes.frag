/* Main function, uniforms & utils */
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float time(float x) {
  return 4. + 4. * smoothstep(0., 0.7, sin(x + u_time));
}

float f1(float x, float split) {
  float y = floor(x);
  return mod(y, split);
}

float f2(float x, float split) {
  return f1(x, split) + abs(floor(2. * sin(2. * abs(sin(u_time)) + floor(x))));
}

// See:
// https://graphtoy.com/?f1(x,t)=mod(floor(x),2)&v1=true&f2(x,t)=f1(x)+abs(floor(sin(2*sin(t)+floor(x))))&v2=true&f3(x,t)=&v3=true&f4(x,t)=&v4=true&f5(x,t)=&v5=true&f6(x,t)=&v6=true&grid=true&coords=0,0,5.56966422588754

vec3 fn(vec2 st, vec3 color, vec3 bg) {
  float x = f2(st.x, 2.);

  if(st.y < .25) {
    return color;
  } else if(st.y < .5) {
    return x <= 1. ? bg : color;
  } else {
    return bg;
  }
}

void main() {
  vec2 coord = gl_FragCoord.xy;
  vec2 st = gl_FragCoord.xy / u_resolution;

  float size = 100.;

  vec2 _st = vec2(coord.x / size, st.y);

  vec3 color = vec3(0.5, 0.7, .9);
  vec3 bg = vec3(0., 0., .3);

  color = fn(_st, color, bg);

  gl_FragColor = vec4(color, 1.0);
}

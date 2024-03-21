uniform float uTime;
uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;

void main() {

    vec3 normal = normalize(vNormal);
    if(!gl_FrontFacing)
        normal *= -1.0;

    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresner = dot(viewDirection,normal) +1.0;
    fresner = pow(fresner,2.0);

    float stripes = mod((vPosition.y-uTime*0.05)*15.0,1.0);
    stripes = pow(stripes,5.0);

    float falloff = smoothstep(0.8,0.0,fresner);

    float holographic = stripes * fresner;
    holographic +=fresner *1.25;
    holographic *= falloff;


    gl_FragColor = vec4(uColor,holographic);
    
}
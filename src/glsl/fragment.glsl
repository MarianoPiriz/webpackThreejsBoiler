varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform sampler2D uTexture3;

void main() {

    vec3 img1 = texture2D(uTexture1, vUv).xyz;
    vec3 img2 = texture2D(uTexture2, vUv).xyz;
    vec3 img3 = texture2D(uTexture3, vUv).xyz;

    gl_FragColor = vec4(img1 * img2 * img3, 1);
    //gl_FragColor = vec4(vPosition, 1);

}

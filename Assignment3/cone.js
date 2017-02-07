var gl = null;
var cone = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );
	cone = new Cone( 30 );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 0.0, 1.0 );

    //render();
	cone.render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
}

window.onload = init;
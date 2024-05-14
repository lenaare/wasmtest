// SETTINGS
const WASM_PATH = "/compiled/wasm32-unknown-unknown/release/rustsrc.wasm"

fetch(WASM_PATH)
.then(res => WebAssembly.instantiateStreaming(res, {}))
.then(imported => main(imported.instance.exports))

function main(lib){
    console.log(lib.add(41, 1));
}
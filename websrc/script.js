// SETTINGS
const WASM_PATH = "/compiled/wasm32-unknown-unknown/release/rustsrc.wasm"


const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

function main(){
    WebAssembly.instantiateStreaming(fetch(WASM_PATH), importObject).then(
        (results) => {
          console.log(results.instance.exports.add_one(41));
        },
      );
}

main();
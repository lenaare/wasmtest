# Usage

Compile via
```sh
cd rustsrc; wasm-pack build --target web --target-dir ../websrc/compiled
```

Run via 
```sh
cd websrc; python -m http.server 4444
```
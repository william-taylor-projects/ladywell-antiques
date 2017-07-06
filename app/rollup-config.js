
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import alias from 'rollup-plugin-alias';
import rollup from 'rollup';

export default {
    entry: 'app/boot.js',
    dest: 'app.min.js',
    sourceMap: false,
    format: "umd",
    plugins: [
        nodeResolve({ jsnext:true, module: true }),
        commonjs({include: "node_modules/rxjs/**"}),
        uglify()
    ]
}
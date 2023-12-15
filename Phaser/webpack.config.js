// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.ts', // Ruta de tu archivo de entrada TypeScript
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida JavaScript
    path: path.resolve(__dirname, 'public/dist'), // Ruta de salida del archivo
    publicPath: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Aplicar regla a archivos TypeScript
        use: 'ts-loader', // Utilizar ts-loader para cargar archivos TypeScript
        exclude: /node_modules/, // Excluir la carpeta node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Permitir la importación de archivos .ts y .js sin extensiones
  },
};

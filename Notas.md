# Estructura de un proyecto Angular

* `.angular-cli.json`: configuración del CLI angular. Estilos, scripts, bootstrap, etc.
* `.editorconfig`: configuraciones del editor.
* `karma.conf.js`: pruebas unitarias.
* `package.json`: dependencias, recuperar el proyecto, dependencias de desarrollo, etc.
  * `--save-dev`: guardar dependencia de desarrollo.
  * `--save`: dependencia producción.
* `protractor.conf.js`: realizar pruebas.
* `tsconfig.json`: archivo configuración typescript. Ajustes de compilación.
* `tslint.json`: errores en el editor.

## SRC

* `src/app/app.component.ts`: componente por defecto.
* `src/app/app.component.spec.ts`: pruebas sobre el componente.
* `src/app/app.module.ts`: librerías.
  * servicios, declaraciones, imports, ...
* `src/app/app.component.css`: estilos en el componente por defecto.
* `stc/app/app.component.html`: código HTML mostrado por el componente.
* `src/assets`: ficheros
* `src/environments`: entornos de desarrollo y producción.
* `main.ts`: para correr en distintos dispositivos como página web o aplicación.
* Módulos de node: librerías necesarias para el proyecto.

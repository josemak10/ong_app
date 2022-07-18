El sistema esta generado en React v18 Vite, esta versión fue seleccionada por tener una mejor carga a nivel de módulos, haciendo que sea rápido para el desarrollo. Adicionalmente, instala lo básico y se puede ir configurando las características que requiere el sistema.

Para que funcione el sistema, se debe realizar los siguientes pasos:

1. Una vez descargado el programa, se debe instalar las dependencias
   npm install

2. Arrancar el sistema
   npm run dev

3. Para ejecutar los test
   npm run test

La estructura del sistema es la siguiente dentro de la carpeta src:

1. Assets
   Se almacena las imagenes e iconos
2. Components
   Son los componentes que fueron utilizados
3. Context
   Se usa el dispatch de useReducer, funcionamiento similar a Redux
4. Css
   Hojas de estilos
5. Test
   Se almacenan los test unitarios
6. Types
   Se almacenan los catalogos que requiere el sistema

La carpeta docs tiene el programa para produccion, se subio al repositorio para utilizar GitHub Pages

El sistema funciona de la siguiente manera para realizar las búsquedas de las recetas:

1. En el casillero de busqueda, se puede tipear 'all', 'active', 'inactive' y el sistema filtrará.
2. Pulsando el botón el sistema realizará el filtro.
3. Al momento de indicar el filtro, el sistema realiza un dispatch() y ejecuta un proceso de filtrado de acuerdo a la selección.

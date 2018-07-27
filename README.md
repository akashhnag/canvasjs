# CanvasJs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


###Including canvasjs in angular project
1) either npm install canvasjs or download canvasjs package from website
2) Import the file. If intalled using npm it should be as folows:
   
   e.g.import * as CanvasJS from "canvasjs/dist/canvasjs.min.js";
   
   else give the path of the canvasjs downloaded package as folows:
   
   e.g. import * as CanvasJS from "../../assets/canvasjs/canvasjs.min.js";

Note: Its a good practice to keep your external files be it javascript or css or any other file in "assets" folder provided in angular project   

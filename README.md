
# Try it on GitHUB: https://payne.github.io/upload2/upload-table

## Notes

After Angular-University.io helped me with basics of angular material table, I wanted to get editing of the table working.
So, I studied this random google result: https://stackblitz.com/edit/angular-custom-pagination-mat-table?file=src%2Fmain.ts and got 
a version of it working here.  Joy! 

In the upload table component there's a simple array of objects (`uploadsData`) that gets turned into a table where
1. The whole table is a build by looping over VOForm  
2. The VOForm holds a `formBuilder.group` that is one  
    1. `formBuilder.array` and each row of the array is 
        1. `formBuilder.group` and that group is a row -- with each column in the row being a `FormControl`   


Does it need to be so complicated?  :thinking:

## TODO 

1. Implement an edit (pencil) icon button and save button for each row like the example above
1. Figure out how to change the column widths
2. Connect it to a backend

# Upload2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

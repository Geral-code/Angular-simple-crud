import { Component } from '@angular/core';
import { Employee } from './models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeArray: Employee[] = [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Angelica", country: "USA"},
    {id: 1, name: "Joe", country: "USA"}
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit() {

    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1 //genereamos nuevo id 
      this.employeeArray.push(this.selectedEmployee); //para que el nuevo employee se agregue al final de todo del arreglo, el empleado que estoy llenando (selected) se guarda dentro del arreglo

    }


    this.selectedEmployee = new Employee(); //cuando agregamos uno nuevo new employee queda vacio
}
  
  }

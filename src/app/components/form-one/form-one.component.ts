import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-one',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.scss',
})
export class FormOneComponent {
  form: FormGroup;

  nacionalidades = ['Argentino/a', 'Brasilero/a', 'Otra'];
  estadoCivil = [
    'Soltero/a',
    'Casado/a',
    'Viudo/a',
    'Divorciado/a',
    'Separado/a',
    'Unión de hecho',
    'Unión civil',
  ];
  ocupacion = [
    'Empleado/a en relación de dependencia',
    'Trabajador/a independiente',
    'Empresario/a / Comerciante',
    'Profesional',
    'Obrero/a / Personal de oficios',
    'Docente',
    'Personal de seguridad / fuerzas armadas',
    'Personal de salud',
    'Jubilado/a / Pensionado/a',
    'Estudiante',
    'Desocupado/a',
    'Ama de casa / Tareas del hogar',
    'Otro (especificar)',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      apellido: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(2)]],
      cuil: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      nationalidad: ['', Validators.required],
      nationalidadOtras: [''],
      localidad: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      ocupacion: ['', Validators.required],
      ocupacionOtras: [''],
      domicilio: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      observaciones: [''],
      fechaCarga: ['', Validators.required],
    });
  }

  clear(): void {
    this.form.reset();
  }
}

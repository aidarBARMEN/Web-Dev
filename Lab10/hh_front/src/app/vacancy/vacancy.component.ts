import { Component, OnInit } from '@angular/core';
import { VacancyService } from "../vacancy.service";
import {Vacancy} from "../models";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule} from "@angular/router";
@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  vacancies!: Vacancy[];
  newVacancy: Vacancy;
  loaded: boolean = false;

  constructor(private vacancyService: VacancyService) {
    this.newVacancy = {
      id: 11,
      name: '',
      description: '',
      company_id: 1,
      salary: 10000
    }
  }

  ngOnInit(){
    this.getVacancies();
  }

  addVacancy() {
    this.vacancyService.createVacancy(this.newVacancy).subscribe((vacancy) => {
      this.vacancies.unshift(vacancy);
      alert('Vacancy created');
      this.newVacancy = {} as Vacancy;
    });
  }

  getVacancies() {
    this.loaded = false;
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }

  deleteVacancy(id: number) {
    this.vacancies = this.vacancies.filter((p) => p.id !== id);
    this.vacancyService.deleteVacancy(id).subscribe(() => {
      console.log('deleted');
    });
  }

}

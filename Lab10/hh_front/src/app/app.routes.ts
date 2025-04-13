import { Routes } from '@angular/router';
import { CompanyComponent } from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";

export const routes: Routes = [
  {path: 'companies', component: CompanyComponent, title: 'Companies page'},
  {path: 'vacancies', component: VacancyComponent, title: 'Vacancies page'}

];

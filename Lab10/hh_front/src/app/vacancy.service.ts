import { Injectable } from '@angular/core';
import {Vacancy} from "./models";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URL: string = 'http://localhost:8000/api'
  constructor(private client: HttpClient) {
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}`);
  }

  createVacancy(newVacancy: Vacancy): Observable<Vacancy> {
    return this.client.post<Vacancy>(`${this.BASE_URL}/vacancies`, newVacancy);
  }

  deleteVacancy(id: number) {
    return this.client.delete(`${this.BASE_URL}/vacancies/${id}`)
  }


}

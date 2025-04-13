import { Injectable } from '@angular/core';
import { Company } from './models';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL: string = 'http://localhost:8000/api'

  constructor(private client: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.BASE_URL}/companies/${id}`);
  }

  createCompany(newCompany: Company): Observable<Company> {
    return this.client.post<Company>(`${this.BASE_URL}/companies`, newCompany);
  }

  deleteCompany(id: number) {
    return this.client.delete(`${this.BASE_URL}/companies/${id}`)
  }


}

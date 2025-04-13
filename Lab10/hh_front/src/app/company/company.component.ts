import { Component, OnInit } from '@angular/core';
import { Company } from "../models";
import { CompanyService } from "../company.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  companies!: Company[];
  newCompany: Company;
  loaded: boolean = false;

  constructor(private companyService: CompanyService) {
    this.newCompany = {
      id: 11,
      name: '',
      description: '',
      city: '',
      address: ''
    }
  }

  ngOnInit(){
    this.getCompanies();
  }

  addCompany() {
    this.companyService.createCompany(this.newCompany).subscribe((company) => {
      this.companies.unshift(company);
      alert('Company created');
      this.newCompany = {} as Company;
    });
  }

  getCompanies() {
    this.loaded = false;
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    });
  }

  deleteCompany(id: number) {
    this.companies = this.companies.filter((p) => p.id !== id);
    this.companyService.deleteCompany(id).subscribe(() => {
      console.log('deleted');
    });
  }

}

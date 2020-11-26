import { Injectable } from '@angular/core';
import {CompanyModel} from '../../Models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private companies: CompanyModel[] = [
    {
      id: 1,
      name: 'Name1',
      description: 'description1'
    },
    {
      id: 2,
      name: 'Name2',
      description: 'description2'
    },
    {
      id:3,
      name: 'Name3',
      description: 'description3'
    },
    {
      id: 4,
      name: 'Name4',
      description: 'description4'
    },
  ];

  constructor() { }

  getCompanies(): CompanyModel[] {
    return this.companies;
  }

}

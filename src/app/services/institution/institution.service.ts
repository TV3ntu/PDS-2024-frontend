import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Institution } from 'src/app/models/institution';
import { institutions } from 'src/app/mocks/mocks';
@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  institutions: Institution[]

  constructor() {
    this.institutions = institutions
  }

  getById = (id:string):Observable<Institution | undefined> => of(this.institutions.find(c => c.id == id))

  getAll = ():Observable<Institution[]> => of(this.institutions)

}

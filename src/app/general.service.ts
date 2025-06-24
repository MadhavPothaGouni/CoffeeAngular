import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit} from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService{
  private MachineHealthUrl = 'https://ccdev.scanomat.com/rest/dashboard/healthkpi?groupid=-1';
  private tokenid ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290IiwianRpIjoiNTk0ZTU5N2FmYTRmOGMwMDAxMDJjMzg4IiwiYXV0aCI6IkFETUlOLEFQSV9BQ0NFU1MsQlVTSU5FU1NfTU9ERUwsQ0xJRU5ULENPRkZFRV9BU19BX1NFUlZJQ0VfQVVTVFJBTElBLENPRkZFRV9BU19BX1NFUlZJQ0VfREssQ09GRkVFX0FTX0FfU0VSVklDRV9LVVdBSVQsQ09GRkVFX0VYVEVSTkFMLEdFTkVSQUwsSU5TSUdIVFNfREFUQSxTQ0FOT01BVF9BRE1JTixTQ1RfREVWLFNVUEVSLVVTRVIsVEVDSE5JQ0FMLFRFU1RJTkcsVU5BU1NJR05FRF9BQ0NFU1MsVVNFUiIsImV4cCI6MTc1MDg0NTA0NH0.ScaYYpy8uuF9qgD4AOasWhYrwsVfuKxvEKQGbxXnAwI'
  constructor(private http: HttpClient) {}

  machineHealth(status: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.tokenid
    });                                   
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'; 
import { Employee } from './employee-list/employee.model';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }
  public ApiURL: any = environment.BASE_URL;



  getEmployeeList() {
    return this.http.get(this.ApiURL + '/WeatherForecast/GetEmployee')
    .pipe(map((res: Employee) => {
      return res;
    }));
  }

  postMethod(data: any) {
    return this.http.post(this.ApiURL + '/WeatherForecast/saveEmployee', data);
  }

  getById(id: number) {
    return this.http.get(this.ApiURL + '/WeatherForecast/GetEmployeechanges/' + id)
    .pipe(map((res: Employee) => {
      return res;
    }));
}

putMethod(data: any) {
  return this.http.put(this.ApiURL + '/WeatherForecast/PutEmployee', data);
}
deleteList(id :number ){
    return this.http.delete(this.ApiURL +'/WeatherForecast/DeleteEmployee/' + id);
  }

regpostMethod(data: any){
  return this.http.post(this.ApiURL + '/WeatherForecast/PostRegister', data);
}
getLogin(username: string, password: string) {
  return this.http.get(this.ApiURL + '/WeatherForecast/GetRegister/' + username + '/' +  password)
  .pipe(map((res: any) => {
    return res;
  }));
}

  
}

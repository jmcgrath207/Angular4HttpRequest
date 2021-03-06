
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const header = new Headers({'Content-Type': 'application/json'});
/*    return this.http.post('https://angular4httprequest-c752d.firebaseio.com/data.json',
      servers, {headers: header});*/
    return this.http.put('https://angular4httprequest-c752d.firebaseio.com/data.json',
      servers, {headers: header});
  }

  getServers() {
    // map takes a obserable process the data and once finish rewraps the data into a observable
    return this.http.get('https://angular4httprequest-c752d.firebaseio.com/data.json').map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
    ).catch((error: Response) => {
      return Observable.throw('Something went wrong');
    });
  }

  getAppName() {
    return this.http.get('https://angular4httprequest-c752d.firebaseio.com/appName.json').map(
      (response: Response) => {
        return response.json();
      }
    );
  }

}

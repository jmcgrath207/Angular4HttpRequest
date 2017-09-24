
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

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
    return this.http.get('https://angular4httprequest-c752d.firebaseio.com/data.json');
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler
}
  from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Conteny-Type': 'application/json' })
};

@Injectable()
export class HttpprotocolService {

  public serveraddress: String = "";
  public useoffline: Boolean = false;
  private _sessionID: String = "";
  private _user: String = "";

  constructor(private http: HttpClient) { }
  // NOTE: all API calls in this file use simple endpoints served by
  //a common file that will handle all requests and response will be used
  //all files in this project


  /**
		 * Registers a boolean to indicate where to pull data from.  If true, then
		 * use a formed path to a dummy data directory.
		 * @param useoffline Numeric 0 - online, 1-offline
       */
  public registerOffline(isOffline: Boolean): void {
    this.useoffline = isOffline;
  }
  /**
   *  Registers the session id for all future xmit transactions.
   * @param sid Session ID returned by the server when logging in
   *
   */
  public registerSessionID(sid: String): void {
    this._sessionID = sid;
  }

  /**
   * Register the username token that is sent with each request
   * to uniquely identify this user.
   * Format is username@domain@ldap if user logged using ldap or
   * username@domain@ if they did not.
   * If they did not use a domain or ldap then username@@
   * */
  public registerUser(user: String): void {
    this._user = user;
  }

  public getUser(): String {
    return this._user;
  }

  /**
    * Gets the session ID for components that may need it for upload/download
  */
  public getSessionID(): String {
    return this._sessionID;
  }

  /**
   * Registers the address for the data server. Normally this is blank,
   * which will pull data from the local system.  Otherwise, get the IP
   * address of the server (usually from a settings file) to precede the
   * filename in any getData call.
   * param serveradd The address of the server.  When using getData, the
   * code will place server addreess plus the
   * filename/path after it.
  */
  public registerDataServer(serveradd: String): void {
    this.serveraddress = serveradd;
  }

  private getDataPath(filename: string):String {

    var relativepath: String = ".";
    var arrd: String = filename;
    // var arrd: String = relativepath + filename;
    this.useoffline = true;

    if (this.useoffline) {
      var urltokens: String = "";
      var urltok: number = filename.indexOf("?");
      if (urltok > 1) {
        urltokens = filename.substr(urltok);
        filename = filename.substr(0, urltok);
      }
      // Create path to actual dummy data file ... might need to alter this in future to
      // account for additional variables passed. ie append var to
      // filename, etc.
      // arrd = "./assets/offlinedata/" + filename + "/data.json" + urltokens;
      arrd = "./assets/offlinedata/"+filename+"/data.json";
      console.log("http-offline-path == ", arrd);
    }
    else {
      if (this.serveraddress != "") {
        arrd = this.serveraddress + filename;
        console.log("http-online-path == ", arrd);
      }
    }
    return arrd;
  }//end of getData


  // Uses http.get() to load data from a single API endpoint
  public getData<T>(url: string): Observable<T> {
    let path:any = this.getDataPath(url);
    return this.http.get<T>(path);
  }

  // send a POST request to the API to create a new data object
  public postData<T>(setData: any, url: string): Observable<T> {
    let path:any = this.getDataPath(url);
    let body = JSON.stringify(setData);
    return this.http.post<T>(path, body, httpOptions);
  }

  // send a PUT request to the API to update a data object
  public putData(url: string, setData: any) {
    let path:any = this.getDataPath(url);
    let body = JSON.stringify(setData);
    return this.http.put(path + setData, body, httpOptions);
  }

  // send a DELETE request to the API to delete a data object
  public deleteData<T>(url: string, setData: any): Observable<T> {
    let path:any = this.getDataPath(url);
    let body = JSON.stringify(setData);
    return this.http.delete<T>(path + body);
  }

}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log("HTTP-ProtocolService Headers == ", JSON.stringify(req.headers));
    return next.handle(req);
  }
}
//examples to use above methods
/* 
export class AppComponent {

  public foods;
  public books;
  public movies;

  public food_name;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getFoods();
    this.getBooksAndMovies();
  }

  getFoods() {
    this._demoService.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { this.foods = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

  getBooksAndMovies() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }

  createFood(name) {
    let food = {name: name};
    this._demoService.createFood(food).subscribe(
       data => {
         // refresh the list 
         this.getFoods();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

  updateFood(food) {
    this._demoService.updateFood(food).subscribe(
       data => {
         // refresh the list
         this.getFoods();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

  deleteFood(food) {
    if (confirm("Are you sure you want to delete " + food.name + "?")) {
      this._demoService.deleteFood(food).subscribe(
         data => {
           // refresh the list
           this.getFoods();
           return true;
         },
         error => {
           console.error("Error deleting food!");
           return Observable.throw(error);
         }
      );
    }
  }
}
 */
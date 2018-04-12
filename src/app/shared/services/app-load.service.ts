import { Injectable, APP_INITIALIZER } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpprotocolService } from './httpprotocol.service';
import { XmsutilsService } from './xmsutils.service';
import { XmsconstantsService } from './xmsconstants.service';

@Injectable()
export class AppLoadService {

  constructor(private _http: HttpprotocolService,private utils:XmsutilsService,
  private xmsconst:XmsconstantsService) { }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp:: inside promise`);

      setTimeout(() => {
        console.log(`initializeApp:: inside setTimeout`);
        // doing something

        resolve();
      }, 3000);
    });
  }

  getInfoCall() {
    this._http.getData("info")
      .subscribe((data: any[]) => {
        // this.resp = data,
        console.log("this.resp == ", data["response"]);
        console.log ("response.cc == ",Number(data["response"].cc));
        var cc:number = Number(data["response"].cc);
        console.log("XMSError.checkResponseOK(cc,base) == ",this.utils.foo);
        console.log("XMSConstants.DEVTYPE_XMSSTARTUP == ",this.xmsconst.XMIT_DATABASE_ERROR);
        /* if(XMSError.checkResponseOK(cc,"base")){
          console.log("**************SUCCESS********** ");
        } */
      },
        error => () => {
          console.log("app-load :: error occured");
        },
        () => {
          console.log("app-load :: info call completed");
        });
  }
}//end of app-load service
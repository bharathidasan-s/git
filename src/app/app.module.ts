import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { HttpprotocolService } from './shared/services/httpprotocol.service';
import { MaterialModule } from './material.module';//used to import angular material
//service import
import { SidebarService } from './shared/services/sidebar.service';
import { AppLoadService } from './shared/services/app-load.service';
import { XmsutilsService } from './shared/services/xmsutils.service';
import { XmsconstantsService } from './shared/services/xmsconstants.service';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function get_info(_appService:AppLoadService) {
    return () => _appService.getInfoCall();
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,HttpprotocolService,SidebarService,
        XmsutilsService,XmsconstantsService,
        AppLoadService,
        {provide:APP_INITIALIZER, useFactory:get_info, deps:[AppLoadService], multi:true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
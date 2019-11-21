import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterAzureServicesSharedModule } from 'app/shared/shared.module';
import { JhipsterAzureServicesCoreModule } from 'app/core/core.module';
import { JhipsterAzureServicesAppRoutingModule } from './app-routing.module';
import { JhipsterAzureServicesHomeModule } from './home/home.module';
import { JhipsterAzureServicesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterAzureServicesSharedModule,
    JhipsterAzureServicesCoreModule,
    JhipsterAzureServicesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterAzureServicesEntityModule,
    JhipsterAzureServicesAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhipsterAzureServicesAppModule {}

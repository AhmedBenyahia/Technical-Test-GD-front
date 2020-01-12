import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestSidenavComponent } from './test-sidenav/test-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule, MatMenuModule, MatTabsModule} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import { SynonymAttributeComponent } from './synonym-attribute/synonym-attribute.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddSynonymeComponent } from './add-synonyme/add-synonyme.component';
import {ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: 'synonym-attribute', component: SynonymAttributeComponent },
  { path: 'synonym-add', component: AddSynonymeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestSidenavComponent,
    SynonymAttributeComponent,
    AddSynonymeComponent
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    MatTreeModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot( appRoutes ),
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

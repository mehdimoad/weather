import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { DonneeService } from './services/donnee.service'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AffichageComponent } from './components/affichage/affichage.component';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
  ],
  providers: [DonneeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

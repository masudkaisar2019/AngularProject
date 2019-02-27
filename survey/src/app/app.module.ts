import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSurveyComponent } from './main-survey/main-survey.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { OptionsComponent } from './options/options.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSurveyComponent,
    SurveyQuestionComponent,
    OptionsComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

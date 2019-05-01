import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { CssVarsModule } from 'ngx-css-variables';

import { AppComponent } from './app.component';
import { StyledDotsComponent } from './styled-dots/styled-dots.component';
import { DotsComponent } from './dots/dots.component';
import { ViewDotsComponent } from './view-dots/view-dots.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { ViewCircularWipeComponent } from './view-circular-wipe/view-circular-wipe.component';
import { CircularWipeComponent } from './circular-wipe/circular-wipe.component';
import { StaggerComponent } from './stagger/stagger.component';
import { ViewStaggerComponent } from './view-stagger/view-stagger.component';
import { ViewEnterLeaveComponent } from './view-enter-leave/view-enter-leave.component';
import { ViewQueryComponent } from './view-query/view-query.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { CssVariablesComponent } from './css-variables/css-variables.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TemplateRefTlistComponent } from './template-ref-tlist/template-ref-tlist.component';
import { ChatScrollComponent } from './chat-scroll/chat-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    StyledDotsComponent,
    DotsComponent,
    ViewDotsComponent,
    ViewCircularWipeComponent,
    CircularWipeComponent,
    StaggerComponent,
    ViewStaggerComponent,
    ViewEnterLeaveComponent,
    ViewQueryComponent,
    ViewGroupComponent,
    CssVariablesComponent,
    TemplateRefComponent,
    TemplateRefTlistComponent,
    ChatScrollComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    CssVarsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

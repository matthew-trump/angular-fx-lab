import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDotsComponent } from './view-dots/view-dots.component';
import { ViewCircularWipeComponent } from './view-circular-wipe/view-circular-wipe.component';
import { ViewStaggerComponent } from './view-stagger/view-stagger.component';
import { ViewQueryComponent } from './view-query/view-query.component';
import { ViewEnterLeaveComponent } from './view-enter-leave/view-enter-leave.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { CssVariablesComponent } from './css-variables/css-variables.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { ChatScrollComponent } from './chat-scroll/chat-scroll.component';

const routes: Routes = [
    { path: 'dots', pathMatch: 'full', component: ViewDotsComponent },
    { path: 'circular-wipe', pathMatch: 'full', component: ViewCircularWipeComponent },
    { path: 'enter-leave', pathMatch: 'full', component: ViewEnterLeaveComponent },
    { path: 'stagger', pathMatch: 'full', component: ViewStaggerComponent },
    { path: 'query', pathMatch: 'full', component: ViewQueryComponent },
    { path: 'group', pathMatch: 'full', component: ViewGroupComponent },
    { path: 'css-variables', pathMatch: 'full', component: CssVariablesComponent },
    { path: 'template-ref', pathMatch: 'full', component: TemplateRefComponent },
    { path: 'chat-scroll', pathMatch: 'full', component: ChatScrollComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

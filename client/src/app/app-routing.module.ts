import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MembersDetailComponent } from './members/members-detail/members-detail.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { AuthGuard } from './_guards/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { MembersEditComponent } from './members/members-edit/members-edit.component';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'lists' , component: ListsComponent},
      {path: 'members' , component: MembersListComponent},
      {path: 'member/edit' , component: MembersEditComponent , canDeactivate: [PreventUnsavedChangesGuard]},
      {path: 'members/:username' , component: MembersDetailComponent},
      {path: 'messages' , component: MessagesComponent},
    ]
  },
  {path: 'errors' , component: TestErrorsComponent},
  {path: 'not-found' , component: NotFoundComponent},
  {path: 'server-error' , component: ServerErrorComponent},
  {path: 'about-us' , component: AboutUsComponent},
  {path: '**' , component: NotFoundComponent , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

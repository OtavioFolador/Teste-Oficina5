import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'user', component: UserComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

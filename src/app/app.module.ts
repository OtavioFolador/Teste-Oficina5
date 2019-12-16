import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserComponent,
    CommentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent] 
})
export class AppModule { }

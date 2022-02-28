import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from './postData.model';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css'],
})
export class BlogpostsComponent implements OnInit {
  loadedPosts: PostData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPostsFromFirebase();
  }

  onCreatePost(postData: PostData, postForm: NgForm) {
    this.http
      .post(
        'https://test-users-project-a3d6d-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
        postForm.reset();
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    this.fetchPostsFromFirebase();
  }

  onClearPosts() {
    this.http
      .delete(
        'https://test-users-project-a3d6d-default-rtdb.firebaseio.com/posts.json'
      )
      .subscribe(() => {
        this.loadedPosts = [];
      });
  }

  private fetchPostsFromFirebase() {
    this.http
      .get<{ [key: string]: PostData }>(
        'https://test-users-project-a3d6d-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postArray: PostData[] = [];
          for (const key in responseData) {
            postArray.push({ ...responseData[key], id: key });
          }
          return postArray;
        })
      )
      .subscribe((posts) => {
        this.loadedPosts = posts;
      });
  }
}

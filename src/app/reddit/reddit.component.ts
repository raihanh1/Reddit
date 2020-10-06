import { Component, OnInit } from '@angular/core';
import { RedditDataService } from './../service/reddit-data.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss'],
})
export class RedditComponent implements OnInit {
  feeds;

  constructor(private redditDataService: RedditDataService) {}

  ngOnInit(): void {
    this.redditDataService.getRedditData().subscribe((data) => {
      console.log('data', data['data'].children);
      this.feeds = data['data'].children.slice(0, 10);
    });
  }
}

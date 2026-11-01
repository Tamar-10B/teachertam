import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  templateUrl: './page.html'
})
export class Page {

  private route = inject(ActivatedRoute);

  title = this.route.snapshot.data['title'];
}
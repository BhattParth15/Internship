import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  //  required if you're bootstrapping it directly
  imports: [RouterModule],  // needed for router-outlet to work
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-app-name';
}


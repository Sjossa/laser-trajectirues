import { Component } from '@angular/core';
import { TrajectoireViewerComponent } from './pages/trajectoire-viewer/trajectoire-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [TrajectoireViewerComponent],
})
export class AppComponent {
  title = 'laser-trajectirues';
}

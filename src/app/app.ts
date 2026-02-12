import { Component, signal } from '@angular/core';
import { TrajectoireViewerComponent } from './page/trajectoire-viewver/trajectoireView.Component';

@Component({
  selector: 'app-root',

  imports: [TrajectoireViewerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('laser-trajectories');
}

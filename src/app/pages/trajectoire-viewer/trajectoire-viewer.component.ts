import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Trajectoire, TrajectoireData } from '../../model/trajectoire.model';
import { TrajectoireService } from '../../service/trajectoire.service';

@Component({
  selector: 'app-trajectoire-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trajectoire-viewer.component.html',
  styleUrls: ['./trajectoire-viewer.component.css'],
})
export class TrajectoireViewerComponent implements OnInit {
  trajectoireData: TrajectoireData | null = null;
  selectedTrajectoire: Trajectoire | null = null;
  hoveredTrajectoire: Trajectoire | null = null;

  constructor(private trajectoireService: TrajectoireService) {}

  ngOnInit(): void {
    this.loadTrajectories();
  }

  /**
   * Charge les données des trajectoires
   */
  loadTrajectories(): void {
    this.trajectoireService.getTrajectoire().subscribe({
      next: (data) => {
        this.trajectoireData = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des trajectoires:', error);
      },
    });
  }

  /**
   * Calcule l'opacité en fonction de la puissance (40-100%)
   */
  getOpacity(power: number): number {
    return power / 100;
  }

  /**
   * Calcule l'épaisseur du trait
   */
  getStrokeWidth(power: number): number {
    return 1.5 + (power / 100) * 2.5;
  }

  onTrajectoireHover(trajectoire: Trajectoire | null): void {
    this.hoveredTrajectoire = trajectoire;
  }

  /**
   * Gère la sélection d'une trajectoire
   */
  onTrajectoireClick(trajectoire: Trajectoire): void {
    this.selectedTrajectoire = this.selectedTrajectoire?.id === trajectoire.id ? null : trajectoire;
  }

  /**
   * Vérifie si une trajectoire est actuellement sélectionnée
   */
  isSelected(trajectoire: Trajectoire): boolean {
    return this.selectedTrajectoire?.id === trajectoire.id;
  }

  /**
   * Vérifie si une trajectoire est survolée
   */
  isHovered(trajectoire: Trajectoire): boolean {
    return this.hoveredTrajectoire?.id === trajectoire.id;
  }

  /**
   * Obtient une classe CSS basée sur l'état de la trajectoire
   */
  getTrajectoireClass(trajectoire: Trajectoire): string {
    const classes = ['trajectoire'];
    if (this.isSelected(trajectoire)) {
      classes.push('selected');
    }
    if (this.isHovered(trajectoire)) {
      classes.push('hovered');
    }
    return classes.join(' ');
  }
}

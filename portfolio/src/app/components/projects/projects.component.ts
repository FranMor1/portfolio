import { Component, OnInit, inject } from '@angular/core';
import { IProyects } from '../../interfaces/study.interface';
import { StoryService } from '../../services/studies.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-proyects',
  imports: [FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] // Cambiado a styleUrls
})
export class ProyectsComponent implements OnInit { // Implementa OnInit

  faGithub = faGithub;

  arrProyects: IProyects[] = [];

  storyService = inject(StoryService);

  async ngOnInit() {
    try {
      this.arrProyects = await this.storyService.getAllProyects();
    } catch (error) {
      console.log(error);
    }
  }

}
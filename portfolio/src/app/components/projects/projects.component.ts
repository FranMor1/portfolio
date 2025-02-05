import { Component, inject } from '@angular/core';
import { IProyects } from '../../interfaces/study.interface';
import { StoryService } from '../../services/studies.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-proyects',
  imports: [FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProyectsComponent {

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
import { Component } from '@angular/core';
import { GeneralService } from '../../../general.service';


@Component({
  selector: 'app-general',
  standalone: false,
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {
  HealthStatus = 'HEALTHY';
  constructor(private generalService: GeneralService){}
}

import { Component } from '@angular/core';
import { Billetera } from './billetera/billetera';

@Component({
  imports: [Billetera],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
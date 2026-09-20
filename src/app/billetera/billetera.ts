import { Component, inject } from '@angular/core';
import { BilleteraService } from '../services/billetera';

@Component({
  selector: 'app-billetera',
  styleUrl: './billetera.css',
  templateUrl: './billetera.html',
})
export class Billetera {
  private readonly billetera = inject(BilleteraService);

  protected readonly saldo = this.billetera.saldo;
  protected readonly movimientos = this.billetera.movimientos;
}
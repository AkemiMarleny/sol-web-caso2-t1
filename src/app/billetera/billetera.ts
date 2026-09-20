import { Component, inject } from '@angular/core';
import { BilleteraService } from '../services/billetera';
import { Movimiento } from '../models/movimiento';
import { NuevoMovimiento } from '../nuevo-movimiento/nuevo-movimiento';

@Component({
  imports: [NuevoMovimiento],
  selector: 'app-billetera',
  styleUrl: './billetera.css',
  templateUrl: './billetera.html',
})
export class Billetera {
  private readonly billetera = inject(BilleteraService);

  protected readonly saldo = this.billetera.saldo;
  protected readonly movimientos = this.billetera.movimientos;

  protected onNuevoMovimiento(movimiento: Movimiento): void {
    this.billetera.registrarMovimiento(movimiento.tipo, movimiento.monto);
  }
}
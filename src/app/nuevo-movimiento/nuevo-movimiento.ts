import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimiento, TipoMovimiento } from '../models/movimiento';

@Component({
  imports: [FormsModule],
  selector: 'app-nuevo-movimiento',
  styleUrl: './nuevo-movimiento.css',
  templateUrl: './nuevo-movimiento.html',
})
export class NuevoMovimiento {
  readonly saldo = input.required<number>();
  readonly nuevoMovimiento = output<Movimiento>();

  protected readonly tipo = signal<TipoMovimiento>('Recarga');
  protected readonly monto = signal(0);

  protected onTipoChange(valor: TipoMovimiento): void {
    this.tipo.set(valor);
  }

  protected onMontoChange(valor: string): void {
    this.monto.set(Number(valor));
  }

  protected registrar(): void {
    const movimiento: Movimiento = { tipo: this.tipo(), monto: this.monto(), fecha: new Date() };
    this.nuevoMovimiento.emit(movimiento);
  }
}

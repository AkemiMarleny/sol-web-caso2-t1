import { Injectable, signal } from '@angular/core';
import { Movimiento, TipoMovimiento } from '../models/movimiento';

@Injectable({ providedIn: 'root' })
export class BilleteraService {
  readonly saldo = signal(250.0);
  readonly movimientos = signal<Movimiento[]>([]);

  registrarMovimiento(tipo: TipoMovimiento, monto: number): boolean {
    if (!this.esMovimientoValido(tipo, monto)) {
      return false;
    }

    const movimiento: Movimiento = { tipo, monto, fecha: new Date() };
    this.saldo.set(this.saldoTras(tipo, monto));
    this.movimientos.set([movimiento, ...this.movimientos()]);
    return true;
  }

  private esMovimientoValido(tipo: TipoMovimiento, monto: number): boolean {
    if (monto <= 0) {
      return false;
    }
    if (tipo === 'Gasto' && monto > this.saldo()) {
      return false;
    }
    return true;
  }

  private saldoTras(tipo: TipoMovimiento, monto: number): number {
    if (tipo === 'Gasto') {
      return this.saldo() - monto;
    }
    return this.saldo() + monto;
  }
}
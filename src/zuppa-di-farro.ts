import { Zuppa } from './zuppa';

export class ZuppaDiFarro
    extends Zuppa {

    private farro = ['farro', 'farro', 'farro', 'farro'];

    preparaZuppa() {
        return this.farro.join(' ');
    }
    
}
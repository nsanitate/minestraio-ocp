import { Zuppa } from './zuppa';

export class ZuppaDiFagioli
    extends Zuppa {

    private fagioli = ['fagiolo', 'fagiolo', 'fagiolo'];

    preparaZuppa() {
        return this.fagioli.join(' ');
    }

}
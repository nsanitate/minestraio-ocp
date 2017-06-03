import { Zuppa } from './zuppa';

export class ZuppaDiCeci
    extends Zuppa {

    private ceci = ['cece', 'cece', 'cece', 'cece', 'cece'];

    preparaZuppa() {
        return this.ceci.join(' ');
    }

}
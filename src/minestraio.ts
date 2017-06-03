import { Zuppa } from './zuppa';
import { ZuppaDiCeci } from './zuppa-di-ceci';
import { ZuppaDiFagioli } from './zuppa-di-fagioli';

export class Minestraio {

    preparaZuppa(zuppa: Zuppa) {
        if (zuppa instanceof ZuppaDiCeci) {
            return this.preparaZuppaDiCeci(zuppa);
        } else if (zuppa instanceof ZuppaDiFagioli) {
            return this.preparaZuppaDiFagioli(zuppa);
        } else {
            throw 'Zuppa non implementata';
        }
    }

    private preparaZuppaDiCeci(zuppa: ZuppaDiCeci) {
        return zuppa.ceci.join(' ');
    }

    private preparaZuppaDiFagioli(zuppa: ZuppaDiFagioli) {
        return zuppa.fagioli.join(' ');
    }

}
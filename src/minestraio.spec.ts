import { expect } from 'chai';

import { Minestraio } from './minestraio';
import { ZuppaDiCeci } from './zuppa-di-ceci';
import { ZuppaDiFagioli } from './zuppa-di-fagioli';
import { ZuppaDiFarro } from './zuppa-di-farro';

describe('Minestraio', () => {
    
    let minestratio: Minestraio;

    beforeEach(() => {
        // Arrange
        minestratio = new Minestraio();
    });

    it('dovrebbe saper preparare una zuppa di ceci', () => {
        // Arrange
        const zuppa = new ZuppaDiCeci();

        // Act
        const actual = minestratio.preparaZuppa(zuppa);

        // Assert
        expect(actual).to.equal('cece cece cece cece cece');
    });

    it('dovrebbe saper preparare una zuppa di fagioli', () => {
        // Arrange
        const zuppa = new ZuppaDiFagioli();

        // Act
        const actual = minestratio.preparaZuppa(zuppa);

        // Assert
        expect(actual).to.equal('fagiolo fagiolo fagiolo');
    });

    it('dovrebbe saper preparare una zuppa di farro', () => {
        // Arrange
        const zuppa = new ZuppaDiFarro();

        // Act
        const actual = minestratio.preparaZuppa(zuppa);

        // Assert
        expect(actual).to.equal('farro farro farro farro');
    });

});
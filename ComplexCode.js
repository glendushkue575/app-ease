/* 
   Filename: ComplexCode.js
   Description: This JavaScript code demonstrates a complex and elaborate program that simulates a virtual ecosystem. 
*/

// Define the Ecosystem class
class Ecosystem {
  constructor(name, population) {
    this.name = name;
    this.population = population;
    this.species = {};
    this.time = 0;
  }

  addSpecies(species) {
    this.species[species.name] = species;
    this.species[species.name].ecosystem = this;
  }

  evolve() {
    this.time++;

    // Randomly remove extinct species
    Object.keys(this.species).forEach(speciesName => {
      if (Math.random() < this.species[speciesName].extinctionRate) {
        delete this.species[speciesName];
      }
    });

    // Randomly introduce new species
    Object.keys(this.species).forEach(speciesName => {
      if (Math.random() > this.species[speciesName].introductionRate) {
        this.species[speciesName].reproduce();
      }
    });

    // Update population size of each species
    Object.keys(this.species).forEach(speciesName => {
      this.species[speciesName].updatePopulation();
    });
  }
}

// Define the Species class
class Species {
  constructor(name, initialPopulation, reproductionRate, extinctionRate, introductionRate) {
    this.name = name;
    this.initialPopulation = initialPopulation;
    this.reproductionRate = reproductionRate;
    this.extinctionRate = extinctionRate;
    this.introductionRate = introductionRate;
    this.ecosystem = null;
    this.population = 0;
  }

  reproduce() {
    const newPopulation = Math.floor(this.population * this.reproductionRate);
    this.ecosystem.population += newPopulation;
    this.population += newPopulation;
  }

  updatePopulation() {
    this.population = Math.max(0, this.population - Math.floor(this.population * this.extinctionRate));
  }
}

// Create a new ecosystem
const ecosystem = new Ecosystem('Virtual Ecosystem', 1000);

// Create multiple species and add them to the ecosystem
const lion = new Species('Lion', 50, 1.2, 0.05, 0.03);
const gazelle = new Species('Gazelle', 100, 1.1, 0.03, 0.02);
const zebra = new Species('Zebra', 75, 1.15, 0.04, 0.02);

ecosystem.addSpecies(lion);
ecosystem.addSpecies(gazelle);
ecosystem.addSpecies(zebra);

// Simulate the ecosystem for 100 rounds
for (let i = 0; i < 100; i++) {
  ecosystem.evolve();
}

// Output the final state of the ecosystem
console.log(`Name: ${ecosystem.name}`);
console.log(`Population: ${ecosystem.population}`);
console.log(`Time: ${ecosystem.time}`);
console.log('--- Species ---');
Object.keys(ecosystem.species).forEach(speciesName => {
  const species = ecosystem.species[speciesName];
  console.log(`Name: ${species.name}`);
  console.log(`Population: ${species.population}`);
});

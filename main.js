// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//create a factory function that returns object with properties for specimenNum and dna
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // add the method .mutate() to random select a dna base from the object property dna and change it.
    mutate() {
      let randomIndex = Math.floor(Math.random() * dna.length);
      let mutatingBase = this.dna[randomIndex];
      if (mutatingBase === 'A') {
        let availBase = ['T', 'C', 'G'];
        this.dna[randomIndex] = availBase[Math.floor(Math.random() * availBase.length)]
      }
      if (mutatingBase === 'T') {
        let availBase = ['A', 'C', 'G'];
        this.dna[randomIndex] = availBase[Math.floor(Math.random() * availBase.length)]
      }
      if (mutatingBase === 'C') {
        let availBase = ['A', 'T', 'G'];
        this.dna[randomIndex] = availBase[Math.floor(Math.random() * availBase.length)]
      }
      if (mutatingBase === 'G') {
        let availBase = ['A', 'C', 'T'];
        this.dna[randomIndex] = availBase[Math.floor(Math.random() * availBase.length)]
      }
    },

    compareDNA(specimenCompare) {
      let matchedBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === specimenCompare.dna[i]) {
          matchedBases++;
        }
        }
          let sharedBasePercentage = Math.round((matchedBases /= 15) * 100);
          console.log(`${this.specimenNum} and ${specimenCompare.specimenNum} have ${sharedBasePercentage}% DNA in common.`)
        },

    willLikelySurvive() {
      let preferredBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          preferredBases++;
          // console.log(preferredBases);
        }
      }
      return ((preferredBases /= this.dna.length) >= .6) 
    },
  }
}

const pAequorSurvivors = [];
let id = 1;
while (pAequorSurvivors.length < 30) {
  let newSpec = pAequorFactory(id, mockUpStrand());
  if (newSpec.willLikelySurvive()) {
    pAequorSurvivors.push(newSpec)
  }
  id++;
}

// //factory test
//   console.log(pAequorFactory(1, mockUpStrand()));

// //mutation test
//   const aequorSpec = pAequorFactory(1, mockUpStrand());
//   console.log(aequorSpec);
//   aequorSpec.mutate();
//   console.log(aequorSpec);

// //compareDNA test
//   const aequorSpec1 = pAequorFactory(1, mockUpStrand());
//   const aequorSpec2 = pAequorFactory(2, mockUpStrand());
//   aequorSpec.compareDNA(aequorSpec2) 

// willLikelySurvive test
//  const aequorSpec3 = pAequorFactory(3, mockUpStrand());
//  console.log(aequorSpec3);
//  console.log(aequorSpec3.willLikelySurvive());

console.log(pAequorSurvivors);
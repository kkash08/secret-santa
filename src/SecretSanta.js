class SecretSanta {
 
    constructor(participants) {
    this.participants = participants;
    this.assignment   = new Map();
  }

  assignSecretSanta() {
    const shuffled = [...this.participants];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    for(let i = 0; i < shuffled.length-1; i++){
        const giver = shuffled[i];
        const receiver = shuffled[i+1];
        this.assignment.set(giver.email, receiver);
    }
    this.assignment.set(shuffled[shuffled.length-1].email, shuffled[0]);
  }
  
}



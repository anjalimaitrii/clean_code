// CH-2: Meaningful Name Clean Code Example

function isEligibleForVoting(age) {
  const legalVotingAge = 18;
  return age >= legalVotingAge;
}

let userAge = 16;
let canVote = isEligibleForVoting(userAge);
console.log(canVote);



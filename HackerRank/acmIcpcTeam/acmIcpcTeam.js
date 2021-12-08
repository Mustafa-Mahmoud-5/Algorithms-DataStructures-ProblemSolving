function acmTeam(topic) {
	let maxTopics = 0;
	let maxTeams = 0;
	let tl = topic.length;
	for (let i = 0; i < tl - 1; i++) {
		// attendee topics
		for (let j = i + 1; j < tl; j++) {
			// every attendee topics in front of the current one
			let maxSubj = 0;
			let teamTopics = topic[i].length;
			for (let k = 0; k < teamTopics; k++) {
				//looping over the topic itself(binary num) to see the subjects knowen
				let firstMember = topic[i][k];
				let secondMember = topic[j][k];

				if (+firstMember || +secondMember) {
					maxSubj++;
				}
			}

			if (maxSubj > maxTopics) {
				maxTopics = maxSubj;
				maxTeams = 1;
			} else if (maxSubj === maxTopics) maxTeams++;
		}
	}

	return [ maxTopics, maxTeams ];
}

const topics = [ '10101', '11100', '11010', '00101' ];
console.log(acmTeam(topics));
//maximum number of topics a 2-person team can know
//number of teams that know the maximum number of topics

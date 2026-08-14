const IMG = "assets/test-images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const pictureChoice = (id, prompt, pictures, answer, explanation) => ({ id, type: "pictureChoice", prompt, pictures, answers: [answer], explanation, points: 1 });
const labelledPictures = (prefix, labels) => labels.map((label) => ({ value: label, image: `${IMG}${prefix}-${label}.png` }));

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Listen carefully, then choose True or False.", points: 3, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["T", "F"], "F", "The statement does not match the information in the recording."),
    choice("A2", "2.", ["T", "F"], "T", "The statement matches the information in the recording."),
    choice("A3", "3.", ["T", "F"], "T", "The statement matches the information in the recording.")
  ]},
  { key: "B", label: "B", title: "Match the sentences to the pictures.", note: "The letters label the pictures only. Choose the picture that matches each sentence.", points: 3, questions: [
    pictureChoice("B1", "1. Saturn is a beautiful planet.", labelledPictures("b", ["a", "b", "c"]), "b", "Picture b shows Saturn and its rings."),
    pictureChoice("B2", "2. The Earth turns on its axis.", labelledPictures("b", ["a", "b", "c"]), "c", "Picture c shows the Earth rotating on its axis."),
    pictureChoice("B3", "3. There are different time zones.", labelledPictures("b", ["a", "b", "c"]), "a", "Picture a shows different time zones across a map.")
  ]},
  { key: "C", label: "C", title: "Unscramble the words and match.", note: "Write the correct word, then choose the matching definition label.", points: 6, wordBank: ["a. There are twelve of these in one year", "b. To be correct", "c. Planets do this around the sun"], questions: [
    { id: "C1", type: "paired", prompt: "1. O b t r i", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["orbit"], explanation: "Orbit is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Planets orbit the sun, so the matching definition is c." }
    ]},
    { id: "C2", type: "paired", prompt: "2. M h t n o", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["month"], explanation: "Month is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "There are twelve months in one year, so the matching definition is a." }
    ]},
    { id: "C3", type: "paired", prompt: "3. A c c a t e u r", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["accurate"], explanation: "Accurate is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Accurate means correct, so the matching definition is b." }
    ]}
  ]},
  { key: "D", label: "D", title: "Write the words in the correct order to make sentences.", note: "Use every word and add correct punctuation.", points: 4, questions: [
    input("D1", "1. start / my / weeks / school / new / in / three / I'll", ["I'll start my new school in three weeks", "I'll start my new school in three weeks."], "Place the subject and will first, followed by the verb, object, and time phrase."),
    input("D2", "2. will / She / arrive / Friday / on", ["She will arrive on Friday", "She will arrive on Friday."], "Use subject + will + base verb + time phrase."),
    input("D3", "3. tonight / Harry / go / to / won't / the library", ["Harry won't go to the library tonight", "Harry won't go to the library tonight."], "Use subject + won't + base verb, then place tonight at the end."),
    input("D4", "4. will / tomorrow / celebrate / her / Sandra / birthday", ["Sandra will celebrate her birthday tomorrow", "Sandra will celebrate her birthday tomorrow."], "Use subject + will + base verb + object + time phrase.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences. Use will or won't.", note: "Choose the form that makes the meaning logical.", points: 5, questions: [
    input("E1", "1. I'm feeling sick, so I ___ go to school tomorrow.", ["won't", "will not"], "Feeling sick gives a reason not to go, so use won't."),
    input("E2", "2. The Earth ___ orbit the sun in 365 days.", ["will"], "Use will for this future statement."),
    input("E3", "3. Sheila is almost ten years old. She ___ be ten in three days.", ["will"], "In three days describes a future fact, so use will."),
    input("E4", "4. Look! The sky is blue! It ___ rain today.", ["won't", "will not"], "The clear blue sky supports the negative prediction won't rain."),
    input("E5", "5. Tomorrow the sun ___ set at 7:40 p.m.", ["will"], "Use will for the stated future time.")
  ]},
  { key: "F", label: "F", title: "Look and complete the sentences with will or won't and a verb.", note: "Use each picture and time phrase to write the complete verb phrase.", points: 4, questions: [
    input("F1", "1. The boy ___ math tomorrow.", ["won't study", "will not study"], "The picture shows the boy not studying, so use won't study.", IMG + "f-1.png"),
    input("F2", "2. They ___ pizza next week.", ["will eat"], "The picture shows the students with pizza, so use will eat.", IMG + "f-2.png"),
    input("F3", "3. It ___ in the mountains tomorrow.", ["will snow"], "The picture shows snow in the mountains, so use will snow.", IMG + "f-3.png"),
    input("F4", "4. She ___ tennis next year.", ["won't play", "will not play"], "The picture indicates that she will not play tennis, so use won't play.", IMG + "f-4.png")
  ]},
  { key: "G", label: "G", title: "Match the sentences to the pictures.", note: "The letters label the pictures only. Choose the matching picture.", points: 4, questions: [
    pictureChoice("G1", "1. He has a headache.", labelledPictures("g", ["a", "b", "c", "d"]), "b", "Picture b shows a boy holding his head because it hurts."),
    pictureChoice("G2", "2. He has a fever.", labelledPictures("g", ["a", "b", "c", "d"]), "d", "Picture d shows a sick boy in bed with a fever."),
    pictureChoice("G3", "3. He is a passenger.", labelledPictures("g", ["a", "b", "c", "d"]), "c", "Picture c shows a passenger sitting inside a vehicle."),
    pictureChoice("G4", "4. Here's the airport.", labelledPictures("g", ["a", "b", "c", "d"]), "a", "Picture a shows an airport and airplanes.")
  ]},
  { key: "H", label: "H", title: "Complete the sentences.", note: "Write the word that completes each meaning.", points: 4, questions: [
    input("H1", "1. Tameka felt ___, so she didn't come to school yesterday.", ["sick"], "Sick explains why Tameka did not come to school."),
    input("H2", "2. I have a bad ___. I want to ask the nurse to look at my ear.", ["earache"], "Pain in the ear is an earache."),
    input("H3", "3. You must have a ___ to enter the country. Don't forget it!", ["passport"], "A passport is the travel document needed to enter a country."),
    input("H4", "4. The ___ of this plane is Beijing.", ["destination"], "A destination is the place a journey is going to.")
  ]},
  { key: "I", label: "I", title: "Unscramble the words and match.", note: "Write the correct word, then choose the matching definition label.", points: 6, wordBank: ["a. You take this when you don't feel well", "b. A person you see when you don't feel well", "c. A noise you make when you have a cold"], questions: [
    { id: "I1", type: "paired", prompt: "1. M d i c i n e e", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["medicine"], explanation: "Medicine is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "You take medicine when you do not feel well, so the label is a." }
    ]},
    { id: "I2", type: "paired", prompt: "2. S n i n g e z e", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["sneezing"], explanation: "Sneezing is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Sneezing is a noise people make when they have a cold, so the label is c." }
    ]},
    { id: "I3", type: "paired", prompt: "3. D c t o r o", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["doctor"], explanation: "Doctor is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "A doctor is a person you see when you do not feel well, so the label is b." }
    ]}
  ]},
  { key: "J", label: "J", title: "Look and write sentences. Use be going to or not be going to.", note: "Use the picture to decide whether the plan is positive or negative.", points: 4, questions: [
    input("J1", "1. Janice / buy / some medicine", ["Janice is not going to buy some medicine", "Janice isn't going to buy some medicine", "Janice is not going to buy some medicine."], "Janice is walking past the shop, so the sentence is negative.", IMG + "j-1.png"),
    input("J2", "2. The girls / visit / their grandmother", ["The girls are going to visit their grandmother", "The girls are going to visit their grandmother."], "The girls are travelling to visit their grandmother, so use are going to visit.", IMG + "j-2.png"),
    input("J3", "3. Catherine / see / a doctor", ["Catherine is not going to see a doctor", "Catherine isn't going to see a doctor", "Catherine is not going to see a doctor."], "Catherine is at the cinema, not at a doctor's office, so use the negative form.", IMG + "j-3.png"),
    input("J4", "4. I / take / a nap", ["I'm going to take a nap", "I am going to take a nap", "I'm going to take a nap."], "The picture shows the speaker resting in bed, so use am going to take.", IMG + "j-4.png")
  ]},
  { key: "K", label: "K", title: "Listen. Then circle the correct answer.", note: "Listen for the complete sentence or short answer.", points: 3, audio: "assets/audio-k.mp3", questions: [
    choice("K1", "1.", ["I'm going to see the doctor.", "I'm at the doctor."], "I'm going to see the doctor.", "The recording describes a future plan: I'm going to see the doctor."),
    choice("K2", "2.", ["Yes, they are.", "Yes, they do."], "Yes, they are.", "The question uses be going to, so the short answer is Yes, they are."),
    choice("K3", "3.", ["No, he doesn't.", "No, he isn't."], "No, he isn't.", "The question uses is going to, so the short answer is No, he isn't.")
  ]},
  { key: "L", label: "L", title: "Complete the sentences.", note: "Use the phrase box. One phrase is not needed.", points: 4, wordBank: ["are you going to", "isn't going to", "is going to", "aren't going to", "am going to"], questions: [
    input("L1", "1. I ___ look for my passport in my bedroom.", ["am going to", "'m going to"], "With I, use am going to."),
    input("L2", "2. Raj ___ go to school tomorrow. He feels sick.", ["isn't going to", "is not going to"], "Raj is singular, and feeling sick makes the plan negative."),
    input("L3", "3. ___ do your homework later tonight?", ["Are you going to"], "A question with you begins Are you going to."),
    input("L4", "4. The students ___ play outside because of the rain.", ["aren't going to", "are not going to"], "The students is plural, and the rain makes the plan negative.")
  ]}
];


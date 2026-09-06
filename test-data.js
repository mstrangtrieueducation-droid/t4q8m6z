const IMG = "assets/test-images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const pictureChoice = (id, prompt, pictures, answer, explanation) => ({ id, type: "pictureChoice", prompt, pictures, answers: [answer], explanation, points: 1 });
const labelledPictures = (prefix, labels) => labels.map((label) => ({ value: label, image: `${IMG}${prefix}-${label}.png` }));

const sections = [
  {
    "key": "A",
    "label": "A",
    "title": "Listen and circle the correct answer.",
    "note": "Listen carefully, then choose True or False.",
    "points": 3,
    "audio": "assets/audio-a.mp3",
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "The statement does not match the information in the recording.",
        "image": "",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The statement matches the information in the recording.",
        "image": "",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The statement matches the information in the recording.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Match the sentences to the pictures.",
    "note": "The letters label the pictures only. Choose the picture that matches each sentence.",
    "points": 3,
    "questions": [
      {
        "id": "B1",
        "type": "pictureChoice",
        "prompt": "1. Saturn is a beautiful planet.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/test-images/b-a.png"
          },
          {
            "value": "b",
            "image": "assets/test-images/b-b.png"
          },
          {
            "value": "c",
            "image": "assets/test-images/b-c.png"
          }
        ],
        "answers": [
          "b"
        ],
        "explanation": "Picture b shows Saturn and its rings.",
        "points": 1
      },
      {
        "id": "B2",
        "type": "pictureChoice",
        "prompt": "2. The Earth turns on its axis.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/test-images/b-a.png"
          },
          {
            "value": "b",
            "image": "assets/test-images/b-b.png"
          },
          {
            "value": "c",
            "image": "assets/test-images/b-c.png"
          }
        ],
        "answers": [
          "c"
        ],
        "explanation": "Picture c shows the Earth rotating on its axis.",
        "points": 1
      },
      {
        "id": "B3",
        "type": "pictureChoice",
        "prompt": "3. There are different time zones.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/test-images/b-a.png"
          },
          {
            "value": "b",
            "image": "assets/test-images/b-b.png"
          },
          {
            "value": "c",
            "image": "assets/test-images/b-c.png"
          }
        ],
        "answers": [
          "a"
        ],
        "explanation": "Picture a shows different time zones across a map.",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Unscramble the words and match.",
    "note": "Write the correct word, then choose the matching definition label.",
    "points": 6,
    "wordBank": [
      "a. There are twelve of these in one year",
      "b. To be correct",
      "c. Planets do this around the sun"
    ],
    "questions": [
      {
        "id": "C1",
        "type": "paired",
        "prompt": "1. O b t r i",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "orbit"
            ],
            "explanation": "Orbit is the correct spelling."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "c"
            ],
            "explanation": "Planets orbit the sun, so the matching definition is c."
          }
        ]
      },
      {
        "id": "C2",
        "type": "paired",
        "prompt": "2. M h t n o",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "month"
            ],
            "explanation": "Month is the correct spelling."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "a"
            ],
            "explanation": "There are twelve months in one year, so the matching definition is a."
          }
        ]
      },
      {
        "id": "C3",
        "type": "paired",
        "prompt": "3. A c c a t e u r",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "accurate"
            ],
            "explanation": "Accurate is the correct spelling."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "b"
            ],
            "explanation": "Accurate means correct, so the matching definition is b."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Use every word and add correct punctuation.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "1. start / my / weeks / school / new / in / three / I'll",
        "answers": [
          "I'll start my new school in three weeks",
          "I'll start my new school in three weeks."
        ],
        "explanation": "Place the subject and will first, followed by the verb, object, and time phrase.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "2. will / She / arrive / Friday / on",
        "answers": [
          "She will arrive on Friday",
          "She will arrive on Friday."
        ],
        "explanation": "Use subject + will + base verb + time phrase.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "3. tonight / Harry / go / to / won't / the library",
        "answers": [
          "Harry won't go to the library tonight",
          "Harry won't go to the library tonight."
        ],
        "explanation": "Use subject + won't + base verb, then place tonight at the end.",
        "image": "",
        "points": 1
      },
      {
        "id": "D4",
        "type": "input",
        "prompt": "4. will / tomorrow / celebrate / her / Sandra / birthday",
        "answers": [
          "Sandra will celebrate her birthday tomorrow",
          "Sandra will celebrate her birthday tomorrow."
        ],
        "explanation": "Use subject + will + base verb + object + time phrase.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Complete the sentences. Use will or won't.",
    "note": "Choose the form that makes the meaning logical.",
    "points": 5,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. I'm feeling sick, so I ___ go to school tomorrow.",
        "answers": [
          "won't",
          "will not"
        ],
        "explanation": "Feeling sick gives a reason not to go, so use won't.",
        "image": "",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. The Earth ___ orbit the sun in 365 days.",
        "answers": [
          "will"
        ],
        "explanation": "Use will for this future statement.",
        "image": "",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. Sheila is almost ten years old. She ___ be ten in three days.",
        "answers": [
          "will"
        ],
        "explanation": "In three days describes a future fact, so use will.",
        "image": "",
        "points": 1
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. Look! The sky is blue! It ___ rain today.",
        "answers": [
          "won't",
          "will not"
        ],
        "explanation": "The clear blue sky supports the negative prediction won't rain.",
        "image": "",
        "points": 1
      },
      {
        "id": "E5",
        "type": "input",
        "prompt": "5. Tomorrow the sun ___ set at 7:40 p.m.",
        "answers": [
          "will"
        ],
        "explanation": "Use will for the stated future time.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Look and complete the sentences with will or won't and a verb.",
    "note": "Use each picture and time phrase to write the complete verb phrase.",
    "points": 4,
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. The boy ___ math tomorrow.",
        "answers": [
          "won't study",
          "will not study"
        ],
        "explanation": "The picture shows the boy not studying, so use won't study.",
        "image": "assets/test-images/f-1.png",
        "points": 1
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. They ___ pizza next week.",
        "answers": [
          "will eat"
        ],
        "explanation": "The picture shows the students with pizza, so use will eat.",
        "image": "assets/test-images/f-2.png",
        "points": 1
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. It ___ in the mountains tomorrow.",
        "answers": [
          "will snow"
        ],
        "explanation": "The picture shows snow in the mountains, so use will snow.",
        "image": "assets/test-images/f-3.png",
        "points": 1
      },
      {
        "id": "F4",
        "type": "input",
        "prompt": "4. She ___ tennis next year.",
        "answers": [
          "won't play",
          "will not play"
        ],
        "explanation": "The picture indicates that she will not play tennis, so use won't play.",
        "image": "assets/test-images/f-4.png",
        "points": 1
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Match the sentences to the pictures.",
    "note": "The letters label the pictures only. Choose the matching picture.",
    "points": 4,
    "questions": [
      {
        "id": "G1",
        "type": "pictureChoice",
        "prompt": "1. He has a headache.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/test-images/g-a.png"
          },
          {
            "value": "b",
            "image": "assets/test-images/g-b.png"
          },
          {
            "value": "c",
            "image": "assets/test-images/g-c.png"
          },
          {
            "value": "d",
            "image": "assets/test-images/g-d.png"
          }
        ],
        "answers": [
          "b"
        ],
        "explanation": "Picture b shows a boy holding his head because it hurts.",
        "points": 1
      },
      {
        "id": "G2",
        "type": "pictureChoice",
        "prompt": "2. He has a fever.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/test-images/g-a.png"
          },
          {
            "value": "b",
            "image": "assets/test-images/g-b.png"
          },
          {
            "value": "c",
            "image": "assets/test-images/g-c.png"
          },
          {
            "value": "d",
            "image": "assets/test-images/g-d.png"
          }
        ],
        "answers": [
          "d"
        ],
        "explanation": "Picture d shows a sick boy in bed with a fever.",
        "points": 1
      },
      {
        "id": "G3",
        "type": "pictureChoice",
        "prompt": "3. He is a passenger.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/test-images/g-a.png"
          },
          {
            "value": "b",
            "image": "assets/test-images/g-b.png"
          },
          {
            "value": "c",
            "image": "assets/test-images/g-c.png"
          },
          {
            "value": "d",
            "image": "assets/test-images/g-d.png"
          }
        ],
        "answers": [
          "c"
        ],
        "explanation": "Picture c shows a passenger sitting inside a vehicle.",
        "points": 1
      },
      {
        "id": "G4",
        "type": "pictureChoice",
        "prompt": "4. Here's the airport.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/test-images/g-a.png"
          },
          {
            "value": "b",
            "image": "assets/test-images/g-b.png"
          },
          {
            "value": "c",
            "image": "assets/test-images/g-c.png"
          },
          {
            "value": "d",
            "image": "assets/test-images/g-d.png"
          }
        ],
        "answers": [
          "a"
        ],
        "explanation": "Picture a shows an airport and airplanes.",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Complete the sentences.",
    "note": "Write the word that completes each meaning.",
    "points": 4,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. Tameka felt ___, so she didn't come to school yesterday.",
        "answers": [
          "sick"
        ],
        "explanation": "Sick explains why Tameka did not come to school.",
        "image": "",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. I have a bad ___. I want to ask the nurse to look at my ear.",
        "answers": [
          "earache"
        ],
        "explanation": "Pain in the ear is an earache.",
        "image": "",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. You must have a ___ to enter the country. Don't forget it!",
        "answers": [
          "passport"
        ],
        "explanation": "A passport is the travel document needed to enter a country.",
        "image": "",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. The ___ of this plane is Beijing.",
        "answers": [
          "destination"
        ],
        "explanation": "A destination is the place a journey is going to.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Unscramble the words and match.",
    "note": "Write the correct word, then choose the matching definition label.",
    "points": 6,
    "wordBank": [
      "a. You take this when you don't feel well",
      "b. A person you see when you don't feel well",
      "c. A noise you make when you have a cold"
    ],
    "questions": [
      {
        "id": "I1",
        "type": "paired",
        "prompt": "1. M d i c i n e e",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "medicine"
            ],
            "explanation": "Medicine is the correct spelling."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "a"
            ],
            "explanation": "You take medicine when you do not feel well, so the label is a."
          }
        ]
      },
      {
        "id": "I2",
        "type": "paired",
        "prompt": "2. S n i n g e z e",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "sneezing"
            ],
            "explanation": "Sneezing is the correct spelling."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "c"
            ],
            "explanation": "Sneezing is a noise people make when they have a cold, so the label is c."
          }
        ]
      },
      {
        "id": "I3",
        "type": "paired",
        "prompt": "3. D c t o r o",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "doctor"
            ],
            "explanation": "Doctor is the correct spelling."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "b"
            ],
            "explanation": "A doctor is a person you see when you do not feel well, so the label is b."
          }
        ]
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Look and write sentences. Use be going to or not be going to.",
    "note": "Use the picture to decide whether the plan is positive or negative.",
    "points": 4,
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. Janice / buy / some medicine",
        "answers": [
          "Janice is not going to buy some medicine",
          "Janice isn't going to buy some medicine",
          "Janice is not going to buy some medicine."
        ],
        "explanation": "Janice is walking past the shop, so the sentence is negative.",
        "image": "assets/test-images/j-1.png",
        "points": 1
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. The girls / visit / their grandmother",
        "answers": [
          "The girls are going to visit their grandmother",
          "The girls are going to visit their grandmother."
        ],
        "explanation": "The girls are travelling to visit their grandmother, so use are going to visit.",
        "image": "assets/test-images/j-2.png",
        "points": 1
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. Catherine / see / a doctor",
        "answers": [
          "Catherine is not going to see a doctor",
          "Catherine isn't going to see a doctor",
          "Catherine is not going to see a doctor."
        ],
        "explanation": "Catherine is at the cinema, not at a doctor's office, so use the negative form.",
        "image": "assets/test-images/j-3.png",
        "points": 1
      },
      {
        "id": "J4",
        "type": "input",
        "prompt": "4. I / take / a nap",
        "answers": [
          "I'm going to take a nap",
          "I am going to take a nap",
          "I'm going to take a nap."
        ],
        "explanation": "The picture shows the speaker resting in bed, so use am going to take.",
        "image": "assets/test-images/j-4.png",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Listen. Then circle the correct answer.",
    "note": "Listen for the complete sentence or short answer.",
    "points": 3,
    "audio": "assets/audio-k.mp3",
    "questions": [
      {
        "id": "K1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "I'm going to see the doctor.",
          "I'm at the doctor."
        ],
        "answers": [
          "I'm going to see the doctor."
        ],
        "explanation": "The recording describes a future plan: I'm going to see the doctor.",
        "image": "",
        "points": 1
      },
      {
        "id": "K2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "Yes, they are.",
          "Yes, they do."
        ],
        "answers": [
          "Yes, they are."
        ],
        "explanation": "The question uses be going to, so the short answer is Yes, they are.",
        "image": "",
        "points": 1
      },
      {
        "id": "K3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "No, he doesn't.",
          "No, he isn't."
        ],
        "answers": [
          "No, he isn't."
        ],
        "explanation": "The question uses is going to, so the short answer is No, he isn't.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "L",
    "label": "L",
    "title": "Complete the sentences.",
    "note": "Use the phrase box. One phrase is not needed.",
    "points": 4,
    "wordBank": [
      "are you going to",
      "isn't going to",
      "is going to",
      "aren't going to",
      "am going to"
    ],
    "questions": [
      {
        "id": "L1",
        "type": "input",
        "prompt": "1. I ___ look for my passport in my bedroom.",
        "answers": [
          "am going to",
          "'m going to"
        ],
        "explanation": "With I, use am going to.",
        "image": "",
        "points": 1
      },
      {
        "id": "L2",
        "type": "input",
        "prompt": "2. Raj ___ go to school tomorrow. He feels sick.",
        "answers": [
          "isn't going to",
          "is not going to"
        ],
        "explanation": "Raj is singular, and feeling sick makes the plan negative.",
        "image": "",
        "points": 1
      },
      {
        "id": "L3",
        "type": "input",
        "prompt": "3. ___ do your homework later tonight?",
        "answers": [
          "Are you going to"
        ],
        "explanation": "A question with you begins Are you going to.",
        "image": "",
        "points": 1
      },
      {
        "id": "L4",
        "type": "input",
        "prompt": "4. The students ___ play outside because of the rain.",
        "answers": [
          "aren't going to",
          "are not going to"
        ],
        "explanation": "The students is plural, and the rain makes the plan negative.",
        "image": "",
        "points": 1
      }
    ]
  }
];

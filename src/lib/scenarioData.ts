export interface Idiom {
  phrase: string;
  context: string;
  meaning: string;
  usage: string;
}

export interface ComprehensionQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  idioms: Idiom[];
  questions: ComprehensionQuestion[][];
}

export const scenarios: Scenario[] = [
  {
    id: "job-interview",
    title: "Job Interview",
    description: "Master the idioms you need to impress in any job interview.",
    idioms: [
      // Block 1
      {
        phrase: "Get a foot in the door",
        context: "When trying to start a career in a competitive industry.",
        meaning: "To get an initial opportunity or position.",
        usage: "Use when you get your first interview with a company. Avoid using it once you are already established.",
      },
      {
        phrase: "Thinking outside the box",
        context: "When asked about problem-solving skills.",
        meaning: "To think creatively and unconventionally.",
        usage: "Use to describe your approach to complex challenges. Avoid overusing it, as it can sound cliché.",
      },
      {
        phrase: "Hit the ground running",
        context: "Describing how quickly you can become a productive team member.",
        meaning: "To start something and proceed at a fast pace with great enthusiasm.",
        usage: "Perfect for showing you're a proactive and quick learner. Use in the context of starting a new role.",
      },
      {
        phrase: "Go the extra mile",
        context: "Explaining your work ethic.",
        meaning: "To do more than what is expected.",
        usage: "Use when giving an example of your dedication. Provide a specific story to back it up.",
      },
      {
        phrase: "On the same page",
        context: "Discussing team collaboration and alignment.",
        meaning: "To have a shared understanding or agreement.",
        usage: "Use when talking about ensuring your team is aligned on a project. It shows you value communication.",
      },
      // Block 2
      {
        phrase: "Learning curve",
        context: "When asked about adapting to new technologies or processes.",
        meaning: "The rate of a person's progress in gaining experience or new skills.",
        usage: "Acknowledge a 'steep learning curve' to show awareness, but emphasize your ability to learn quickly.",
      },
      {
        phrase: "Ball is in your court",
        context: "After you have finished your interview and are waiting for a response.",
        meaning: "It is up to you to make the next decision or step.",
        usage: "More for your internal thought process, but you might say to the recruiter, 'I'm looking forward to hearing from you when the ball is in your court.'",
      },
      {
        phrase: "Raise the bar",
        context: "When talking about your performance standards.",
        meaning: "To set a higher standard.",
        usage: "Use to show you are ambitious and strive for excellence. Example: 'In my last role, I consistently raised the bar for project delivery.'",
      },
      {
        phrase: "See eye to eye",
        context: "Regarding agreement with company values or a manager's approach.",
        meaning: "To agree on something.",
        usage: "Use to express alignment: 'Based on our conversation, it sounds like we see eye to eye on the importance of user-centered design.'",
      },
      {
        phrase: "Stay on your toes",
        context: "Describing how you handle a fast-paced or changing environment.",
        meaning: "To remain alert and ready for anything.",
        usage: "Shows that you are adaptable and can handle pressure. 'In the tech industry, you always have to stay on your toes.'",
      },
      // Block 3
      {
        phrase: "The bottom line",
        context: "When summarizing your most important point or the key takeaway.",
        meaning: "The most crucial factor.",
        usage: "Use to focus the conversation on what truly matters. 'The bottom line is that my experience directly aligns with this role's requirements.'",
      },
      {
        phrase: "Cut to the chase",
        context: "When you want to get straight to the most important point.",
        meaning: "To get to the point without wasting time.",
        usage: "Use sparingly, but can be effective to show you are direct and results-oriented. 'Not to cut to the chase, but I'm most excited about the AI integration aspect of this role.'",
      },
      {
        phrase: "Bring to the table",
        context: "When asked what skills and experience you offer.",
        meaning: "The contributions you can make.",
        usage: "This is a core interview question. Be prepared to list what you bring to the table. 'I bring five years of experience in Python and a passion for data science to the table.'",
      },
      {
        phrase: "Get up to speed",
        context: "Similar to 'hit the ground running', about learning a new role.",
        meaning: "To quickly learn what you need to know about something new.",
        usage: "Use to show you are confident in your ability to onboard efficiently. 'I'm confident I can get up to speed on your internal software within the first week.'",
      },
      {
        phrase: "Long shot",
        context: "Acknowledging that something is unlikely but worth trying.",
        meaning: "Something that has a very low probability of happening.",
        usage: "Can be used to show you are realistic but also ambitious. 'I know it's a long shot, but I applied for my dream company and got an interview!'",
      },
    ],
    questions: [
      [
        {
          question: "Which idiom means 'to get an initial opportunity'?",
          options: ["Hit the ground running", "Get a foot in the door", "Thinking outside the box", "Go the extra mile"],
          answer: "Get a foot in the door",
        },
        {
          question: "If you 'go the extra mile', you are...",
          options: ["Doing the minimum", "Doing more than expected", "Thinking creatively", "Starting quickly"],
          answer: "Doing more than expected",
        },
      ],
      [
        {
          question: "A 'steep learning curve' implies...",
          options: ["Something is easy to learn", "Something is difficult and requires effort to learn", "You learn on a curve", "You are a slow learner"],
          answer: "Something is difficult and requires effort to learn",
        },
        {
          question: "When you and your manager 'see eye to eye', you...",
          options: ["Look at each other", "Disagree", "Agree", "Are in a meeting"],
          answer: "Agree",
        },
      ],
      [
        {
          question: "What does 'the bottom line' refer to?",
          options: ["The last line of a document", "A company's profits", "The most important point", "A type of fishing"],
          answer: "The most important point",
        },
      ],
    ],
  },
  {
    id: "first-date",
    title: "First Date",
    description: "Navigate the nuances of a first date with these key phrases.",
    idioms: [
      // Block 1
      {
        phrase: "Break the ice",
        context: "Starting a conversation with someone you don't know.",
        meaning: "To initiate conversation in a social setting.",
        usage: "Essential for the first few minutes of a date. Ask a lighthearted question to break the ice.",
      },
      {
        phrase: "Hit it off",
        context: "When you and your date have instant chemistry.",
        meaning: "To get along well with someone from the first moment.",
        usage: "You can say this during or after the date. 'I think we really hit it off.'",
      },
      {
        phrase: "Get to know someone",
        context: "The entire purpose of the first date.",
        meaning: "To learn more about someone's personality, interests, and life.",
        usage: "The guiding principle of your conversation. Ask open-ended questions to get to know them better.",
      },
      {
        phrase: "Have a lot in common",
        context: "Discovering shared interests or life experiences.",
        meaning: "To share similar interests, beliefs, or backgrounds.",
        usage: "A positive sign on a date. 'It sounds like we have a lot in common, especially our love for hiking.'",
      },
      {
        phrase: "Play it by ear",
        context: "When you don't have a fixed plan for the rest of the evening.",
        meaning: "To decide how to deal with a situation as it develops, rather than by having a plan to follow.",
        usage: "Good for a relaxed, low-pressure vibe. 'We can get coffee after this, or just play it by ear.'",
      },
      // Block 2
      {
        phrase: "Sparks fly",
        context: "Describing a strong, palpable chemistry between two people.",
        meaning: "There is a strong romantic attraction.",
        usage: "A more intense version of 'hit it off'. Usually used after the date to describe the feeling. 'I felt sparks fly the moment we started talking.'",
      },
      {
        phrase: "On the fence",
        context: "When you are unsure how you feel about the person after the date.",
        meaning: "To be undecided about something.",
        usage: "Use when talking to your friends afterwards. 'I'm on the fence about whether I want a second date.'",
      },
      {
        phrase: "Read between the lines",
        context: "Trying to understand someone's true feelings, which may not be explicitly stated.",
        meaning: "To look for or discover a meaning that is implied rather than explicitly stated.",
        usage: "Important for understanding non-verbal cues. 'I had to read between the lines, but I think they were nervous too.'",
      },
      {
        phrase: "Judge a book by its cover",
        context: "Making assumptions based on appearance alone.",
        meaning: "To form an opinion about someone or something based solely on their outward appearance.",
        usage: "A reminder not to make snap judgments. 'I try not to judge a book by its cover on first dates.'",
      },
      {
        phrase: "Test the waters",
        context: "To find out what a situation is like before committing to it.",
        meaning: "To gauge the general reaction or feeling about something before proceeding.",
        usage: "A first date is essentially testing the waters for a potential relationship.",
      },
      // Block 3
      {
        phrase: "Wear your heart on your sleeve",
        context: "Being very open and transparent with your emotions.",
        meaning: "To make your feelings and emotions obvious to other people.",
        usage: "Can be a good or bad thing. It shows honesty, but can also make you seem vulnerable. Use with caution.",
      },
      {
        phrase: "Play hard to get",
        context: "Pretending to be less interested in someone than you really are.",
        meaning: "To feign indifference to attract someone.",
        usage: "A dating strategy, but generally not recommended for building genuine connection. It's better to be straightforward.",
      },
      {
        phrase: "Lead someone on",
        context: "Giving someone false hope about your romantic interest.",
        meaning: "To mislead someone into believing you are interested in them romantically.",
        usage: "Something to avoid doing. Be clear about your intentions if you're not interested.",
      },
      {
        phrase: "Steal someone's thunder",
        context: "When your date dominates the conversation or takes credit for your story.",
        meaning: "To take attention or praise away from someone else.",
        usage: "A red flag if your date does this. It suggests they are not a good listener.",
      },
      {
        phrase: "A catch",
        context: "Describing someone who is a very desirable potential partner.",
        meaning: "A person who is considered a good person to have a relationship with.",
        usage: "You might think to yourself, 'Wow, they are a real catch!' or a friend might say it about your date.",
      },
    ],
    questions: [
      [
        {
          question: "What does 'break the ice' mean?",
          options: ["To end a conversation", "To start a conversation", "To get a cold drink", "To tell a joke"],
          answer: "To start a conversation",
        },
        {
          question: "If you 'hit it off' with someone, you...",
          options: ["Get along well immediately", "Have an argument", "Play a game", "Barely talk"],
          answer: "Get along well immediately",
        },
      ],
      [
        {
          question: "When 'sparks fly', it means...",
          options: ["There's a fire", "There's strong romantic chemistry", "You are angry", "You are watching fireworks"],
          answer: "There's strong romantic chemistry",
        },
        {
          question: "What are you doing if you 'test the waters'?",
          options: ["Going for a swim", "Committing fully", "Gauging a situation before committing", "Drinking water"],
          answer: "Gauging a situation before committing",
        },
      ],
      [
        {
          question: "A person who is 'a catch' is considered...",
          options: ["A good fisherman", "A desirable partner", "Hard to understand", "Someone who plays sports"],
          answer: "A desirable partner",
        },
      ],
    ],
  },
  {
    id: "networking-event",
    title: "Networking Event",
    description: "Build connections confidently with these essential networking idioms.",
    idioms: [
      // Block 1
      {
        phrase: "Break the ice",
        context: "Starting a conversation with a new contact.",
        meaning: "To initiate conversation in a social setting.",
        usage: "Crucial for starting conversations. 'This is a great event. Have you been to this conference before?' is a good way to break the ice.",
      },
      {
        phrase: "Touch base",
        context: "Following up with a contact after the event.",
        meaning: "To make contact with someone briefly.",
        usage: "In your follow-up email, say 'It was great to meet you. I wanted to touch base as promised.'",
      },
      {
        phrase: "Pick someone's brain",
        context: "Asking for information or advice from an expert.",
        meaning: "To ask someone who knows a lot about a subject for their ideas and opinions.",
        usage: "When you meet someone in your field, you could say, 'Your work is fascinating. I'd love to pick your brain about it sometime.'",
      },
      {
        phrase: "Elevator pitch",
        context: "A short, persuasive summary of who you are and what you do.",
        meaning: "A brief and persuasive speech that you can use to spark interest in your project, idea, or yourself.",
        usage: "Have a 30-second version ready. It should be clear, concise, and engaging.",
      },
      {
        phrase: "Stay in the loop",
        context: "Keeping up to date with developments in your industry or with your contacts.",
        meaning: "To be kept informed about what is happening.",
        usage: "When ending a conversation, you could say, 'Let's connect on LinkedIn to stay in the loop.'",
      },
      // Block 2
      {
        phrase: "Connect the dots",
        context: "Understanding the relationships between different ideas, people, or opportunities.",
        meaning: "To understand how different things are related.",
        usage: "Networking helps you connect the dots between your skills and the industry's needs.",
      },
      {
        phrase: "Open doors",
        context: "Creating opportunities for yourself or others.",
        meaning: "To create opportunities.",
        usage: "A good connection can open doors for you in the future. You can also offer to open doors for others.",
      },
      {
        phrase: "Build a rapport",
        context: "Developing a friendly, positive relationship with a new contact.",
        meaning: "To create a good understanding and relationship with someone.",
        usage: "Focus on finding common ground to build a rapport before talking business.",
      },
      {
        phrase: "Follow up",
        context: "The action of contacting someone after an initial meeting.",
        meaning: "To take further action after a previous one.",
        usage: "A prompt follow-up email or LinkedIn request is critical after a networking event.",
      },
      {
        phrase: "It's not what you know, it's who you know",
        context: "The importance of connections.",
        meaning: "Connections and relationships are often more important than skills or knowledge alone.",
        usage: "The core principle of networking. Use it to frame the importance of building a strong professional circle.",
      },
      // Block 3
      {
        phrase: "Put a face to a name",
        context: "Meeting someone in person whom you've only known through email or online.",
        meaning: "To meet someone in person for the first time.",
        usage: "When you finally meet an online contact, you can say, 'It's great to finally put a face to a name!'",
      },
      {
        phrase: "Run in the same circles",
        context: "Discovering you have mutual acquaintances or attend similar events.",
        meaning: "To have similar friends or social spheres.",
        usage: "A great way to build rapport. 'It sounds like we run in the same circles.'",
      },
      {
        phrase: "Talk shop",
        context: "To talk about your job or business.",
        meaning: "To discuss work-related topics.",
        usage: "Be careful not to talk shop too much. A good networker balances professional and personal conversation.",
      },
      {
        phrase: "Word of mouth",
        context: "When information or a recommendation is passed from person to person.",
        meaning: "Information transmitted informally from one person to another.",
        usage: "Many opportunities come from word of mouth, which is why networking is so important.",
      },
      {
        phrase: "Bridge the gap",
        context: "Connecting two different people, ideas, or groups.",
        meaning: "To connect two things or reduce the difference between them.",
        usage: "You can act as a connector by offering to bridge the gap between a contact's need and someone you know who can help.",
      },
    ],
    questions: [
      [
        {
          question: "An 'elevator pitch' should be...",
          options: ["Long and detailed", "Short and persuasive", "Given in an elevator", "About your personal life"],
          answer: "Short and persuasive",
        },
        {
          question: "What does it mean to 'pick someone's brain'?",
          options: ["To perform surgery", "To annoy someone", "To ask for their ideas and advice", "To conduct a test"],
          answer: "To ask for their ideas and advice",
        },
      ],
      [
        {
          question: "If you 'open doors' for someone, you are...",
          options: ["Literally opening a door", "Creating opportunities for them", "Closing a deal", "Starting a business"],
          answer: "Creating opportunities for them",
        },
        {
          question: "The idiom 'It's not what you know, it's who you know' emphasizes the importance of...",
          options: ["Education", "Knowledge", "Connections", "Skills"],
          answer: "Connections",
        },
      ],
      [
        {
          question: "When you 'talk shop', you are discussing...",
          options: ["Shopping", "Hobbies", "Work-related topics", "The news"],
          answer: "Work-related topics",
        },
      ],
    ],
  },
  {
    id: "customer-service-call",
    title: "Customer Service Call",
    description: "Handle customer service interactions smoothly and effectively.",
    idioms: [
      // Block 1
      {
        phrase: "Get to the bottom of it",
        context: "When you need to investigate a customer's problem thoroughly.",
        meaning: "To find the real cause of a problem.",
        usage: "Assure the customer you are taking their issue seriously. 'I'm going to do everything I can to get to the bottom of this for you.'",
      },
      {
        phrase: "On the same page",
        context: "Ensuring you and the customer have the same understanding of the issue.",
        meaning: "To have a shared understanding.",
        usage: "Repeat the customer's issue back to them to confirm. 'Just to make sure we're on the same page, you're saying that...'",
      },
      {
        phrase: "Walk someone through something",
        context: "Guiding a customer step-by-step through a process.",
        meaning: "To explain a process to someone in a slow, detailed way.",
        usage: "Use when providing instructions. 'I can walk you through the reset process right now.'",
      },
      {
        phrase: "Bear with me",
        context: "When you need a moment to look up information.",
        meaning: "To be patient with me.",
        usage: "A polite way to ask for a moment of time. 'Please bear with me for a moment while I pull up your account details.'",
      },
      {
        phrase: "Go the extra mile",
        context: "Doing more than the customer expects to solve their problem.",
        meaning: "To do more than what is expected.",
        usage: "This is the essence of great customer service. 'I'm happy to go the extra mile to make sure this is resolved for you.'",
      },
      // Block 2
      {
        phrase: "Touch base",
        context: "Promising to follow up with a customer later.",
        meaning: "To make contact with someone briefly.",
        usage: "If you can't solve the issue immediately, promise a follow-up. 'I will touch base with you by email within 24 hours.'",
      },
      {
        phrase: "Iron out the details",
        context: "Resolving the final, small problems of an issue.",
        meaning: "To settle the final details or resolve minor problems.",
        usage: "Use when you have a general solution but need to finalize the specifics. 'We need to iron out the details of the replacement shipment.'",
      },
      {
        phrase: "Keep me in the loop",
        context: "A customer might say this if they want to be updated on the progress.",
        meaning: "To be kept informed about what is happening.",
        usage: "As a service agent, you should proactively keep the customer in the loop.",
      },
      {
        phrase: "By the book",
        context: "Following company policy and procedures exactly.",
        meaning: "To do things strictly according to the rules.",
        usage: "Sometimes you have to explain that you are required to do things by the book. 'I understand your frustration, but I have to proceed by the book.'",
      },
      {
        phrase: "Hands are tied",
        context: "When you are unable to help due to rules or limitations.",
        meaning: "To be unable to act freely.",
        usage: "Use with empathy. 'I wish I could do more, but my hands are tied by the system's limitations.'",
      },
      // Block 3
      {
        phrase: "The last straw",
        context: "When a customer has experienced a series of problems and this is the one that makes them give up.",
        meaning: "The final event in a series of unacceptable ones.",
        usage: "A customer might say, 'This delay is the last straw!' This indicates a very high-risk situation.",
      },
      {
        phrase: "Get back on track",
        context: "After a problem, you want to restore the customer's confidence and service.",
        meaning: "To return to the correct course or normal state.",
        usage: "Focus on the solution. 'My goal is to solve this for you and get things back on track.'",
      },
      {
        phrase: "Cut corners",
        context: "Doing something in the easiest, cheapest, or fastest way, often at the expense of quality.",
        meaning: "To do something poorly to save time or money.",
        usage: "You can assure a customer that you will not cut corners in finding a solution.",
      },
      {
        phrase: "Read the fine print",
        context: "Referring to the specific terms and conditions of a service or product.",
        meaning: "To read the small text in a contract or agreement carefully.",
        usage: "Sometimes you may need to gently refer a customer to the terms they agreed to. 'As outlined in the fine print of the agreement...'",
      },
      {
        phrase: "In a nutshell",
        context: "Providing a quick summary of a complex issue or solution.",
        meaning: "In summary; in a few words.",
        usage: "Helpful for clarifying. 'So, in a nutshell, we will be sending you a replacement unit overnight.'",
      },
    ],
    questions: [
      [
        {
          question: "If you 'walk someone through' a process, you are...",
          options: ["Doing it for them", "Explaining it step-by-step", "Telling them to do it alone", "Walking away"],
          answer: "Explaining it step-by-step",
        },
        {
          question: "What should you do when you need to 'get to the bottom of' a customer's issue?",
          options: ["Ignore it", "Guess the cause", "Investigate to find the real cause", "Transfer the call"],
          answer: "Investigate to find the real cause",
        },
      ],
      [
        {
          question: "When are your 'hands tied'?",
          options: ["When you are free to do anything", "When you are physically tied up", "When you are unable to help due to rules", "When you are helping a customer"],
          answer: "When you are unable to help due to rules",
        },
        {
          question: "Doing things 'by the book' means you are following...",
          options: ["Your own ideas", "The customer's demands", "Company rules and policies", "A novel"],
          answer: "Company rules and policies",
        },
      ],
      [
        {
          question: "What does 'in a nutshell' mean?",
          options: ["Something is inside a nut", "In detail", "In summary", "A type of food"],
          answer: "In summary",
        },
      ],
    ],
  },
];

const qBank = [
    {
      question:
        "What is the type of your application ?",
      answers: ["Initial marketing authorisation application", "Variation"],
      correct: "Variation",
      questionId: "1"
    },
    {
      question:
        "What is the scope of your application?",
      answers: [
          "National (any other case including hybrid applications)",
           "MRDC reliance procedure - Application for GB or UK excluding GB unfettered access route",
           "EC Decision reliance procedure - Automatic recognition application", 
           "Unfettered access route to GB (Previously granted by EU)",
           "Incoming mutual recognition procedure for sale or supply in Northern Ireland and Unfettered access route for UKMA(GB)", 
           "Decentralised procedure for sale or supply in Northern Ireland and Unfettered access route for UKMA(GB)",
           "European reference product application for sale or supply in Northern Ireland"],
      correct: "vinayak",
      questionId: "2"
    },
    {
      question:
        "Has the active substance(s) of your product previously been authorised in the UK?",
      answers: [
          "Yes", 
          "No"],
      correct: "vinayak",
      questionId: "3"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "090089"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "01010101"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "092299"
    },
  ];
    
  // n = 5 to export 5 question
  function questions(n = 5){
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
  };

  console.log(qBank);
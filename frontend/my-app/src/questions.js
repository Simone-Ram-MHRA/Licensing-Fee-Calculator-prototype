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
        "Please confirm the legal basis of your application or whether you intend to submit an extension application:",
      answers: [
          "Regulation 50 (previously Article 8(3) of Directive 2001/83/EC)", 
          "Regulation 50 Article 8(3)", 
          "Article 10•	Article 10"],
      correct: "vinayak",
      questionId: "4"
    },
    {
      question:
        "Is the legal basis of your application?",
      answers: [
          "Hybrid application - Regulation 52 (previously Article 10.3 of Directive 2001/83/EC)", 
          "Generic Hybrid", 
          "Well-established Use", 
          "New Fixed Combination",
          "Informed Consent",
          "Biosimilars",
          "Generic Product"],
      correct: "vinayak",
      questionId: "5"
    },
    {
      question:
        "Please confirm the legal basis of your application or whether you intend to submit an extension application:?",
      answers: [
        "Regulation 50 (previously Article 8(3) of Directive 2001/83/EC)", 
        "Regulation 50 Article 8(3)", 
         "Article 10"],
      correct: "vinayak",
      questionId: "6"
    },
    {
      question:
        "Is the legal basis of your application ?",
      answers: [
        "Hybrid application - Regulation 52 (previously Article 10.3 of Directive 2001/83/EC)", 
        "10(3) - Generic Hybrid",
        "10(a) - Well-established use",
        "10(b) - New Fixed Combination",
        "10(c) - Informed Consent",
        "10(4) – Biosimilars",
        "10(1) - Generic Product"],
      correct: "vinayak",
      questionId: "7"
    },
    {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "0998999099"
      },
      {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "099099"
      },
      {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "099099"
      },
      {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "099099"
      },
      {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "09459099"
      },
      {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "0912219099"
      },

  ];
    
  // n = 5 to export 5 question
  function questions(n = 5){
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
  };

  console.log(qBank);
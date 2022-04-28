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
          "Does any of the following apply to your application(s) ?",
        answers: [
          "The application lists a new source of active substance not covered by: A European Pharmacopoeia certificate of suitability (CEP) or An ASMF which has been assessed and accepted as part of an authorised medicinal product in the UK", 
          "The application concerns a new route/method of synthesis for active substance.",
          "The application concerns use of the active substance for a new population or a new clinical indication.",
          "The application concerns a new route of administration, or a new method of administration to the site of action or absorption.",
          "The product is presented as a modified/controlled release dosage form or presented as a metered dose/powder inhaler.",  
          "The application is for a sterile product which uses a new sterilisation method or container material in direct contact with the product.",
          "The application for a new influenza vaccine, or a new manufacturer of strain, or an influenza vaccine using a new manufacturer or manufacturing process.",
          "The application includes a new excipient not previously used in the UK.",
          "None of the above"],
        correct: "vinayak",
        questionId: "8"
      },
      {
        question:
          "Does your application relate to ?",
        answers: [
          "Type IA/IAIN/IA Group", 
          "Type IB", 
          "Type II", 
          "THR",
          "Homeopathic"],
        correct: "vinayak",
        questionId: "9"
      },
      {
        question:
          "Does your application consist of a ?",
        answers: [
          "Single",
          "Grouph"],
        correct: "vinayak",
        questionId: "10"
      },
      {
        question:
          "What is the route of your variation??",
        answers: ["National", "Chapter II of EC 1234/2008 and/or Reliance/Recognition"],
        correct: "vinayak",
        questionId: "11"
      },
      {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "12"
      },
      {
        question:
          "how build the app ?",
        answers: ["vinayak", "sarthak", "somil", "devesh"],
        correct: "vinayak",
        questionId: "0912219099"
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
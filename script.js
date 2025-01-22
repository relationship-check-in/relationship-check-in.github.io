const questions = [
  `How is your mental health?`,
  `How am I doing as your partner?`,
  `What can I do to be better as your partner?`,
  `What did I do poorly this week?`,
  `What did I do well this week?`,
  `How am I doing at meeting your emotional intimacy needs?`,
  `Are you happy with the division of housework?`,
  `Do you feel safe with me?`,
  `What is something we should do that we haven’t?`,
  `What can I do to start to repair during or after conflict?`,
  `What are you most looking forward to right now?`,
  `What does adventure look like with you?`,
  `How do you think we could have more fun?`,
  `What is your dream adventure?`,
  `What was your favorite date that we have had?`,
  `Where or what would you like the next big adventure to be?`,
  `What activities do you enjoy doing together?`,
  `Are there any activities you would like us to try?`,
  `How am I doing with meeting your non-sexual physical intimacy needs?`,
  `What are some ways you enjoy being physically intimate that are not sexual?`,
  `What can I do to make our sex life better?`,
  `What financial concerns do you have for us right now?`,
  `What are your financial goals for us in the next 6 months, 1 year, 5 years?`,
  `If something were to happen to either you or I, do you think we are adequately prepared for that situation?`,
];

const question = questions[Math.floor(Math.random() * questions.length)];
const questionElement = document.getElementById( 'question' );
questionElement.innerHTML = question;

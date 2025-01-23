const questions = `
How is your mental health?
How am I doing as your partner?
What can I do to be better as your partner?
What did I do poorly this week?
What did I do well this week?
How am I doing at meeting your emotional intimacy needs?
Are you happy with the division of housework?
Do you feel safe with me?
What is something we should do that we haven’t?
What are you most looking forward to right now?
What does adventure look like with you?
How do you think we could have more fun?
What is your dream adventure?
What was your favorite date that we have had?
Where or what would you like the next big adventure to be?
What activities do you enjoy doing together?
Are there any activities you would like us to try?
How am I doing with meeting your non-sexual physical intimacy needs?
What are some ways you enjoy being physically intimate that are not sexual?
What can I do to make our sex life better?
What financial concerns do you have for us right now?
What are your financial goals for us in the next 6 months, 1 year, 5 years?
If something were to happen to either you or I, do you think we are adequately prepared for that situation?
What am I doing now that you like?
What’s one of your favorite traits of mine?
Is there anything I’ve stopped doing that you used to like?
Is there anything I do that you'd like me to change?
What’s something specific I can do this week to help you feel loved or supported?
Reflecting on the previous week, pinpoint a moment where you felt particularly valued and cared for in our relationship
What are three things you cherish most about our relationship right now and why are they meaningful to you?
Have there been any moments this week when you felt taken for granted? How can we prevent that from happening again?
What positive changes have you noticed in our relationship this week?
In what ways did I make you feel appreciated, and how did it impact our connection?
How can I better recognise and appreciate the little things you do on a weekly basis?
Describe a moment when we laughed together and felt genuine joy and appreciation.
How can we show more kindness and appreciation towards others as a couple?
Reflect on a challenge we overcame together this week. What did you appreciate about the way we worked through the challenge?
What would you like me to do more of during the week to stay connected and express appreciation, especially during busy times?
How can we show more appreciation for each other’s strengths and contributions to the relationship?
What achievement or milestone filled you with joy and excitement this week? How can we celebrate that?
What aspect of myself have I undervalued this week? How can you help me appreciate it more?
Share a memory of a simple act of appreciation that made a significant impact on your day or week.
What are some small gestures or acts of love that I may not be aware of but would make you feel even more cherished and appreciated this week?
How do you currently feel about our relationship?
How well do you feel your individual needs were met last week?
Share something that has been worrying you over the past week, either within or outside of our relationship. What can I do to help you with this?
What specific actions or words from me made you feel understood and supported last week?
Can you recall a moment from last week when you felt deeply connected to me and/or our relationship on an emotional level? What was it and how did it make you feel?
Can you recall a moment from last week when you felt disconnected from me and/or our relationship? What was it and how did it make you feel?
Was there a specific moment from last week where my actions or words hurt you? If so, can you describe it? What can I do to make it up to you?
What can I do to make it easier for you to ask for help or support in the upcoming week?
How can we continue to provide emotional support to each other during busy or challenging times?
What’s one thing I could do differently to make you feel more supported and valued in our relationship this week? I.e. what do you want to see more of/less of?
What can I do to fulfill any unmet needs from the past?
In what ways can we prioritise self-care and personal growth within our relationship?
What can we do as a couple to create a healthy balance between meeting our individual needs and nurturing our relationship?
How can we create more shared experiences and memories next week that deepen our emotional connection?
How would you rate our communication over the past week?
In what areas did we excel in our communication this week, and how can we continue to build on those strengths?
How well did I communicate my needs, desires, and boundaries to you this week?
Did you notice any recurring negative communication patterns that concerned you? If so, what were they, and how can we work together to improve them?
How can I better listen and understand your needs and concerns during our conversations?
During moments of disagreement or tension, did I make you feel understood,, heard, and respected? If not, what specific areas can I improve on?
What can I do better to create a safe and supportive space for intimate conversations?
Did you feel I demonstrated patience and empathy when discussing sensitive matters? In what way?
Was there a time last week when you felt misunderstood or unheard by me? If so, please share what happened.
How can I do better in validating your perspective and emotions?
What can I do to encourage more moments of openness and honesty in our communication, without fear of judgment or criticism?
Is there a specific topic or issue you’d like to bring up that we haven’t discussed yet? If so, please share it.
Were we able to resolve conflicts or disagreements effectively this week?
How well did we create a safe and trusting environment for each other to share vulnerabilities and emotions during conflicts?
Are there any fears, judgments, or resentments that you’re holding onto from last week? If so, how are they affecting you and/or our relationship?
What can we do to improve how we address difficult issues going forward?
Did I effectively communicate my needs and concerns during conflicts? How can I express myself better in the future?
How well did I respond to constructive criticism or feedback this week?
How can I provide constructive criticism and feedback in a way that promotes growth and understanding?
How well did I take responsibility for my actions?
Did I genuinely express remorse in my apologies for my mistakes? How do you know this to be true?
Did we learn any new conflict resolution skills last week? How can we use these to address future conflicts with empathy and understanding?
How can I support you better during times of conflict or disagreement?
Did I manage my emotions effectively during our disagreements? What can I do to regulate them better to engage in more constructive discussions?
How can I improve my emotional presence and responsiveness during disagreements?
Did I take proactive steps to address any unresolved conflicts from last week? How can I prevent them from carrying over into the next week?
What’s your level of satisfaction with the progress we’ve made toward our shared goals this week?
What successes and challenges did we experience in relation to our goals last week, and how are you feeling about them? What specific actions can we take to improve our communication and alignment toward our shared goals?
How did I support you in reaching our shared goals this week?
What areas or aspects of our progress toward our shared goals do you think need more attention or improvement?
What are some goals you would to work on together next week?
What can we do to better support each other’s personal growth both within and outside of our relationship?
How do you feel about our communication and alignment toward our goals last week? What can we do better in this area?
What are your hopes and expectations for our relationship in the upcoming week?
What potential obstacles or difficulties do you think we might face in the upcoming week in relation to our goals? How can we work through these together?
What aspects of our relationship do you feel could be enhanced, changed, or adjusted next week?
What’s really working in our relationship right now?
What are we celebrating?
Is there anything from the last week / month that feels unresolved?
Do we feel close and connected to each other?
Do we feel supported? Is there anything we can do to better support each other?
Is there anything we’ve been avoiding?
Is there anything we’d like to be acknowledged or appreciated for?
Are we fulfilling our responsibilities and commitments in our relationship?
How do we feel about our sexual connection?
How do we feel personally? Do we feel like we’re living aligned as the people we want to be?
Are we feeling good about ourselves as a parenting team?
Are we on track with our personal and relationship goals?
Is there anything else we want to share?
`.split('\n').filter( q => q.trim() !== '' );

const question = questions[Math.floor(Math.random() * questions.length)];
const questionElement = document.getElementById( 'question' );
questionElement.innerHTML = question;

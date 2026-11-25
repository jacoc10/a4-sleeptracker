--Readme document for Jacob Chang, jacoc10@uci.edu, 34304599, A4 group 80--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
    Around 13 hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://ionic.io/ionicons
https://www.youtube.com/watch?v=-3iryHiZMVk
ionicframework.com/docs/angular/build-options?
I think the most useful thing to me when completing this assingment was example that was included onto the UI components. It had a working prototype and the associated complete
and consulting those really helped. I used ionicons for all my icons and on the framework website I specifically looked at the card, toolbar, segment, content, and tabs. For 
backing up the save data I did have trouble getting the data to save as I was trying to implement it, I did query a error I found using F12 and found out I needed to import the ionic
storage module into main, as well as how it was saving as a basic JSON object so I had to recreate the objects as I loaded in the data. 



4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

no

5. Is there anything special we need to know in order to run your code?
I removed the default data, would duplicate on data save


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
The app is very simple, I wasn't designing for a specifc audience but focusing more on simplicity and clarity. 


7. Did you design your app specifically for iOS or Android, or both?
Its more suitable for Android devices, doesn't really fit the IOS asthetic and their 


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
They are able to choose a starting time and wake-up time. I was thinking of making it so they would be able to start it and end it whenever, but I felt like
it was a high likehood that someone would forget to log when they would wake up. 


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
They are able to choose on button 1-7 and it the time logs automatically as when they chose it. I made it this way because the Stanford Data relies on sampling throughout the 
day and an accurate measurment would be exactly how a person feels at the moment.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
There is a log page and they are able to choose to look at sleepiness logged or overnight sleep. I followed the provided summary onto what I should display, so I opted
to not include when overnight sleep ended. 


11. Which feature choose--using a native device resource, backing up logged data, or both?
    Backing up logged data, I used ionic storage the and used the storage typescript file shown in class and made it work with the service. 


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
    no


13. If you backed up logged data, where does it back up to?
    I used ionic storage and looking at through F12 on the browser it stores the data using Indexed DB.

14. How does your app implement or follow principles of good mobile design?
Some principles I followed were, useful initial view, navigation, modals, icons, and colors. My upmost priorites were ease of use and clarity. 

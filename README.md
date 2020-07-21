# NYPD FORCE USE

_Data Visualization for NYPD Force Use Data_

NYPD Force Use organizes and displays the NYPD use of force data that can be found at https://www1.nyc.gov/site/nypd/stats/reports-analysis/use-of-force-data.page. The originally unorganized data is organized into database format and multiple powerful view options are presented.

This app uses a PostgreSQL database, Sequelize.js, Express.js, React.js, React-Redux, Redux.js, and Victory. The original data was presented in a disorganized and hard to utilize excel document. In order to make this app, a new database schema had to be created. Using that schema to match to the data then required some minor use of Visual Basic to alter the excel document format slightly so that the comma separated values could be converted to JSON in large batches and seeded into the database. That data is displayed to make the best use of the dataset's size. A user who is viewing an extremely large section of the data will see a simplified view, while a user viewing a smaller slice of the data can view more detail. Users can also copy the data used to make the chart by clicking a copy data button. That data is in JSON format and is much easier to use for programmers who might use the data.

The intended users of this application are citizens interested in NYPD force use patterns, researchers looking for quick views of force use over time or in specific police commands, or reporters who want to use the graphs or data in their reporting.

All users may use the data and charts as they wish. Hopefully this will bring more conversation to an important topic. As is stated at the homepage of the application, the data was reported by the NYPD, and to the best of my knowledge the data reflected in the app is exactly the data presented by the NYPD. If there are any errors please kindly inform me.

It uses the FullStack Academy's boilermaker as a starting point. You can few the original readme by viewing the FS_README.md file. The boilerplate uses Express/Sequelize and React/Redux.

You can view the app at https://nypd-force-use.herokuapp.com/

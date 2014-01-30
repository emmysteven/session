Sessions
========

WHAT IS sessions.js

session.js handles session termination on the client side by monitoring user's inactivity for a specified period and then redirects to a page on the server that logs the user out!!!

How Can I Use session.js?

sessions.init('your url here', {time: 'this is optional, defaults to 1200', element: 'the id of the div'});
example sessions.init('../bin/logout.asp', {time: 200, element: 'count_down'});
            sessions.int('../bin/logout.jsp', null);

Configuration:
mUrl: The url that logs the user out after inactivity
time: This argument is optional, it is the time or period of inactivity which defaults to 20 minutes when it is skipped
element: This argument is optional, you can specify the id of the element on your webpage that will display the countdown when the script senses inactivity

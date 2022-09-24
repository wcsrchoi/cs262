a. What React construct is used to implement separate pages of an application (cf. separate webpages on the Web)?
--> Stack navigator is used to implement separate pages and RouteName is used to navigate those pages.

b. What is the React Navigation concept that is analogous to a URL/URI on the Web?
--> It is like a link, which navigates to the page that you have pressed.

c. The onPress event handler for the home screen component is specified as () => navigation.navigate('Details'). Can we just say navigation.navigate('Details')? Why or why not?
--> No, because it is calling function "navigation.navigate('Details')".

d. Explain how the hard-coded movie list is presented as a list of titles on the homepage.
--> FlatList is used to create list vertically.

e. Explain how the details screen presents the details of a single movie.
--> the function call "navigation.navigate('Details', item)" navigates to the route of the clicked item's detail screen. In the detail screen, we see item's title, rating, description.
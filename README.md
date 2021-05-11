# Search Github User

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## npm modules added

* axios - to make an API call

## CSS library used

* Bootstrap - 4.3.1

## Icons used

* FontAwesome - 5.10.0

### Behavior

* The application loads to show the search component

* The user can enter a string in the 'Login' input field and clicks the 'Submit' button

* If there are any relevant results received from https://api.github.com/search/users?q={login}, where `login` is the string entered by the user,
  they will be displayed.

* Each page shows 9 results. The results will be divided into multiple pages if the results are more than 9.

* The results will initally be displayed in the order received but can be sorted in ascending or descending order using login string
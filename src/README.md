# Practice: Contact List
Build four components:

1. A <strong>ContactCollection </strong>component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
1. A <strong>Contact</strong> component that displays a person's name, phone number, and address.
1. A <strong>ContactList</strong> component that displays all contacts. It should import the Contact component and the ContactCollection component.
1. A <strong>ContactForm</strong> component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the <strong> ContactCollection</strong> component.

In ```main.js```, import the <strong>ContactList</strong> component and the <strong>ContactForm</strong> component.

The user should see the contact form at the top of the view, and the list of contacts underneath it.
```
Bonus: Are there any other modules that could be made? Do any modules have more than one possible responsibility? Perhaps something that is a general utility function.
```

# Practice: Product Ordering
Your task is to simulate a product listing page like you would find on Etsy, Amazon, or Ebay. This application should implement the following features.

1. Display an individual product component. Each product should have a title, short description, price, quantity, and an image.
1. Display the application information in a navigation bar at the top of the page.
   1. The name of the company - Betsy
   1. Three links: Categories, Orders, and Log Out (_these links won't actually do anything, you're just practicing making the navigation bar a component)
1. Display a review list component that contains a maximum of 3 product review components beneath a product. You can use <em>hipster ipsum</em> for the reviews themselves.

## Technical Requirements
1. While you are developing, make sure Grunt is verifying your JavaScript syntax every time you save a file.
1. Grunt should be compiling your modules each time you save a JavaScript file.
1. Grunt should be minifying your code each time you save a JavaScript file.
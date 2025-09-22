# IGR203
IGR203 User-Centered Design WebApp Project

## Description
The project consists of designing an interactive restaurant menu. We chose to build a salad bar while shaping the menu to resemble a fast-food interface. Inspired by the growing trend of healthy and customizable quick dining, the project aims to deliver a friendly and intuitive experience. By combining the efficiency of a self-service ordering terminal, including a loyalty program, with the freshness and customization of a salad bar, the goal is to create a modern and satisfying culinary journey for customers.

**Group project:** this work was completed by Servane Desvignes, Marie Pizzini, and Celio Boulay as part of a User Centered Design course at Télécom Paris.  
**My role (Marie):** contributed to both the frontend and backend of the web app using JavaScript, CSS, and HTML.

## Features
- Interactive menu
- Salad customization
- Loyalty program
- Saved customer habits
- Search bar
- Language selection

![App Screenshot](./media/screen/screen.png)  
Screenshots of the main features

## Languages used
- HTML for the site structure  
- CSS for design and layout  
- JavaScript for interactive menu logic and the cart system

## Code organization
- All HTML pages are in the `source` folder along with `serveur.js`, which starts the server  
- `css` and `js` folders contain the files associated with the web pages  
- A `json` folder contains the dictionaries used for site translation  
- A `media` folder contains the images used across pages

Since we did not implement a database for this coursework, some pages were duplicated and hardcoded. This temporary structure can be improved later by introducing a structured data layer with JSON files or a proper database. The code is intended to be adaptable. Data such as the cart total or selected dishes are stored locally for now but could be stored on a server once a database is added.

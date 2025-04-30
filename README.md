[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Oo90wc_Q)
# React.js - User Form Exercise

**Goal:** To practice managing and updating state in React using the `useState` hook, with a focus on controlled components.

## Instructions

Run `npm create vite@latest react-form-exercise` to set up your project.

Create a React application with a simple user form that includes three text fields:  
**"First Name"**, **"Last Name"**, **"Age"**, and **"Favorite Foods"** checkboxes.

You will also implement two buttons: **"Display User"** and **"Clear"**.

The application should:

1. Allow users to input values into the text fields and select options for the favorite foods.
2. Display a greeting message when the "Display User" button is clicked.
3. Clear the form and hide the greeting when the "Clear" button is clicked.

## Tasks

### 1. User Form

- Create a form with the following fields:
  - `firstname` (text input)
  - `lastname` (text input)
  - `age` (number input)
  - `favoriteFoods` (checkboxes):
    - Options: **Chicken**, **Beef**, **Vegetables**, **Dessert**, **Pork**

- Use React's `useState` hook to manage the form's state.

### 2. Display User Button

- Create a button labeled **"Display User"**.
- When clicked:
  - Display a greeting message below the form:
    - **Example:** `"Hello John Doe. You are 25 years old and your favorite foods are: Chicken, Dessert."`
  - Ensure the values are updated dynamically based on the input fields and selected checkboxes.

### 3. Clear Button

- Create a button labeled **"Clear"**.
- When clicked:
  - Reset all fields (`firstname`, `lastname`, `age`, `favoriteFoods`) to empty strings, initial values, or deselected states.
  - Hide the greeting message.

## Requirements

1. Use React's `useState` hook for managing form inputs and the display state.
2. Use controlled components for the input fields (i.e., `value` bound to state and updated via `onChange`).
3. Use the `checked` attribute to manage the state of checkboxes for favorite foods.
4. The greeting message should dynamically update based on the form's state.
5. Commit and push your changes once you are done.

## App.tsx

```tsx
const App = () => {
  /* Your states here */

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button>Display User</button>
      <button>Clear</button>

      <div className="output">
        {/* Display the greeting here */}
      </div>
    </div>
  );
};

export default App;
```

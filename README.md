# Kitchen Menu App - Part 2

## Project Overview
A React Native mobile application for chefs to manage their restaurant menu. This app allows adding, viewing, and filtering menu items by course type.

## Features
- **Add Menu Items**: Create new dishes with name, description, course type, and price
- **Menu Display**: View all menu items in a clean, organized list
- **Course Filtering**: Filter items by Starter, Main Course, or Dessert
- **Item Counter**: Real-time display of total menu items
- **Navigation**: Smooth navigation between Home and Add Item screens

## Technical Stack
- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Native Stack)
- **Language**: TypeScript
- **Styling**: React Native StyleSheet

  ## Usage
 1. View Menu: "Launch app to see the home screen with all menu items.
 2. Add Item: Tap "Add New Dish" to navigate to the add form.
 3. Filter: Use course button to filter the menu list.
 4. Navigate: Use header back button or in-app navigation.

## Project Structure 
# Part2/
* ├── src/
* │ ├── screens/
* │ │ ├── HomeScreen.tsx
* │ │ └── AddMenuItemScreen.tsx
* │ └── types/
* │ └── types.ts
* ├── App.tsx
* ├── package.json
* └── tsconfig.json

## App Screenshots 
* [<img width="1470" height="866" alt="homepage" src="https://github.com/user-attachments/assets/6966c54d-772f-44a7-8a00-c29283a6b44d" />] The Home page Screen.

** ![<img width="1476" height="861" alt="Additem page" src="https://github.com/user-attachments/assets/d18623ce-5b94-4991-9f3a-069f26ec9f41" />] AddItem screen.

## GitHub link
* The Link: https://github.com/Soraya2005/Mast-Part2.git

## Youtube link
* The link:https://youtu.be/mEG-KNwMA0g?si=AP5y_KyP4cctGhMF
* The youtube video shows how the application works.

## Part 3 (Final submission)

### Additional Features Implemented
- **Manage Menu Screen**: Separate Screen for adding/removing menu items
- **Average Price Calculation**: Automatic Calculation and display of average prices per course
- **Guest View Screen**: Dedicated screen for guests with filtering capabilities
- **Delete Functionality**: Ability to remove menu items with confirmation

### Technical Improvements
- **Code Refactoring**: Better file organization with utils/ folder
- **Type Safety**: Enhance TypeScript interfaces
- **State Management**: Improved data flow and immutability

## Change Log
# Changelog - Part 3 to Final PoE

## New Features Added

### 1. Separate Manage Menu Screen
- Moved add/remove functionality from home screen to dedicated screen
- Added ability to delete menu items with confirmation dialog
- Improved user experience for menu management

### 2. Average Price Calculation
- Automatic calculation of average prices per course (starter, main, dessert)
- Display of average prices on home screen
- Overall average price calculation
- Real-time updates when menu changes

### 3. Guest View Screen
- Separate screen designed for guests
- Filtering by course type (All, Starters, Mains, Desserts)
- Clean, simple interface without management features
- Item count display for each filter

### 4. Enhanced Data Structure
- Changed price from string to number type for calculations
- Added PriceStatistics interface for type safety
- Improved data consistency

## Code Refactoring Improvements

### 1. File Structure Organization
- Created `utils/` folder for utility functions
- Better separation of concerns
- More maintainable code structure

### 2. Utility Functions
- `calculateAveragePrices()` function for statistical calculations
- Modular and reusable code
- Centralized business logic

### 3. Component Organization
- Each screen has single responsibility
- HomeScreen: Display and navigation
- ManageMenuScreen: Add/remove functionality  
- GuestScreen: Filtering and display
- Better props interfaces and type safety

### 4. State Management
- Centralized menu items state in App.tsx
- Proper add/remove functionality with immutability
- Efficient re-rendering and state updates

## Bug Fixes and Improvements
- Fixed price calculation accuracy
- Improved error handling with user alerts
- Better user feedback for actions
- Enhanced navigation flow

##Youtube link 
* This is the new link for the final version: https://youtu.be/XMsSVG7M-bU?si=mthmRyouflAGqQo9

## Student details
* Full Name: Soraya Iness Pechera Rogombe
* Student No: ST10493837
* Module: Mobile App Scripting / Mast5112



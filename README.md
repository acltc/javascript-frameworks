## Overview

This repository is used to compare different JavaScript frameworks from a teaching perspective. Similar to TodoMVC, but here the goal is to have each commit match across all the differing frameworks. Additionally, each commit should represent a teachable amount of material.

The app itself is a basic CRUD app for interesting people (with name and bio attributes).

The master branch has a Person model with validations and seeded data, as well as an API for displaying, creating, updating, and destroying a person. The master branch has no views other than the empty root view.

Each other branch is for a different JavaScript framework. Each JavaScript framework will implement the following features:
* Install the framework (hello world)
* Display all the people (using fixture data)
* Create a person (using fixture data)
* Delete a person (using fixture data)
* Toggle the bio on click
* Change the bio styling on click
* Filter the people list with an input field
* Autocomplete the filter input field
* Order the people list with attribute buttons
* Reverse order the list when clicking a button twice
* Display all the people (using the backend database)
* Create a person (using the backend database)
* Delete a person (using the backend database)

## Contributors

To add a new JavaScript framework to the repository:
* Clone the repository
* Create a branch from master (named after the js framework)
* Implement each of the features listed in the Overview. Each feature should be a single commit. Use long commit messages if there are detailed instructions (like installing the framework).
* Push the branch to GitHub.

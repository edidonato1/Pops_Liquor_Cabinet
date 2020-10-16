# Pop's Liquor Cabinet


## Project Description

Pop's Liquor Cabinet is an interactive inventory manager for the at-home bartender. The app allows you to keep track of the bottles in your liquor cabinet, and keep track of how much liquor is in each bottle, so you'll know when your sneaky 16-year-old and their friends have dipped into your stash.  The app remotely stores your inventory, which you can add to and to, remove items from, and update the current amounts in each bottle.  

The application doubles as an experimental playground for your cocktail endeavors offering a cocktail recipe creator that will serve as a Rolodex for all of your cocktail recipes.


## API and Data Sample



```
{
    "records": [
        {
            "id": "recKxrzZqBx3MBEg5",
            "fields": {
                "bottle": "Elijah Craig Bourbon",
                "category": "whiskey",
                "price": "25",
                "amountFull": "1",
                "bottleSizes": "750"
            },
            "createdTime": "2020-10-08T23:29:56.000Z"
        },
        {
            "id": "recC1y1ElcdDlK3yN",
            "fields": {
                "bottle": "Campari",
                "category": "liqueur",
                "price": "22",
                "amountFull": ".75",
                "bottleSizes": "750"
            },
            "createdTime": "2020-10-08T23:29:56.000Z"
        },
        {
            "id": "reca6FFerWqrgEJex",
            "fields": {
                "bottle": "Don Julio Reposado",
                "category": "tequila",
                "price": "48",
                "bottleSizes": "750",
                "amountFull": ".5"
            },
            "createdTime": "2020-10-08T23:29:56.000Z"
        }
    ],
    "offset": "reca6FFerWqrgEJex"
}
```

---
## Wireframes

https://github.com/edidonato1/Pops_Liquor_Cabinet/tree/main/src/wireframes

---
## Component Hierarchy

https://github.com/edidonato1/Pops_Liquor_Cabinet/blob/main/src/proposal-assets/component-flowchart.png

---
## MVP/PostMVP

#### MVP

- Render a multi-page application -[x]
- Synchronize Airtable API to get and post data to and from UI -[x]
  - Ability to add new bottles -[x]
  - Ability to update current inventory -[x]
  - Ability to delete inventory -[x]
- React Router is used for nagivation between pages and components 
- Data-dependent components are responsive to user input -[x]
- Data-dependent components render accurate information when applicable -[x]
- Application is tastefully styled with at least three query breakpoints -[x]
- Code is clean and linted to industry standards -[x]
- Application is delployed via Netlify -[x]


#### PostMVP  

- Import component library for CSS styling -[]
- Bottles are automatically deleted from inventory when % full reaches zero -[x] 
- Component-based horizontal scroll menu -[x]
- Additional form, connected to additional Airtable API for user to create a personal cocktail directory -[]
- Graphic that reflects the amount of product in the current bottle on "grab bottle" page -[]
- Cocktail costing sheet for professional bartenders -[]
- Get Notes modal when item is clicked in inventory -[]*
- Add, update, and remove tasting notes - [x]

---

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Oct 8-9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Oct 9| Project Approval | Complete
|Oct 12| Core Application Structure (HTML, CSS, etc.) | Complete
|Oct 12| Pseudocode / Actual Code | Complete
|Oct 13| MVP | Complete
|Oct 15| Post-MVP | Complete
|Oct 16| Presentations | Incomplete

---
## Priority Matrix

https://github.com/edidonato1/Pops_Liquor_Cabinet/blob/main/src/proposal-assets/priority-matrix.png

---
## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Build Airtable API | H | 2hrs| 1hr |
| Establish Axios Get, Post & Delete Requests | H | 6hrs| 6hrs |
| Base Component Structure | H | 8hrs| 12hrs |
| CSS Layout & Styling  | H | 10hrs| 15hrs |
| Responsive Design  | H | 4hrs| 6hrs |
| *Bring in Rolodex API* *| L | 1hr| N/A  | 
| *Rolodex Form Component* *| L | 4hr| N/A  |
| *Bottle Amount Graphic* *| L | 6hr| N/A  |
| *Update Tasting Notes Component* *  | L | 4hrs| 6hrs |
| *Horizontal Scrolling Home Menu* *  | L| 4hrs| 3hrs |
| Misc. Troubleshooting & Functionality | M | - - | 20hrs |
| Total | - -  | 41hrs| 69hrs  |

 *Post-MVP * *

---
## Code Snippet

In general, I'm proud of this component as a whole, as it took me hours to dial down how to get the increment functions to affect the inventory itself, which was being passed down through props.  Initially I was using state, and trying to set the initial state of the amount to the current bottle selection.  State was a step behind the count in the UI, and the next selection wouldn't set a new initial state for the amount.  I spent hours down a rabbithole tracking and running the selection history and update history against each other in their respective arrays.  I got help with the solution, which funny enough, was to not use state...

```
  const increment = () => {
    if (props.bottleData.amountFull < 1) {
      handleClick((props.bottleData.amountFull + .1), addNote);
      props.setInventoryRefresh(!props.inventoryRefresh);
    }
  }

  const decrement = () => {
    handleClick((props.bottleData.amountFull - .1), addNote);
    props.setInventoryRefresh(!props.inventoryRefresh);
    props.bottleData.amountFull <= .2 ?
      setTimeout(function () {
        window.confirm('Remove empty bottle from inventory?') ?
          handleDelete() :
          alert("OK, we'll keep it in there for you");
      }, 800) :
      props.setInventoryRefresh(!props.inventoryRefresh);
  }


```


## SWOT Analysis

### Strengths:
- The subject matter of the application is one that I have an expertise in, and I am very clear with  myself as to the tasks that the app needs to accomplish  in order to be something that people would use.
- I spent a fair amount of time wireframing my project, and I have a pretty clear vision of what I want to accomplish with the layout.  


### Weaknesses:
- Certain parts of React are a bit of a mystery to me.  I'm confident that I'll be able to complete the necessities of the project, but my goals extending beyond MVP requirements will be a challenge with my current skillset.
- I haven't been able to figure out how to add subcategories in Airtable.  It isn't necessary to the project, but would increase functionality.


### Opportunities:
- Given that I'm able to accompolish the core function of the application early, the added UX benefits of the post-MVP agenda have the ability to make this a truly useful and user-friendly application that I hope to be proud of.
- This is more internal than anything, but I see this project as an opportunity to reinforce my base knowledge of React, and hopefully implement some methods that we haven't learned in the course.

### Threats:
- I don't want to underestimate the complex nature of React.
- If i'm unable to manipulate the router to make the page seamlessly navigable, the goals of the application won't be met to my standards.


## Change Log
 
10.13 - Removed option for user to enter the amount in the bottle they're adding in the form.
      - This frees space in the AddBottle UI and removes an unnecessary step, assuming all new bottles added to the collection are full.  User can ajust afterwards if that isn't the case.

10.13 - Added horizontal scroll menu to UI.
      - As opposed to initial wireframes mockup, gives the user full full access to the features of the app from the home menu

10.15 - Added Tasting notes functionality.
      - While bottle is selected in UpdateBottle component, user can choose to add, edit, or remove tasting notes for the current selection.  
        - This is the one optional field in the AddBottle component, and is meant to be updated with time.


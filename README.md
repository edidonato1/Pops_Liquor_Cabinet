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

https://github.com/edidonato1/Pops_Liquor_Cabinet/blob/main/src/proposal-assets/plc-component-flowchart.png

---
## MVP/PostMVP

#### MVP

- Render a multi-page application -[]
- Synchronize Airtable API to get and post data to and from UI -[]
  - Ability to add new bottles -[]
  - Ability to update current inventory -[]
  - Ability to delete inventory -[]
- React Router is used for nagivation between pages and components 
- Data-dependent components are responsive to user input -[]
- Data-dependent components render accurate information when applicable -[]
- Application is tastefully styled with at least three query breakpoints -[]
- Code is clean and linted to industry standards -[]
- Application is delployed via Netlify -[]


#### PostMVP  

- Import component library for CSS styling -[]
- Bottles are automatically deleted from inventory when % full reaches zero -[] 
- Additional form, connected to additional Airtable API for user to create a personal cocktail directory -[]
- Graphic that reflects the amount of product in the current bottle on "grab bottle" page -[]
- Cocktail costing sheet for professional bartenders -[]

---

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Oct 8-9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Oct 9| Project Approval | Incomplete
|Oct 12| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Oct 12| Pseudocode / Actual Code | Incomplete
|Oct 13| MVP | Incomplete
|Oct 15| Post-MVP | Incomplete
|Oct 16| Presentations | Incomplete

---
## Priority Matrix

https://github.com/edidonato1/Pops_Liquor_Cabinet/blob/main/src/proposal-assets/priority-matrix.png

---
## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Build Airtable API | H | 2hrs| - - |
| Base Component Structure | H | 8hrs| - - |
| Establish Axios Get, Post & Delete Requests | H | 6hrs| - - |
| CSS Layout & Styling  | H | 10hrs| - - |
| Responsive Design  | H | 4hrs| - -  |
| *Bring in Rolodex API* *| L | 1hr| - -  |
| *Rolodex Form Component* *| L | 4hr| - -  |
| *Bottle Amount Graphic* *| L | 6hr| - -  |
| Total | - -  | 41hrs| - -  |

 *Post-MVP * *

---
## Code Snippet


```
const Eddie() => isTired ? doThisLater : stayUpAllNight

```

---
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
 

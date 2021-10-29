# Resume Generator

If you are a developer and find it easier to use css layouts over Microsoft Word, then give this a try. It will take time to plan your layout at first, but being a developer you'll be playing in your own backyard. 

Nevertheless, you can be rest assured of a great resume pdf at the end of the exercise. Look at the sample file :)

## How to run?

In the project directory, you can run:

### `npm install`

and then

### `npm start`

This would run the app in the **development mode**.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How to generate the resume pdf

To generate the resume pdf, you can run:

### `npm run generate`

The above command should be run in a new terminal while the app is still running in **development mode**.

## How to make changes?

The project is made such that the only few changes that need to be done are in the "*data*" files.

However, you are free to play around with the layout and cater to your design.

## If you do decide to play around, few things that are good to know

- The PDF is divided in the following manner
    - Header
        - This contains the
            - Headshot, and
            - Summary
                - To change the color of the icons here, you can search for the icon color(#8EB7DD) in the entire project and replace the hex code.
                - If you have cloned the basic setup, there are 5 places where this needs to be changed. One scss file and the rest are svg icons.
    - Content
        - This contains everything outside the header and is divided into 2 pages - pageOne and pageTwo

- Each horizontal section is divided into 2 columns.
    - The first item is always the heading of the section.
    - The second item can be the value for that heading or a thematic-break.
    - A thematic-break is the blue separator line.

## What technologies have been used?

- React - Forms the base of the app in development mode
- Puppeteer - Used for emulating the app in development mode and generating the pdf for the same
- Sass - Css Preprocessor

> PS: Feel free to reach out in case of any queries at https://ashwinbhatkal.com/contact
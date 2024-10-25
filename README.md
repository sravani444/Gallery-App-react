# Gallery-App-react
In this project, let's build a Gallery App by applying the Lists we have learned till now.


### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif" alt="login-app-output" style="max-width:50%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/login-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/login-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the first image in the list should be displayed
- When the user clicks on a thumbnail, then the corresponding image should be displayed
- The **Gallery** component is provided with **imagesList.** It consists of a list of image details objects with the following properties in each object

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

  - src/components/Gallery/index.js
  - src/components/Gallery/index.css
  - src/components/ThumbnailItem/index.js
  - src/components/ThumbnailItem/index.css

</details>

### Important Note

<details>
<summary>Click to view</summary>
<br/>
**The following instructions are required for the tests to pass**

 - The selected image should have the alt as the value of the key **imageAltText** from each image details object provided
 - The thumbnail images should have the alt as values of the key **thumbnailAltText** from each image details object provided
</details>

### Quick Tips
<details>

- You can use the CSS **opacity** property to set the degree to which content behind an element is hidden. It accepts a value in the range of 0.0 to 1.0 inclusive
  -  opacity: 0.5;
    
</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.

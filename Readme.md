# Custom web home
## Introduction
The Teach on Mars application is great out of the box, and its home screen may already be configured to suit your needs and graphical charter. But we thought some of you might like something more.

So here comes the Custom web home that allows you to create pretty much any kind of home screen as long as it is web based. This web home will be able to interact with the standard part of the application.

This project will provide the tools you need to develop a custom web home and test it against dummy data without leaving your development environment.

You will find more detailed information in the [Custom web home documentation](https://github.com/TeachonMars/CustomWebHome/raw/master/doc/ToM%20Custom%20Web%20Home%20v18.3.pdf).

## Walk through
### Requirements
* Any Git client
* A local web server
* Your favorite web IDE

### Step by step
1. Clone this repository in a directory on your local web server
2. Have the _simulator_ directory accessible through a URL on your local server (it must be under the same domain to avoid cross-domain issues)
3. Open the _simulator_ URL you've just set up in your favorite web browser
4. Fill the URL in the header with the URL you're using to test your development


## How to use the simulator ##
### Open the simulator URL

If you local server root is

    http://www.local

and the root of this package is

    CustomWebHome/

then the URL to access the simulator should be

    http://www.local/CustomWebHome/simulator

### The simulator interface

![The home web home simulator interface](https://raw.githubusercontent.com/TeachonMars/CustomWebHome/master/doc/simulator-1.png "The home web home simulator interface")

**Caption**
1. URL input: this is where you can enter an URL where the built version of your project can be viewed.
2. Bar toggle link that allows you to hide and show the bar

When opening the simulator, the first screen is an example of a custom web home loaded in the simulator. This example is a simple home with links to the application main screens (wall, profile, catalog, etc.).

Other examples are available if you are looking for inspiration. You can find them in the _examples_ directory. To visualize them, you just need to change the URL in the _URL input_.

Currently available examples:
* Simple links to main screens: `../simple-links-cosmetics/`
* Root categories: `../categories-cosmetics/`

### What will I gain from using the simulator

The custom home you are developing will need to interact to some degree with the application. To do so, the custom home will include calls to Javascript functions that the application provides. But to embed the custom home in the application, the Teach on Mars product team has to build a new version of the application.

Any developer would need to be able to test his work against some data and some Javascript API. This is what the simulator provides in the form of:
* Dummy data to test the design implementation
* Validation of Javascript calls to test the functional implementation

#### Test the design

Any call to a `ToM.appContent.*` method will provide dummy data you can use to populate the screen. All the content provided by the simulator is consistent with what the application will eventually provide in terms of size and data type.
* Images have the right ratio and size
* The data is structured in JSON with the same keys as in the application
* The types of each data is consistent with what will be provided to the home once in the application

#### Test the navigation

Any call to a `ToM.navigation.*` method will will validated by the simulator through an alert popup that will describe the action triggered by this call.

#### Check for errors

Any call to an undefined method in the JS API will result in an error that can be monitored in any web browser inspector.

### Customizing the dummy data

The default dummy data provided by the simulator is based on a a dummy client called Cosmetics and include texts and images that are related to the cosmetic industry. But it is possible to change the dummy assets, here's how:

* To change the texts of the training courses, categories, profile and communications, open the file `simulator/js/ToM-dummy.js` and replace the texts that your wish to change.
* To change the images provided by the simulator for training courses, categories, profile and communications, just replace the images in `simulator/assets/` (be careful not to change the ratio and size of the images).





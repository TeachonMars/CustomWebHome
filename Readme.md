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







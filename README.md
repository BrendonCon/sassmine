# Sassmine
Sassmine is a collection of mixins available for you to create 
unit tests in Sass. Inspired by Jasmine for JavaScript unit testing, 
Sassmine makes use of similiar naming for it's mixins as Jasmine does for it's functions. 

At the moment Sassmine compiles test results to a CSS file. The test 
results will, in the not so distant future, be output and formatted to the console. 

## Setup
Pull down the repo and install node packages via npm install:

``` 
npm install
```
Then run gulp:

``` 
gulp
```
Gulp will run the default task which runs a Sass task
to build the example.css, it also concats the Sassmine 
utility into a single file in the build folder for you 
to include in your projects:

```sass
@import "pathToSassmine/sassmine";
``` 

## Mixins
### Statements
- **describe($name)**: creates a describe block
- **xdescribe($name)**: disables a describe block
- **it($label)**: creates an it block
- **xit($label)**: disables it block

### Asserts
- **toBeLesser($actual, $expected)**: actual value to be less than the expected value
- **toBeGreater($actual, $expected)**: actual value to be greater than the expected value
- **toEqual($actual, $expected)**: actual value to be equal to the expected value
- **toNotEqual($actual, $expected)**: actual value to not equal the expected value
- **toBeDefined($value)**: value to be defined
- **toBeUndefined($value)**: value to be undefined
- **toBeNull($value)**: value must be null
- **toNotBeNull($value)**: value must not be null
- **toBeColor($value)**: value must be a color value
- **toBeNaN($value)**: value must not be a number

## Example
Sassmine offers a friendly syntax most similar to Jasmine
for JavaScript. Sassmine asserts are slightly different and have been
compacted into slight variants of the known JS equivalents. 

```sass
$var: 10;

@mixin size($width, $height) {
  height: $height;
  width: $width;
}

@include describe("Test Module") {
  @include it("should be defined") {
    @include toBeDefined(var);  
    @include toBeDefined(vaerwr);
  }
  
  @include it("should not be defined") {
    @include toBeUndefined(size);
    @include toBeUndefined(abs);
    @include toBeUndefined($var);
  }
  
  @include it("should equal") {
    @include toEqual(20, 20);
    @include toEqual(yellow, blue);
  }
  
  @include it("should not equal") {
    @include toNotEqual(20, 20);
    @include toNotEqual(#eee, #ccc);
    @include toNotEqual(yellow, blue);
  }
  
  @include it("should be greater") {
    @include toBeGreater(5, 6);
    @include toBeGreater(20, 600);
  }
  
  @include it("should be lesser") {
    @include toBeLesser(5, 6);
    @include toBeLesser(1000, 50);
  }
  
  @include it("should not be a number") {
    @include toBeNaN(string);
    @include toBeNaN(10);
  }
  
  @include it("should be a color") {
    @include toBeColor(red);  
    @include toBeColor(rgba(0, 0, 0, 0.5));  
    @include toBeColor(#000);
    @include toBeColor(name);
  }
  
  @include it("should be null") {
    @include toBeNull(null);
    @include toBeNull(#333);
  }
  
  @include it("should not be null") {
    @include toNotBeNull(null);
    @include toNotBeNull(#333);
  }
}
```
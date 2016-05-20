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
- **describe($name)**
- **xdescribe($name)**
- **it($label)**
- **xit($label)**

### Asserts
- **toBeLesser($actual, $expected)**
- **toBeGreater($actual, $expected)**
- **toEqual($actual, $expected)**
- **toNotEqual($actual, $expected)**
- **toBeCloseTo($actual, $expected, $precision)**
- **toBeDefined($value)**
- **toBeUndefined($value)**
- **toBeNull($value)**
- **toNotBeNull($value)**
- **toBeColor($value)**
- **toBeNaN($value)**
- **toContain($string, $subString)**

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
  
  @include it("should be close to") {
    @include toBeCloseTo(3, 5);
    @include toBeCloseTo(3, 5, 1);
  }
}
```
# BEMForce

## Config

## Mixins
- **block**: Generates a block selector
- **element**: Generates an element selector based off of a block
- **modifier**: Generates a modifier selector based off of a block or an element or both

## Usage 
**Scss:**
```sass
@include block(header) {
  height: 10%;
  
  @include modifier(fixed) {
    width: 640px;
  }
  
  @include element(search) {
    float: right;
    
    @include modifier(left) {
      float: left;
      height: 200px;
    }
  }
}
```

**CSS:**
```css
.header {
  height: 10%;
}

.header--fixed {
  width: 640px;
}

.header__search {
  float: right;
}

.header__search--left {
  float: left;
  height: 200px;
}
```

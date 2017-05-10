#  Table of Contents

* action     - functions that create actions
* dispatcher - functions that dispatch to store
* observer   - functions that observers the store
* reducer    - functions that interpret actions and define the store
* store      - the Redux store
* types      - string constants that provide Action types

##  System Description

``` javascript
event -> dispatcher(action) -> reducer(action) -> store -> observer(store)
```
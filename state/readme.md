#  Table of Contents

* actions    - functions that create actions
* dispatcher - functions that dispatch to store
* observer   - functions that observers the store
* reducers   - functions that interpret actions and define the store
* store      - the Redux store with reducer + observer
* types      - string constants that provide Action types

##  System Description

``` javascript
event -> dispatcher(Action) -> reducer(Action) -> store -> observer(store)
```
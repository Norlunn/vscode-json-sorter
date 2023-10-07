# A JSON Sorter

A JSON Sorter extension for Visual Studio Code that allows for manipulation of JSON lists.

## Features

Currently this extension can only randomize the order of elements in JSON lists.

The list must be at the root of the JSON in the currently open file, like this:
```JSON
[
  {
    "name": "Jessica",
    "age": 21
  },
  {
    "name": "Bob",
    "age": 27
  },
  {
    "name": "Mark",
    "age": 34
  }
]
```

To randomize the list, press **CTRL + SHIFT + P** and choose **A JSON Sorter: Randomize list**.
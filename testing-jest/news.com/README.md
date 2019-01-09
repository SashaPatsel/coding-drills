# Testing React with Jest and Enzyme

If you use CRA (Create React App), you will already have a testing library included with your app. That testing library is `Jest`. _It therefore does not need to be installed separately_.

## Instructions
1. jest comes with CRA
2. Enzyme, created by AirBnB, is unique to React, but still needs to be installed
3. Add the following to your dependencies:

```json
    "enzyme": "^3.8.0",
    "enzyme-adapter-react-16": "^1.7.1",
    "enzyme-to-json": "^3.3.5",
    "react-addons-test-utils": "^15.6.2",
```
4. Can help you find syntax errors that might run locally but aren't sustainable. For example: using `class` instead of `className`.
5. Jest gives us methods like expect, describe, it. Enzyme gives us things like shallow
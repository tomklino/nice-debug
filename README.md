# nice-debug
compact functionality to debug modules without unnecessarily overloading the logs

## Overview

nice-debug provides a compact functions that will write certain messages to log only if an environment variable corrosponding to the debug symbol chosen is set to the desired debug level

## Installation

```js
npm install --save nice-debug
```

## Usage

* In your terminal:

```bash
export MY_DEBUG_SYMBOL=2
```

```js
const debug = require('nice-debug')("MY_DEBUG_SYMBOL")

debug(1, "this message will be written because the debug environment variable is set to 2");
debug(2, "this message will also be written");
debug(3, "this message will not be written");
```

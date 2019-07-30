import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from "./Button";
import { boolean, text } from "@storybook/addon-knobs";

storiesOf("Micros", module)
  .add("Button", () => {

    return <Button 
      primary={boolean("Primary", true)}>
        {text("Button Text", "Button")}
      </Button>;
  });
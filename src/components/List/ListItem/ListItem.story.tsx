import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { ListItem } from './ListItem';

storiesOf("Micros", module)
  .add("ListItem", () => {
    const title = "Title";
    const value = "Value";

    return <ListItem 
      title={title} 
      value={value} 
      onClick={action("Clicked list item")}/>;
  }); 
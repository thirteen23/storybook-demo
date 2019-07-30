import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { List } from './List';

storiesOf("Dashboard", module)
  .add("List", () => {
    const onClick = action("Clicked within list")

    const items = [
      {title: "Item 1", value: "Value 1", onClick},
      {title: "Item 2", value: "Value 2", onClick}
    ];

    const title = "List Title";
    const footerText = "List Footer";

    return <List title={title} items={items} footerText={footerText}/>;
  });
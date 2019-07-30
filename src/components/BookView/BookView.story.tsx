import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import { BookView } from './BookView';

storiesOf("Micros", module)
  .add("BookView", () => {
    return <div style={{ marginTop: "30px" }}>
      <BookView 
        title={text("Title", "A Brief History of Thyme")} 
        author={text("Author", "Shawn Spicer")} 
        onClick={action("Clicked book")}/>
    </div>
  }); 
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import { BookList } from './BookList';

storiesOf("Dashboard", module)
  .add("BookList", () => {
    const onClick = action("Clicked within list")

    const books = [
      {title: "I'm in Love With My Toaster", author: "Gertie Gunderson", onClick},
      {title: "Teaching Your Dog Klingon", author: "Brandt Fiddlestuffs", onClick}
    ];

    return <div style={{ marginTop: "30px" }}>
      <BookList 
        titleText={text("Title Text", "The Bookshelf")} 
        footerText={text("Footer Text", "Thanks for Visiting!")}
        books={books} />
    </div>
  });
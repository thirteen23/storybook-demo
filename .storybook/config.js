import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import IncludeStories from "./include/includeStories";
import { PropTable as TableComponent } from "../src/components/storybook/PropTable/PropTable.tsx";

addDecorator(withInfo({TableComponent}))
addDecorator(withKnobs());
addDecorator(withA11y);

let included = process.env.STORYBOOK_PUBLISH_ALL ? 
  IncludeStories.All : IncludeStories.Finished;

const req = require.context('../src', true, /.story.tsx$/);
function loadStories() {
  req.keys().filter(included).forEach(filename => req(filename));
}

configure(loadStories, module);

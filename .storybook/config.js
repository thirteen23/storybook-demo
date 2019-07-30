import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { PropTable as TableComponent } from "../src/components/storybook/PropTable/PropTable.tsx";

addDecorator(withPropsTable({TableComponent}));
addDecorator(withKnobs());

const req = require.context('../src', true, /.story.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

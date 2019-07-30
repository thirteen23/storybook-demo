import { linkTo } from "@storybook/addon-links";
import React from "react";

import "./PropTable.scss";

const Required = (props) => <span style={{ color: "red" }} {...props} />;

export const PropTable = ({ propDefinitions }) => {
  const props = propDefinitions.map((definition) => {

    const { property, propType, required, defaultValue } = definition;
    let { description } = definition;

    // Check description for @story annotation.
    const storyLinkRegex = /(?:^|\s)@story (.*?)$/gm;
    const storyMatch = storyLinkRegex.exec(description);

    const kindRegex = /(?:^|\s)@kind (.*?)$/gm;
    const kindMatch = kindRegex.exec(description);

    let storyLink: any = "";
    const linkProps: any = {};

    if (storyMatch) {
      // Trim @story annotation from description
      description = description.slice(0, storyMatch.index);

      // Trimp @kind annotation from description, if it exists
      if (kindMatch) {
        if (kindMatch.index < description.length) {
          description = description.slice(0, kindMatch.index);
        }
        linkProps.kind = kindMatch[1];
      }

      const storyName = storyMatch[1];
      linkProps.story = storyName;

      storyLink = (
        <div className="story-link" onClick={linkTo(linkProps.kind, linkProps.story)}>{storyName}</div>
      );
    }

    return (
      <tr key={property}>
        <td>
          {property}
          {required ? <Required>*</Required> : null}
        </td>
        <td>{propType.name}</td>
        <td>{defaultValue}</td>
        <td>{storyLink}</td>
        <td>{description}</td>
      </tr>
    );
  });

  return (
    <div className="prop-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Story</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{props}</tbody>
      </table>
    </div>
  );
};

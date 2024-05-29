import { createRoot } from "react-dom/client";
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css';

import React from 'react';
import { Panel, PanelMain, PanelMainBody, PanelHeader, Divider } from '@patternfly/react-core';

const HeaderPanel = () => (
  <Panel>
    <PanelHeader>Header content</PanelHeader>
    <Divider />
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);

const container = document.getElementById("root");
createRoot(container).render(<HeaderPanel />);
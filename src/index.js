import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Application from '@webcodesk/react-app-framework';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import globalSettings from './app/settings';
import findColor from './utils/colorMap';

let schema;
let userComponents;
let userFunctions;
let packageJson = {};

const client = new ApolloClient({
  uri: 'https://artnews1598886377012.microgen.mejik.id/graphql',
  cache: new InMemoryCache()
});

if (process.env.NODE_ENV !== 'production') {
  schema = require('./app/schema').default;
  userComponents = require('./app/indices/userComponents').default;
  userFunctions = require('./app/indices/userFunctions').default;
  packageJson = require('../package.json');

} else {
  schema = require('./app/schema-prod').default;
  userComponents = require('./app/indices-prod/userComponents').default;
  userFunctions = require('./app/indices-prod/userFunctions').default;
}

function initMuiThemeSettings(appSettings) {
  const muiTheme = {};
  if (appSettings && appSettings.theme) {
    const { palette } = appSettings.theme;
    if (palette) {
      const { type, primary, secondary, error } = palette;
      muiTheme.palette = {
        type,
        primary: {
          main: findColor(primary.main.colorHue, primary.main.colorShade),
          contrastText: primary.contrastText,
        },
        secondary: {
          main: findColor(secondary.main.colorHue, secondary.main.colorShade),
          contrastText: secondary.contrastText,
        },
        error: {
          main: findColor(error.main.colorHue, error.main.colorShade),
          contrastText: error.contrastText,
        }
      };
    }
  }
  return muiTheme;
}

const theme = createMuiTheme(initMuiThemeSettings(globalSettings));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Application
        name={packageJson.name}
        version={packageJson.version}
        schema={schema}
        userComponents={userComponents}
        userFunctions={userFunctions}
      />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

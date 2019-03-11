const dev = {
  env: 'dev',
  gapiSettings: {
    clientId: '825046320659-o7ltcdfs9ich8a6htgmbmpcbrq1h33ir.apps.googleusercontent.com',
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  }
}

const prod = {
  env: 'prod',
  gapiSettings: {
    clientId: '',
    cookiepolicy: 'single_host_origin',
    scope: 'profile'    
  }
}

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export { config }
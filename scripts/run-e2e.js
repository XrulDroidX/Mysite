if(process.env.CI_E2E === 'true'){
  const { execSync } = require('node:child_process')
  execSync('playwright install --with-deps', { stdio:'inherit' })
  execSync('playwright test', { stdio:'inherit' })
}else{
  console.log('[e2e] skipped')
}

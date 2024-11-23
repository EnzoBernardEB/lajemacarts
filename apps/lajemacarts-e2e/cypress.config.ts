import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run lajemacarts:serve:development',
        production: 'nx run lajemacarts:serve:production',
      },
      ciWebServerCommand: 'nx run lajemacarts:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

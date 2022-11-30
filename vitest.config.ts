import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/tests/**/*.spec.ts'],
    watchExclude: ['**/node_modules/**', '**/dist/**', '**/tests/**'],
    coverage: {
      enabled: true,
      provider: 'istanbul',
      exclude: ['src/infra/', 'tests/', 'src/utils/tryify.ts', 'src/domain/entities/AbstractEntity.ts', 'src/domain/entities', 'src/main/env/Environment.ts'],
    },
  },
  plugins: [tsconfigPaths()],
})

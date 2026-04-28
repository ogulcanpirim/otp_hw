import { makeServer } from './server';

let server: ReturnType<typeof makeServer> | undefined;

function isJestRuntime() {
  return typeof jest !== 'undefined';
}

/**
 * Starts Mirage once per JS runtime (survives Fast Refresh in most cases).
 * Skipped under Jest (`jest` global is defined).
 */
export function startMirage() {
  if (!__DEV__ || isJestRuntime()) {
    return;
  }
  if (server) {
    return;
  }
  server = makeServer();
}

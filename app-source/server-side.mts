/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  Server-Side Entry Point

  The SNA Framework looks for top-level .mts files in the `app-source`
  directory for dynamic import. Generally you want just one entry point,
  with other modules imported from subdirectories (e.g. 'app-source/lib')

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

import * as ServerLib from './lib/server-lib.mts';

ServerLib.ServerHello();

/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  Client-Side Entry Point

  The SNA Framework looks for top-level .ts files in the `app-source`
  directory for bundling by esbuild. The found files are added to 
  `__app_imports.ts` to create the esbuild entry point.
  
  Generally you want just one entry point for the client,
  with other modules imported from subdirectories (e.g. 'app-source/lib')

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

import * as ClientLib from './lib/client-lib.ts';

ClientLib.ClientHello();

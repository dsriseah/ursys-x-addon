/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  Sample Addon CLI Build and Serve

  Run this script from the _ur directory; it will automatically find the
  first entry point beginning with `@` and run it. 

  This addon uses the SNA framework to build server and client files found
  in the `app-source` directory, copying the built web app files to 
  `_public/js` along with the assets defined in `app-static`, which is where
  your index.html file should be located. The development server is started
  automatically.

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

import { SNA, PROMPTS, PR } from '@ursys/core';

/// TYPE DECLARATIONS /////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import type { BuildOptions } from '@ursys/core';

/// IMPORTED CLASSES & CONSTANTS //////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const { BLU, YEL, RED, DIM, NRM } = PROMPTS.ANSI; // terminal colors

/// CONSTANTS & DECLARATIONS //////////////////////////////////////////////////
const [AO_DIR, AO_NAME] = SNA.GetProcessInfo(process);
const ADDON = AO_NAME.toUpperCase();
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const DBG = true;
const LOG = PR(ADDON, 'TagCyan');

/// RUNTIME ///////////////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(async () => {
  LOG(`${ADDON} SNA Live Reload Playground for Browsers`);
  const options: BuildOptions = {};
  await SNA.Build(AO_DIR, options);
  await SNA.Start();
})();

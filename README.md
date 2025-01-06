> [!IMPORTANT]
> This repo is dependent on having already installed [URSYS](https://github.com/dsriseah/ursys).

## Quick Instructions

Clone this repo into your URSYS `_ur_addons` directory as follows:
```
cd _ur_addons
git clone --depth 1 https://github.com/dsriseah/ursys-x-sna-addon.git x-myaddon
rm -fr x-myaddon/.git/
```
This creates a `x-myaddon` directory. **User addons must use the `x-` prefix otherwise they will be added to URSYS core.** The main `.gitignore` file in URSYS excludes anything matching the `_ur_addons/x-*` pattern.

> [!TIP]
> If you want to retain source control, fork this repo and rename it `x-yourname`. The name should be something easy to type on the command line, as the name of the folder is the same as the name of the command you execute with the **ur** script

See [Addon Framework](https://github.com/dsriseah/ursys/wiki/URSYS-Addons-Framework) for more information about the addon system.

## Example Addon Features

This addon uses the [SNA Framework](https://github.com/dsriseah/ursys/wiki/Overview-of-SNA) to simplify URSYS development. This makes it easy to start a development webserver and run server scripts for quick-and-dirty module development.

## Running the Addon

**1. list available addons**
```
cd _ur
ur
```
This will list all the addons installed in this particular URSYS instance. There are several built-in addons. The `x-myaddon` addon you added will also appear in this list.

**2. run the addon**
```
ur x-myaddon
```
Note that **terminal output** and also browse to **http://localhost:8080** and open the Javascript console.

See the [SNA Framework](https://github.com/dsriseah/ursys/wiki/Overview-of-SNA) documentation for more information.

## Directory Structure and Order of Execution

The URSYS Addon System runs the first `@` file it finds in the addon directory, whichin this case is `@server.mts`. This short file does several things:
* compiles the webapp by scanning for `.ts` files in `app-source` directory using esbuild
* starts the websocket and webserver systems with URNET support
* dynamically scans and loads `.mts` files in the `app-source` directory 
* serves the `index.html` file that was copied from `app-static`

## Future Expansion

The Addon system facilitates the creation of URSYS-based code modules that can be included as a standalone library, though the process of including such modules is not yet automated. Addons currently are most useful for developing concepts that are eventually moved into the main URSYS CORE repository.






## Quick Instructions

Clone this repo into your `_ur_addons` directory as follows:
```
cd _ur_addons
git clone -b main --depth 1 --single-branch https://github.com/dsriseah/ursys-x-addon.git x-myaddon
rm -fr x-myaddon/.git/
```

This creates a `x-myaddon` directory. **User addons must use the `x-` prefix otherwise they will be added to URSYS core.** The main `.gitignore` file in URSYS excludes anything matching the `_ur_addons/x-*` pattern.

You can then run the addon from the `_ur` directory using the **ur** command-line script without any arguments, which will list all available
addons. For this example, running **ur x-myaddon** will run the addon.

See [Addon Framework](https://github.com/dsriseah/ursys/wiki/URSYS-Addons-Framework) for more information about the addon system.

## Example Addon Features

This addon uses the [SNA Framework](https://github.com/dsriseah/ursys/wiki/Overview-of-SNA) to simplify URSYS development. This makes it easy to start a development webserver and run server scripts for quick-and-dirty module development.





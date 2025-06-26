# TypeScript X3D Example

This folder contains a minimal TypeScript example demonstrating how to send
an X3D pairing message via a serial connected radio dongle.

It uses the `serialport` package to access the USB device. The example assumes
the dongle is available at `/dev/ttyUSB0` and runs at 115200 baud.

To build the project:

```sh
npm install  # install dependencies (requires internet access)
npx tsc      # compile into `dist/`
```

Then run the script with:

```sh
node dist/index.js
```

This simply sends a basic pairing frame on the serial port.

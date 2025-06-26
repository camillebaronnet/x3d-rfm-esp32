// Minimal helper to build a pairing request frame

/**
 * Build a X3D pairing message payload.
 * @param targetSlot The slot number (0-15) for the new device
 * @param pin Optional pairing pin (0 if unknown)
 */
export function buildPairingMessage(targetSlot: number, pin: number): Buffer {
  const buf = Buffer.alloc(16);
  let i = 0;

  // message header
  buf[i++] = 0; // length, will be filled later
  buf[i++] = 0; // addr placeholder
  buf[i++] = 0; // msg id low
  buf[i++] = 0; // msg type pairing
  buf[i++] = 0; // header len
  buf[i++] = 0; // device id
  buf[i++] = 0;
  buf[i++] = 0;
  buf[i++] = 4; // network number
  buf[i++] = 0; // status
  buf[i++] = 0; // retry

  // payload pairing data
  buf[i++] = 0x00; // cnt + device nibble
  buf.writeUInt16LE(0xff1f, i); i += 2;
  buf.writeUInt16LE(targetSlot, i); i += 2;
  buf.writeUInt16LE(pin, i); i += 2;
  buf.writeUInt16LE(0xe0, i); i += 2;

  buf[0] = i - 1; // length without preamble
  return buf.slice(0, i);
}

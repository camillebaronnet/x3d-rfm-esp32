import { SerialPort } from 'serialport';
import { buildPairingMessage } from './x3d';

async function main() {
  const port = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200 });

  const buffer = Buffer.alloc(64);
  const slot = 0; // example new slot
  const pin = 0x0000; // unknown pairing pin
  const pairingMsg = buildPairingMessage(slot, pin);

  port.write(pairingMsg);
  console.log('Pairing message sent');
}

main().catch(err => console.error(err));

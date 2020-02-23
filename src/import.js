#!/usr/bin/env node

import { dbConnect, dbClose } from './lib/db';

dbConnect();

// ...

dbClose();
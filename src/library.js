#!/usr/bin/env node

import { dbConnect, dbClose } from './db';

dbConnect();

// ...

dbClose();
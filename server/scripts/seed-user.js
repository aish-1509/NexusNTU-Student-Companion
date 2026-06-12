// scripts/seed-user.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const mongoose = require('mongoose');
const User = require('../models/User');

(async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('Add MONGO_URI to .env');

    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });

    const doc = {
      username: 'demo',
      password: 'Password123!',
      ph: '6591234567',
      fullname: 'Demo User',
      gender: 'Male',
      nationality: 'Chinese',
      profession: 'Student',
      homeaddress: '123 Demo Street',
      homepostal: '123456',
      securityq: 'Your first pet?',
      securityans: 'Fluffy',
    };

    await User.deleteOne({ username: doc.username });

    const created = await User.create(doc);
    console.log('Seeded demo user:', { id: created.id, username: created.username });
  } catch (e) {
    console.error('Seed error:', e);
  } finally {
    await mongoose.disconnect();
  }
})();

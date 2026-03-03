require('dotenv').config();

module.exports = {
  admin: {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'sadf23e12d1'
  },
  server: {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'nav-item-jwt-secret-23242342024-secure-key'
  }

}; 

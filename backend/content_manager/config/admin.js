module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b4e6d8d55998a94a4e287c2989b6730'),
  },
});

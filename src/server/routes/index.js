module.exports = ({ packageJson }) => {
  return {
    version: (req, res) =>
      res.json({
        version: packageJson.version,
      }),
    default: (req, res) => {
      res.json({
        worked: 'worked',
      });
    },
  };
};
